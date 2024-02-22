
import { request } from "./request";

export const start = (count: number): void => {
  const liElements = document.querySelectorAll(".content__li");

  liElements.forEach((li: HTMLElement) => {
    li.addEventListener("click", () => {
      const isActive = li.classList.contains("content__li-active");

      // Если элемент уже активен, выходим из обработчика
      if (isActive) {
        return;
      }

      liElements.forEach((item) => {
        item.classList.remove("content__li-active");
      });
      li.classList.add("content__li-active");
      const cards = document.getElementById("cards");
      cards.innerHTML = "";
      let attribute = li.getAttribute("data-name");

      request(attribute, count);

    });
  });
};
