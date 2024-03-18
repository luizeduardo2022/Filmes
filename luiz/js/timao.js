// Obtém uma referência ao elemento HTML com o id 'chk'
const chk = document.getElementById('chk');
// Obtém uma referência ao elemento HTML com o id 'ctk'
const ctk = document.getElementById('ctk');
// Obtém uma lista de todos os elementos HTML com a classe 'card'
const carts = document.querySelectorAll(".card");

// Função que é chamada quando o botão é clicado para mudar para o modo escuro
function clicar() {
    // Define a cor de fundo do corpo do documento como preto
    document.body.style.backgroundColor = "black";
    // Define a cor do texto do corpo do documento como branco
    document.body.style.color = "white";
    
    // Para cada cartão na lista de cartões
    carts.forEach(function(card) {
        // Define a cor do texto do cartão como branco
        card.style.color = 'white';
        // Define a cor de fundo do cartão como preto
        card.style.backgroundColor = 'black';
    });
}

// Função que é chamada quando o botão é clicado para mudar para o modo claro
function clicou() {
    // Define a cor de fundo do corpo do documento como branco
    document.body.style.backgroundColor = "white";
    
    // Para cada cartão na lista de cartões
    carts.forEach(function(card) {
        // Define a cor do texto do cartão como preto
        card.style.color = 'black';
        // Define a cor de fundo do cartão como branco
        card.style.backgroundColor = 'white';
    });
}
