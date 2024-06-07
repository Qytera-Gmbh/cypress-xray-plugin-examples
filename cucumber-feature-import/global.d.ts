declare module "cypress-on-fix" {
  function fix(on: Cypress.PluginEvents): Cypress.PluginEvents;
  export = fix;
}
