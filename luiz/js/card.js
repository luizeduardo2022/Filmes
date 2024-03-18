// Este evento é disparado quando o DOM do documento foi completamente carregado e analisado,
// sem esperar pelo CSS, imagens e outros recursos externos.
document.addEventListener("DOMContentLoaded", function() {
  // Obtém referência para o formulário com o id "add-card-form"
  const form = document.getElementById("add-card-form");
  // Obtém referência para o contêiner de cartões com o id "cards-container"
  const cardsContainer = document.getElementById("cards-container");

  // Adiciona um ouvinte de evento para o evento de envio do formulário
  form.addEventListener("submit", function(event) {
      // Impede o comportamento padrão do envio do formulário
      event.preventDefault();

      // Obtém os valores dos campos do formulário
      const title = form.title.value;
      const imageFile = form['image-file'].files[0];
      const content = form.content.value;

      // Verifica se um arquivo de imagem foi selecionado
      if (imageFile) {
          // Se sim, cria um novo objeto FileReader para ler o conteúdo do arquivo
          const reader = new FileReader();
          // Lê o conteúdo do arquivo como uma URL de dados
          reader.readAsDataURL(imageFile);
          // Define uma função de retorno de chamada que será chamada quando a leitura estiver concluída
          reader.onload = function() {
              // Obtém a URL de dados da imagem lida
              const imageUrl = reader.result;
              // Adiciona um novo cartão com a imagem
              addCard(title, imageUrl, content);
          };
      } else {
          // Se nenhum arquivo de imagem foi selecionado, adiciona um cartão sem imagem
          addCard(title, null, content);
      }

      // Limpa os campos do formulário após o envio
      form.reset();
  });

  // Função para adicionar um novo cartão ao contêiner
  function addCard(title, imageUrl, content) {
      // Cria um novo elemento <div> para representar o cartão
      const card = document.createElement("div");
      // Adiciona a classe "card" ao elemento <div>
      card.classList.add("card");
      // Define o conteúdo HTML do cartão com base nos parâmetros fornecidos
      card.innerHTML = `
          ${imageUrl ? `<img src="${imageUrl}" alt="${title}">` : ''}
          <h5>${title}</h5>
          <p>${content}</p>
          <a href="" class="btn btn-warning">TRAILER</a>`;
      // Adiciona o cartão ao contêiner de cartões
      cardsContainer.appendChild(card);
  }
});
