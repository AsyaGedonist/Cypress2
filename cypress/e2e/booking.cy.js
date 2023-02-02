const selectors = require("../fixtures/selectors.json");
const logins = require("../fixtures/login.json");
const film = require("../fixtures/film.json");

it("Add Film and Book it", () => {
    cy.visit("/admin/");
    cy.loginAdm("qamid@qamid.ru", "qamid");

    cy.get(".conf-step__movie-title").

  });