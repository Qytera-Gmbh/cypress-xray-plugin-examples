// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// ============================================================================================== //

// EITHER:

import "cypress-xray-plugin/commands";

// OR:

// import { enqueueTask, PluginTask } from "cypress-xray-plugin/commands/tasks";

// Cypress.Commands.overwrite("request", (originalFn, options) => {
//   return enqueueTask(
//     PluginTask.OUTGOING_REQUEST,
//     `request ${new Date().toTimeString()}.json`,
//     options
//   )
//     .then(originalFn)
//     .then((response) =>
//       enqueueTask(
//         PluginTask.INCOMING_RESPONSE,
//         `response ${new Date().toTimeString()}.json`,
//         response
//       )
//     );
// });
