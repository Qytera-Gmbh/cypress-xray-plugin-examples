# Feature File Upload Demo Project

This is a demo project to teach how to use the Cucumber feature file import of the [cypress-xray-plugin](https://www.npmjs.com/package/cypress-xray-plugin).

## Prerequisites

- Node.js (version >= 18)
- npm or yarn

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Qytera-Gmbh/cypress-xray-plugin-examples
   cd cypress-xray-plugin-examples/cucumber-feature-import
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```

3. Modify `cypress.config.ts` as needed or create a [`.env`](https://www.npmjs.com/package/dotenv) file:

   ```sh
   # Authentication: https://qytera-gmbh.github.io/projects/cypress-xray-plugin/section/configuration/authentication/
   XRAY_CLIENT_SECRET=...
   XRAY_CLIENT_ID=...
   JIRA_API_TOKEN=...
   JIRA_USERNAME=...
   JIRA_PASSWORD=...

   JIRA_PROJECT_KEY=...
   JIRA_URL=...
   ...
   ```

4. Adapt the Cucumber tags key in `cucumber-feature-import\cypress\e2e\mini.feature` to your Xray/Cucumber [tagging scheme](https://qytera-gmbh.github.io/projects/cypress-xray-plugin/section/configuration/cucumber/#prefixes) and [existing issues](https://qytera-gmbh.github.io/projects/cypress-xray-plugin/section/guides/targetingExistingIssues/#reuse-cucumber-issues), e.g.:

    ```diff
      Background:
    -   #@MyPreconditionPrefix:CYP-12345
    +   #@Precondition:PRJ-42
        Given A given

    - @MyScenarioPrefix:CYP-67890
    + @TestName:PRJ-123
      Scenario: A scenario
        When A when
        Then A then
    ```

## Running Tests

To run the tests, use the following command:

```sh
npx cypress run
```

The `mini.feature` feature file will be imported to Xray on execution.
Ideally, no warnings should appear.
However, it usually takes a few tries to figure out how feature files need to be tagged so that Xray can understand them and associate them with corresponding test or precondition issues.

```console
[...]
  Running:  mini.feature
│ Cypress Xray Plugin │ INFO    │ Preprocessing feature file cypress\e2e\mini.feature...
│ Cypress Xray Plugin │ INFO    │ Importing feature file to Xray...


  A feature
    √ A scenario (163ms)


  1 passing (198ms)
[...]
```
