import homePageImage from "../images/homePage.png";
import {
  createHeader,
  createElement,
  createImage,
} from "./utilityRenderFunctions.js";

const renderHomePage = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const header = createHeader("h1", "Study Night", "home_header");
  const subHeading = createElement(
    "h2",
    "A Digital Study Solution for the Modern World"
  );
  const image = createImage(homePageImage, "Desk of laptops");

  const homeContainer = document.createElement("div");
  homeContainer.className = "homeContainer";

  homeContainer.append(header, subHeading, image);
  main.append(homeContainer);
};

export { renderHomePage };
