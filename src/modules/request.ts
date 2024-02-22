import axios from "axios";
import { cardHTML } from "./cardHTML";
import { addBook } from "./addBook";
export const request = (category: string, position: number): any => {
  const api = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&key=AIzaSyC0d0WOhMM9yJKTm9Dy7jWdpAxIT9ajLEk&printType=books&startIndex=${position}&maxResults=6&langRestrict=en`;
  // Make a request for a user with a given ID

  axios
    .get(api)
    .then((response) => {
      let data = response.data.items;
      const cards = document.getElementById("cards") as HTMLElement;
      if (!Boolean(data)) console.log("Ошибка, нужен VPN");
      data.forEach((el: any) => {
        const card = document.createElement("div") as HTMLElement;
        card.id = "card";
        card.className = "card";
        let fav = JSON.parse(localStorage.getItem("fav"));
        let flag: boolean = false;
        if (Boolean(fav)) {
          if (fav.length > 0) {
            fav.forEach((element: any) => {
              if (el.id === element.id) {
                flag = true;
              }
            });
          }
        }

        let cardData = {
          preview: el.volumeInfo.imageLinks.thumbnail,
          author: el.volumeInfo.authors,
          title: el.volumeInfo.title,
          description: el.volumeInfo.description,
          price: {
            saleability: el.saleInfo.saleability === "FOR_SALE" ? true : false,
            price: el.saleInfo.retailPrice?.amount,
            currency: el.saleInfo.retailPrice?.currencyCode,
          },
          id: el.id,
          inTheBasket: flag,
        };

        let x = cardHTML(cardData);
        card.innerHTML = x;

        cards.appendChild(card);

        addBook(cardData);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
