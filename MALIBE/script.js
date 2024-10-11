document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  let currentIndex = 0;

  document.getElementById("next").addEventListener("click", function () {
    goToNextSlide();
  });

  document.getElementById("prev").addEventListener("click", function () {
    goToPrevSlide();
  });

  function goToNextSlide() {
    items[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add("active");
    updateCarouselPosition();
  }
  // BOUTON PARTAGE

  document
    .getElementById("share-facebook")
    .addEventListener("click", function () {
      const url = window.location.href;
      const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`;
      window.open(facebookShareUrl, "_blank");
    });

  document
    .getElementById("share-whatsapp")
    .addEventListener("click", function () {
      const url = window.location.href;
      const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
        url
      )}`;
      window.open(whatsappShareUrl, "_blank");
    });

  // BOUTON PARTAGE
  // TESTE

  window.showSlide = function (index) {
    slides[currentIndex].classList.remove("active");
    currentIndex = index;
    slides[currentIndex].classList.add("active");
  };
  window.likePhoto = function () {
    const likeButton = document.querySelector(".like");
    likeButton.classList.add("liked");
    setTimeout(() => {
      likeButton.classList.remove("liked");
    }, 500);

    const likesElement = document.getElementById("likes");
    let likes = parseInt(likesElement.textContent);
    likes += 1;
    likesElement.textContent = likes;
  };

  const dateElement = document.getElementById("current-date");
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  dateElement.textContent = `Date: ${today.toLocaleDateString(
    "fr-FR",
    options
  )}`;

  // TESTE

  // bouton whatsapp et contact
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Merci pour votre message. Nous vous contacterons bientôt.");
      this.reset();
    });

  // bouton whatsapp et contact
  function goToPrevSlide() {
    items[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    items[currentIndex].classList.add("active");
    updateCarouselPosition();
  }

  function updateCarouselPosition() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }
});
