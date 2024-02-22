import "../public/index.html";
import "./sass/reset.scss";
import "./sass/style.scss";
import "./modules/slider";
import { request } from "./modules/request";
import { button } from "./modules/submit";
import { start } from "./modules/start";
import { shop } from "./modules/shop";

let count: number = 0;
request("Architecture", count);
button("Architecture", count);
start(count);
shop()
