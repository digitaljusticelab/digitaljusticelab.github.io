function scrollTo(id, event) {
  document.querySelector(id).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  event.preventDefault();
}


document.addEventListener("DOMContentLoaded", function(event) {
  Array.prototype.forEach.call(document.querySelectorAll(".menu a"), function(element) {
    element.addEventListener("click", scrollTo.bind(null, element.hash));
  });
});
