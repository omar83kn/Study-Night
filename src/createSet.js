import { renderCardSetsPage } from "./cardSetsPage.js";
import { showError } from "./errors.js";
import {
  createLabel,
  createInput,
  createSubmitButton,
} from "./utilityRenderFunctions.js";

const createSetForm = (setCards) => {
  const form = document.createElement("form");
  form.setAttribute("data-cy", "set_form");
  form.className = "notVisible";

  const label = createLabel("Card Set Title", "titleInput");
  const input = createInput("titleInput");
  const submitButton = createSubmitButton("Submit Set");

  form.addEventListener("submit", (e) => submitSet(e, setCards));

  form.append(label, input, submitButton);
  return form;
};

const submitSet = (e, setCards) => {
  e.preventDefault();
  const title = e.target.titleInput.value;

  if (!title) {
    showError("TITLE CANNOT BE EMPTY");
  } else {
    const id = setCards.length ? setCards[setCards.length - 1].id + 1 : 1;
    setCards.push({ id, title, cards: [] });
    renderCardSetsPage();
  }
};

export { createSetForm };
