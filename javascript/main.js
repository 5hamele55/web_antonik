const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const navigation = document.querySelector(".header__nav");
  const navLinks = document.querySelectorAll(".nav-list__item")

  hamburger.addEventListener('click', () => {
    navigation.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    })
    hamburger.classList.toggle('toggle');
  })
}
navSlide();