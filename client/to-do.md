Login - styling
[X] - Remover todos os CSS in JS para usar apenas o styled-components
[ ] - Componentizar

Login - POST
[X] - Pegar o value do input de email e password -> e.target.value ou dessa forma:
`const { email, password } = event.target.elements;`
[X] - Armazenar o access-token, client e uid no localStorage
  [N] - ver alguma forma de encriptar esses de cima

--- extras ---
[ ] - agrupar imports
[ ] - utilizar typescript
[ ] - imports ordem alfabética
[ ] - refactor axios
[ ] - alterar PrivateRoute pra além de testar o localStorage, tb fazer um request para o login
[ ] - colocar cores em variáveis
[ ] - add loading to private route
[ ] - criar useEffect no Login pra checar se existe o auth
[ ] - usar icones do prototipo
[ ] - dar fetch em todas enterprises na homepage e remover ao clicar no icone. <- aqui coloco um botão tipo: Mostrar tudo
  [] - mostrar tudo também precisa ter filtro
[ ] - usar o jsdoc
[ ] - imports ordem alfabetica

----
1. armazenar todas as empresas
2. passar por contexto para alguém
3. esse alguém vai filtrar e mostrar

// Falar que não achei o endpoint que filtrava por nome, por isso usei o filter mas já cientei do desempenho