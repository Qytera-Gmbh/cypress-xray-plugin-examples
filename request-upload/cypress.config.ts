import { defineConfig } from "cypress";
import { configureXrayPlugin } from "cypress-xray-plugin";

// For reading environment variables from a .env file.
// See: https://www.npmjs.com/package/dotenv
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
        },
        xray: {
          uploadRequests: true,
        },
      });
    },
  },
});
