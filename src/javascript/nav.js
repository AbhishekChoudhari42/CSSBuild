function $(element) {
  return document.querySelector(element);
}

$(".ham").onclick = () => {
  $(".ham").classList.toggle("close");
  $(".nav-area").classList.toggle("open");
};
