/*precisamos fazer o botao do tema mudar quando for clicado encima de dia 
para escuro e vice versa.*/

// objetivo 1 - quando clicar no botao de troca de tema, adicionar a classe no modo-escuro no body para que os estilos do modo-escuro seja aplicado e mudar a imagem da lua.

// passo 1 - pegar o JS o elemento html correspondente ao botao de troca de tema.

const botaoAlterarTema = document.getElementById
("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no JS o elemento html correspondente ao body

const body = document.querySelector("body"); 

const imagemBotaoTrocaDeTema = document. querySelector(".imagem-botao")

// passo 3 - da um jeito de identificar o clica do cliente e mudar o tema


botaoAlterarTema.addEventListener("click", () => {
    
    // passo 6 - verificar se o body ja tem a classe modo-escuro 
    
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if(modoEscuroEstaAtivo){

    
    //passo 7 - remover a classe do modo-escuro do body 
    
    
    //passo 8 - trocar a imagem do botao de alterar tema para sol 
    imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/sun.png")

}else {
    //passo 4 - adicionar a classe modo escuro no body

    

    //passo 5 - trocar a imagem do botao de alterar tema para lua
    
    imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/moon.png")

}
});































