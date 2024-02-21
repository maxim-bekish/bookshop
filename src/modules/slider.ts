let img = document.querySelectorAll(
  ".sliderLine img"
) as NodeListOf<HTMLElement>;
let sliderLine = document.querySelector(".sliderLine") as HTMLElement;
let count: number = 0;
let width: number;

const dots = document.querySelectorAll(
  ".all-dot .dot"
) as NodeListOf<HTMLElement>;

function init() {
  const slider = document.querySelector(".slider") as HTMLElement;
  width = slider.offsetWidth;

  sliderLine.style.width = width * img.length + "px";
  img.forEach((item: any) => {
    item.style.width = width + "px";
    // item.style.height = "430px";
  });
  stepSlider(count);
}

function dot(index: number) {
  dots.forEach((item: any) => item.classList.remove("dot-active"));
  dots[index].classList.add("dot-active");
}

function stepSlider(count: number) {
  sliderLine.style.transform = `translate(-${count * width}px)`;
}

function connect(count: number) {
  stepSlider(count);
  dot(count);
}

// ------------------Event_beginning-----------------

window.addEventListener("resize", init);
init();

setInterval(() => {
  count++;
  if (count >= img.length) {
    count = 0; // Возвращаемся к первому слайду, если достигнут последний
  }
  connect(count);
}, 5000);

dots.forEach((dot_all, index) => {
  dot_all.addEventListener("click", () => {
    count = index;
    connect(count);
  });
});
