export const shop = () => {
  const shopCount = JSON.parse(localStorage.getItem("fav"));
  const shopElement = document.getElementById("shop") as HTMLElement;
  if (shopCount) {
    shopElement.style.display = "flex";
    shopElement.innerText = shopCount.length;
  } else {
       shopElement.style.display = "none";
  }
};
