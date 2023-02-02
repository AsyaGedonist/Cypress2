const logins = require("../fixtures/login.json");

it("Should be on the main page", () => {
  
  logins.forEach(login=>{
    cy.visit("/admin/");
    cy.loginAdm(login.login, login.pass);
    cy.contains(login.expected).should("be.visible");
  })
});

