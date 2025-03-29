// cria função, declara o nome da função, e passa o valor da classe '.section' pra string section
//* por motivo de reutilização, se usasse a classe propriamente só funcionaria pra ela mesma
function showSection(section) {
  document
    // pega a classe section e seleciona todos os itens dela
    .querySelectorAll("section")
    // e pra cada item dentro dela (que a variavel sec está recebendo) a gente remove qm ta com a classe 'active'
    .forEach((sec) => sec.classList.remove("active"));
  document
    //TODO `.${}` o que significa?
    //? `` está definindo uma template string (ou template literal)
    //TODO o que é uma template string?
    //* é tipo uma string só que mais dinamica ou seja vc consegue fazer mais coisas nela,
    //? ${} é uma interpolação que ta inserindo o valor da variavel, ou seja section, dentro da string, ou seja do template string
    //TODO que string?
    //* o template string !!!!
    //? . indica que estamos falando com a classe laaaa do css
    // ele ta pegando da variavel a selecionando todas
    .querySelectorAll(`.${section}`)
    // aqui ele pega uma por uma e coloca na variavel, ou seja sec, em seguinda adiciona qm ta com a classe 'active'
    .forEach((sec) => sec.classList.add("active"));
}

// criando e nomeando a funçao & colocando nome de hamburger pro que ta vindo do html
function showMenu(hamburger) {
  // cria variavel mh que seleciona lista com todo mundo do hamburger
  var mh = document.querySelectorAll(`.${hamburger}`);
  // cria variavel h e coloca cada item da lista acima separados no h
  mh.forEach(function (h) {
    //funciona como um botao, ta sem classe active? add classe active, ta com classe active? remove class active
    h.classList.toggle("active");
  });
}
