document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion h3");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      this.nextElementSibling.classList.toggle("active");

      accordions.forEach((otherAccordion) => {
        if (otherAccordion !== this) {
          otherAccordion.nextElementSibling.classList.remove("active");
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const anchor = document.querySelector(".anchor");
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 300) {
      anchor.style.display = "block";
      anchor.style.transform = "translateX(-50px)";
    } else {
      anchor.style.transform = "translateX(50px)";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var burgerIcon = document.getElementById("burger-icon");
  var burgerMenu = document.querySelector(".burger-menu");

  if (burgerIcon && burgerMenu) {
    burgerIcon.addEventListener("click", function () {
      burgerMenu.classList.toggle("active");
    });
  } else {
    burgerMenu.classList.toggle("active");
  }
});

function smoothScroll(event) {
  event.preventDefault();

  const targetId = event.target.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
}
function searchFunc(event) {
  event.preventDefault();
  const modal = document.querySelector(".modal");
  if (modal.style.display === "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}
