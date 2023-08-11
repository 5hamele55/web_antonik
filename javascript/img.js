let projectItemImg = document.querySelectorAll('.project__item-img')
projectItemImg.forEach(e => e.addEventListener("click", zoomImg))
function zoomImg() {
  this.parentElement.classList.toggle("project__item")
  this.parentElement.classList.toggle("zoomed-img-bg")
  this.classList.toggle("project__item-img");
  this.classList.toggle("zoom");
}