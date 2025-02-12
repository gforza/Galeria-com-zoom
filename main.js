
document.querySelector('.gallery').addEventListener('click', (event) => {
  
  if (event.target.tagName === 'IMG') {
      //  Remover qualquer modal existente antes de criar um novo
      const existingModal = document.querySelector('.modal');
      if (existingModal) {
          document.body.removeChild(existingModal);
      }

      //  Criar um novo modal
      const modal = document.createElement('div');
      modal.classList.add('modal');

      //  Criar e adicionar a imagem ao modal
      const modalImg = document.createElement('img');
      modalImg.src = event.target.src;

      modal.appendChild(modalImg);
      document.body.appendChild(modal);

      //  Fechar o modal ao clicar nele
      modal.addEventListener('click', () => {
          document.body.removeChild(modal);
      });
  }
});

  