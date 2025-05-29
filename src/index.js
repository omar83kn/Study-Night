import { renderCardSetsPage } from "./cardSetsPage.js";
import { renderAboutPage } from "./aboutPage.js";
import { renderHomePage } from "./homePage.js";

const addListenerToNavigation = () => {
  addNavListener("cardSetPage", renderCardSetsPage);
  addNavListener("aboutPage", renderAboutPage);
  addNavListener("homePage", renderHomePage);
};

const addNavListener = (elementId, callback) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener("click", callback);
  }
};

renderHomePage();
addListenerToNavigation();
