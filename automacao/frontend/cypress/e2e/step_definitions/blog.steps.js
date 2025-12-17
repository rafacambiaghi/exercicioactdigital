import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import BlogPage from "../../pages/BlogPage";

Given("que acesso o blog do Agibank", () => {
  BlogPage.acessarBlog();
});

When("realizo uma busca por {string}", (texto) => {
  BlogPage.clicarBusca();
  BlogPage.digitarBusca(texto);
});

Then("devo visualizar resultados relacionados", () => {
  BlogPage.validarResultadoBusca("empréstimo");
});

When("acesso a categoria {string}", (categoria) => {
  BlogPage.acessarCategoria(categoria);
});

Then("devo visualizar uma lista de posts", () => {
  BlogPage.validarListaPosts();
});