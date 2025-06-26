/*********************************************************************
 *  GLOBAL ASSET IMPORTS — Parcel will bundle these automatically
 *********************************************************************/

// core page modules
import { renderCardSetsPage } from "./cardSetsPage.js";
import { renderAboutPage } from "./aboutPage.js";
import { renderHomePage } from "./homePage.js";

import "../styles/style.css";
import "../styles/navigationMenu.css";
import "../styles/flipcard.css";
import "../styles/about.css";
import "../styles/form.css";

import banner from "../images/homePage.png";
document.getElementById("bannerImg").src = banner;

/*********************************************************************/

// navigation wiring (unchanged)
const addNavListener = (id, cb) => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("click", cb);
};
const addListenerToNavigation = () => {
  addNavListener("cardSetPage", renderCardSetsPage);
  addNavListener("aboutPage", renderAboutPage);
  addNavListener("homePage", renderHomePage);
};
renderHomePage();
addListenerToNavigation();