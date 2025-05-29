import { renderFlashCards } from "./cardsPage.js";
import { showError } from "./errors.js";
import {
  createLabel,
  createInput,
  createHeader,
  createSubmitButton,
} from "./utilityRenderFunctions.js";

const renderCardForm = (set) => {
  const h3 = createHeader("h3", "Create Cards", "create_cards");

  const cardForm = document.createElement("form");
  cardForm.setAttribute("data-cy", "card_form");

  const termLabel = createLabel("Term", "termInput");
  const termInput = createInput("termInput");

  const descriptionLabel = createLabel("Description", "descriptionInput");
  const descriptionInput = createInput("descriptionInput");

  const addCardBtn = createSubmitButton("Add Card");
  cardForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const term = e.target.termInput.value;
    const description = e.target.descriptionInput.value;
    if (!term && !description) {
      showError("TERM AND DESCRIPTION CANNOT BE EMPTY");
    } else if (!term) {
      showError("TERM CANNOT BE EMPTY");
    } else if (!description) {
      showError("DESCRIPTION CANNOT BE EMPTY");
    } else {
      addCard(term, description, set);
    }
  });

  cardForm.append(
    termLabel,
    termInput,
    descriptionLabel,
    descriptionInput,
    addCardBtn
  );

  const container = document.createElement("div");
  container.append(h3, cardForm);

  return container;
};

const addCard = (term, description, set) => {
  set.push({ term, description });
  renderFlashCards(set, set.length - 1);
};

export { renderCardForm };
