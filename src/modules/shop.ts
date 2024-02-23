export const shop = () => {
  const shopCount = JSON.parse(localStorage.getItem("fav"));
  const shopElement = document.getElementById("shop") as HTMLElement;
  if (shopCount) {
    shopElement.style.display = "flex";
    shopElement.innerText = shopCount.length;
    if(shopCount.length===0){
       shopElement.style.display = "none";
    }
  } else {
       shopElement.style.display = "none";
  }
};
