export function validarURL(URL) {
    cy.url().should("eq", URL);
}
    