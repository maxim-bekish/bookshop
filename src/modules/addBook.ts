export const addBook = (data: any) => {
  const cardInfo = document.getElementById("cards") as HTMLElement | null;

  cardInfo.addEventListener("click", (event: Event) => {
    const x = event.target as HTMLElement;
    if (x.id === data.id) {
      const cards = JSON.parse(localStorage.getItem("fav"));
      if (cards === null) {
        let cards: [{}] = [data];
        localStorage.setItem("fav", JSON.stringify(cards));
      } else {
        cards.push(data);
        localStorage.setItem("fav", JSON.stringify(cards));
      }
    }
  });
};
