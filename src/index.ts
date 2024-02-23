import "../public/index.html";
import "./sass/reset.scss";
import "./sass/style.scss";
import "./modules/slider";
import { request } from "./modules/request";
import { button } from "./modules/submit";
import { start } from "./modules/start";
import { shop } from "./modules/shop";
import { addSpinner } from "./modules/spinner";

let count: number = 0;
  addSpinner();
request("Architecture", count,true);
button("Architecture", count);
start(count);
shop()
