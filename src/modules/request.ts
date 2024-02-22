import axios from "axios";
import { cardHTML } from "./cardHTML";
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
        let cardData = {
          preview: el.volumeInfo.imageLinks.thumbnail,
          author: el.volumeInfo.authors[0],
          title: el.volumeInfo.title,
          // rating: {
          //   stars: el.,
          //   reviews: el.,
          // },
          description: el.volumeInfo.description,
          price: {
            saleability: el.saleInfo.saleability === "FOR_SALE" ? true : false,
            price: el.saleInfo.retailPrice?.amount,
            currency: el.saleInfo.retailPrice?.currencyCode,
          },
          link: el.accessInfo.webReaderLink,
        };
        let x = cardHTML(cardData);
        card.innerHTML = x;

        cards.appendChild(card);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};