# language: pt
Funcionalidade: Pesquisa no Google
  Uma pesquisa basica no google

  Esquema do Cenário:
    Dado que estou na página "https://google.com"
    Quando eu procuro por "<word>"
    Então o título da página deve ter o texto "<word>"
    
    Exemplos:
    |   word      |
    |   queijo    |
    |   mamão    |
    |   teste   |
    |   view matches  |