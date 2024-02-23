import { request } from "./request";
import { addSpinner, removeSpinner } from "./spinner";

export const start = (count: number): void => {
  const liElements = document.querySelectorAll(".content__item");

  liElements.forEach((li: HTMLElement) => {
    li.addEventListener("click", () => {
      const isActive = li.classList.contains("content__item--active");
      document.getElementById("button").style.display = "none";
      // Если элемент уже активен, выходим из обработчика
      if (isActive) {
        return;
      }

      liElements.forEach((item) => {
        item.classList.remove("content__item--active");
      });
      li.classList.add("content__item--active");
      const cards = document.getElementById("cards");
      cards.innerHTML = "";
      let attribute = li.getAttribute("data-name");
  addSpinner();
      request(attribute, count,true);
           
    });
  });
};
