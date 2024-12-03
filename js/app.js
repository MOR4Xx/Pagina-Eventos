document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const apresentacaoSection = document.querySelector('#apresentacao');

  window.addEventListener('scroll', () => {
    const sectionTop = apresentacaoSection.getBoundingClientRect().top;
    const sectionBottom = apresentacaoSection.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;

    if (sectionTop < viewportHeight && sectionBottom > 0) {
      header.style.opacity = '0';
      header.style.pointerEvents = 'none';
    } else {
      header.style.opacity = '1';
      header.style.pointerEvents = 'auto';
    }
  });
});
