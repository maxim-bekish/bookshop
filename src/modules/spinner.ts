const wrapper = document.getElementById("content__cards");
const cards = document.getElementById("cards") as HTMLElement

export const addSpinner = () => {
  cards.style.display='none';
  const boxSpinner = document.createElement("div");
  const loader = document.createElement("span");
  loader.className = "loader";
  boxSpinner.id = "boxSpinner";
  boxSpinner.className = "boxSpinner";
  wrapper.append(boxSpinner);
  boxSpinner.append(loader);
};
export const removeSpinner = () => {
    cards.style.display = "flex";
  const boxSpinner = document.getElementById("boxSpinner");
  boxSpinner.remove();
};
