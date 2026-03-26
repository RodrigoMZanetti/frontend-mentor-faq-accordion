const faqOpenButtons = document.querySelectorAll(".accordion-header");

faqOpenButtons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    const clickedButton = evt.currentTarget;
    const mainAccordion = clickedButton.closest(".accordion");
    const containerTarget = mainAccordion.querySelector(
      ".accordion__container",
    );
    containerTarget.classList.toggle("accordion-is-open");
    if (containerTarget.classList.contains("accordion-is-open")) {
      clickedButton.setAttribute("aria-expanded", "true");
    } else {
      clickedButton.setAttribute("aria-expanded", "false");
    }
  });
});
