import "../public/index.html";
import "./sass/reset.scss";
import "./sass/style.scss";
import "./modules/slider";
import { request } from "./modules/request";
import { button } from "./modules/submit";
let count: number = 0;
request("Architecture", count);

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

    let attribute = li.getAttribute("data-name");

    // console.log(qwe);

    request(attribute, 0);
    button(attribute, count);
  });
});


button("Architecture", count);
