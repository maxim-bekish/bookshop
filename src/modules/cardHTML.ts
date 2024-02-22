interface data {
  // rating: {
  //   stars: el.,
  //   reviews: el.,
  // };
  preview: string;
  author: string;
  title: string;
  description: string;
  price: {
    saleability: boolean;
    price: string;
    currency: string;
  };
  link: string;
}

export const cardHTML = (data: data) => {
  return `
              <div class="card__preview"><img src="${
                data.preview
              }" alt="preview" /></div>
              <div class="card__info">
                <div class="card__info_title">
                  <h2 class="card__info__author">${data.author}</h2>
                  <h3 class="card__info__name">${data.title}</h3>
                  <div class="card__info__rating">
                    <div>звезды</div>
                    <span>252 review</span>
                  </div>
                </div>
                <p class="card__info__description">
                 ${data.description}
                </p>
                <p class="card__info__prise">${
                  data.price.saleability
                    ? data.price.price
                    : "Книга не продается"
                } </p>

                  <a target="_blank" class="card__info__button" href="${
                    data.link
                  }">buy now</a>
                
              </div>
          `;
};
