interface data {
  preview: string | undefined;
  author: [];
  title: string;
  description: string;
  price: {
    saleability: boolean;
    price: string;
    currency: string;
  };
  id: string;
  inTheBasket: boolean;
}

export const cardHTML = (data: data) => {
  return `
              <div class="cards__preview"><img src="${
                data.preview ? data.preview : "assets/placeholder.png"
              }" alt="preview" /></div>
              <div id="card__info" class="cards__info">

                <div class="cards__info-title">
                  <h2 class="cards__info-author">${data.author.map(
                    (el) => el
                  )}</h2>
                  <h3 class="cards__info-name">${data.title}</h3>

                </div>
                <p class="cards__info-description">
                  ${data.description ? data.description : "No description"}
                </p>
                <p class="cards__info-prise">${
                  data.price.saleability ? "$" + data.price.price : ""
                } </p>
                  <button id="${data.id}"  class="cards__info-button ${
    data.inTheBasket ? "shopBook" : ""
  }" >${data.inTheBasket ? "in the cart" : "buy now"}</button>
              </div>
          `;
};
