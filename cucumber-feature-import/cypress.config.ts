import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { defineConfig } from "cypress";
import fix from "cypress-on-fix";
import { configureXrayPlugin, syncFeatureFile } from "cypress-xray-plugin";

import "dotenv/config";

export default defineConfig({
  env: process.env,
  e2e: {
    async setupNodeEvents(on, config) {
      const fixedOn = fix(on);
      await configureXrayPlugin(on, config, {
        jira: {
          // Placeholder.
          projectKey: "CYP",
          url: "https://example.org",
          testPlanIssueKey: "CYP-1",
        },
        cucumber: {
          featureFileExtension: ".feature",
          uploadFeatures: true,
          prefixes: {
            test: "TestId:",
            precondition: "Precondition:",
          },
        },
      });
      await addCucumberPreprocessorPlugin(fixedOn, config);
      fixedOn("file:preprocessor", async (file) => {
        await syncFeatureFile(file);
        const cucumberPlugin = createBundler({
          plugins: [createEsbuildPlugin(config)],
        });
        return cucumberPlugin(file);
      });
      return config;
    },
    specPattern: "**/*.feature",
  },
});
