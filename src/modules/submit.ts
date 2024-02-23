import { request } from "./request";

export const button = (category: string, count: number) => {
  document.getElementById("button").addEventListener("click", () => {
    count += 6;
    request(category, count, false);
  });
};
