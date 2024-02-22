import { shop } from "./shop";

export const addBook = (data: any) => {
  const cardInfo = document.getElementById("cards") as HTMLElement | null;
  if (cardInfo) {
    cardInfo.addEventListener("click", (event: Event) => {
      const x = event.target as HTMLElement;
      if (x.id === data.id) {
        let cards: any[] = JSON.parse(localStorage.getItem("fav") || "[]");
        // Проверяем, есть ли уже элемент с таким id в массиве cards
        const index = cards.findIndex((el) => el.id === data.id);

        if (index !== -1) {
          x.classList.remove("shopBook");
          x.innerText = "buy now";
          // Если элемент с таким id уже есть, удаляем его из массива

          cards.splice(index, 1);
        } else {
          x.classList.add("shopBook");
          x.innerText = "in the cart";
          // Если элемента с таким id еще нет, добавляем его в массив
          cards.push(data);
        }

        // Обновляем localStorage
        localStorage.setItem("fav", JSON.stringify(cards));

        // Вызываем функцию shop()
        shop();
      }
    });
  }
};
