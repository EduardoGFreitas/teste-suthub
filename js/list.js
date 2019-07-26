class List {
  constructor() {
    this.listOfFacts = JSON.parse(localStorage.getItem("@cat_facts"));
    this.displayedList = document.querySelector("#list-of-facts");
  }
  init() {
    return this;
  }

  getRowById = columnId => document.querySelector(`[data-id="${columnId}"]`);

  getRandomElement() {
    let randomNumber = Math.floor(Math.random() * this.listOfFacts.length);
    let selectedRow = this.listOfFacts[randomNumber];

    return selectedRow;
  } //

  updateFact(columnId) {
    let rowFact = this.getRowById(columnId);
    let randomElement = this.getRandomElement();

    let rowFactText = rowFact.querySelector(".fact-text");
    rowFactText.textContent = randomElement.text;

    return true;
    //console.log(rowFact, randomElement, rowFactText, rowFactButton);
  }
}
