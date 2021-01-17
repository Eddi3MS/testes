const menuItems = document.querySelectorAll('.page-scroll');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})


function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}


function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 200;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

