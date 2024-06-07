// This file is required to hide the following warning:
//
//   Could not find a declaration file for module 'cypress-on-fix', it implicitly has an 'any' type.
//   Try `npm i --save-dev @types/cypress-on-fix` if it exists or add a new declaration (.d.ts) file
//   containing `declare module 'cypress-on-fix';`ts(7016)
declare module "cypress-on-fix" {
  function fix(on: Cypress.PluginEvents): Cypress.PluginEvents;
  export = fix;
}
