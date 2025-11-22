(() => {
  const refs = {
    openModalTraditionBtn: document.querySelector('[data-modalTradition-open]'),
    closeModalTraditionBtn: document.querySelector(
      '[data-Modaltradition-close]'
    ),
    modalTradition: document.querySelector('[data-modalTradition]'),
  };

  refs.openModalTraditionBtn.addEventListener('click', toggleModalTradition);
  refs.closeModalTraditionBtn.addEventListener('click', toggleModalTradition);

  function toggleModalTradition() {
    refs.modalTradition.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
