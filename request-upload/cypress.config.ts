import { defineConfig } from "cypress";
import { configureXrayPlugin } from "cypress-xray-plugin";
import "dotenv/config";

export default defineConfig({
  env: process.env,
  e2e: {
    async setupNodeEvents(on, config) {
      await configureXrayPlugin(on, config, {
        jira: {
          // Placeholder values.
          projectKey: "CYP",
          url: "https://example.org",
          testExecutionIssueKey: "CYP-721",
        },
        xray: {
          uploadRequests: true,
        },
      });
    },
  },
});
