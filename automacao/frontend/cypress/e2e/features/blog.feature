Feature: Blog Agibank

  Scenario: Pesquisar um artigo no blog
    Given que acesso o blog do Agibank
    When realizo uma busca por "empréstimo"
    Then devo visualizar resultados relacionados

  Scenario: Acessar uma categoria do blog
    Given que acesso o blog do Agibank
    When acesso a categoria "Educação Financeira"
    Then devo visualizar uma lista de posts