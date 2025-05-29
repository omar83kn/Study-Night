import aboutPageImage from "../images/aboutImage.png";
import {
  createHeader,
  createElement,
  createImage,
} from "./utilityRenderFunctions.js";

export const renderAboutPage = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const containerOuter = document.createElement("div");
  containerOuter.className = "aboutContainer";

  const textContainer = document.createElement("div");
  textContainer.className = "textContainer";

  const heading = createHeader("h2", "About Study Night", "about_page");

  const subHeading = createElement("h3", "Flash Cards Anywhere Anytime");

  let text =
    "Whether you're studying at night or during the day, Study Night's flashcard application is designed to help you grow your skills in any subject. Whether you're preparing for an exam or learning a new language, Study Night makes it easy to create flashcard sets that are available anytime, anywhere.\n\nStudy Night was created by experienced educators and developers who are passionate about helping students achieve their goals and making learning more accessible.";
  const aboutP = createElement("p", text);

  const aboutImage = createImage(aboutPageImage, "Child Studying");

  textContainer.append(heading, subHeading, aboutP);

  containerOuter.append(textContainer, aboutImage);

  main.append(containerOuter);
};
