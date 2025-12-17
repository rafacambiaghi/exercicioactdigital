class BlogPage {

  acessarBlog() {
    cy.visit("/");
  }

  clicarBusca() {
    cy.get('button[aria-label="Buscar"]').click();
  }

  digitarBusca(texto) {
    cy.get('input[type="search"]').type(`${texto}{enter}`);
  }

  validarResultadoBusca(texto) {
    cy.contains(texto).should("be.visible");
  }

  acessarCategoria(nomeCategoria) {
    cy.contains("Categorias").click();
    cy.contains(nomeCategoria).click();
  }

  validarListaPosts() {
    cy.get("article").should("have.length.greaterThan", 0);
  }
}

export default new BlogPage();