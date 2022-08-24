const validate = () => {
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-content');
  const modalClose = document.querySelector('#close');

  modal.classList.remove('hidden');
  modalContent.classList.add('active');

  modalClose.addEventListener('click', () => {
    modal.classList.add('hidden');
    modalContent.classList.remove('active');
  });

  modal.addEventListener('click', () => {
    modal.classList.add('hidden');
    modalContent.classList.remove('active');
  });
};

export default validate;
