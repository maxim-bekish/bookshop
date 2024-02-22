interface data {
  // rating: {
  //   stars: el.,
  //   reviews: el.,
  // };
  preview: string;
  author: [];
  title: string;
  description: string;
  price: {
    saleability: boolean;
    price: string;
    currency: string;
  };
  id: string;
}

export const cardHTML = (data: data) => {
  return `
              <div class="card__preview"><img src="${
                data.preview
              }" alt="preview" /></div>
              <div id="card__info" class="card__info">
                <div class="card__info_title">
                  <h2 class="card__info__author">${data.author.map(
                    (el) => el
                  )}</h2>
                  <h3 class="card__info__name">${data.title}</h3>
                  <div class="card__info__rating">
                    <div>звезды</div>
                    <span>252 review</span>
                  </div>
                </div>
                <p class="card__info__description">
                  ${data.description ? data.description : "No description"}
                </p>
                <p class="card__info__prise">${
                  data.price.saleability ? data.price.price : ""
                } </p>
                  <button id="${
                    data.id
                  }"  class="card__info__button" >buy now</button>
              </div>
          `;
};
