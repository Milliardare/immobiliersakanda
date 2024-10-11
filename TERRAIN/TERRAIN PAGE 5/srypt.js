document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "translateY(-10px)";
      card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseout", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";

      // pagination de 1 a 16

      document.addEventListener("DOMContentLoaded", () => {
        const pages = document.querySelectorAll(".page");

        pages.forEach((page) => {
          page.addEventListener("click", function (event) {
            event.preventDefault();
            // Remove active class from all pages
            pages.forEach((p) => p.classList.remove("active"));
            // Add active class to the clicked page
            this.classList.add("active");
            // Handle the page change logic here
            const pageNum = this.getAttribute("data-page");
            console.log(`Page ${pageNum} clicked`);
            // You can add code here to load the content for the clicked page
          });
        });
      });

      // pagination de 1 a 16
    });
  });
});
