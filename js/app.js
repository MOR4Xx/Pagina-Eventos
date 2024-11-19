window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > document.querySelector('.hero').offsetHeight - header.offsetHeight) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
