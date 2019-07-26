class Form {
  constructor() {
    this.listOfFacts = JSON.parse(localStorage.getItem("@cat_facts"));
    this.input = document.querySelector("#filter-input");
    this.form = document.querySelector("#filter-form");

    this.factListDisplayed = document.querySelector("#list-of-facts");

    console.log(this.contract);
  }
  init() {
    this.input.addEventListener("input", e => this.handleInputOnChange(e));
    this.form.addEventListener("submit", e => this.handleForm(e));
    return this;
  }
  handleInputOnChange(e) {
    let number = parseInt(e.target.value);
    if (number < 1 || number > 15) {
      console.log("Errou miseravi");
    } else {
      console.log("acertou");
    }
  }
  handleForm(e) {
    e.preventDefault();
    let numberOfFacts = parseInt(this.input.value);
    let arrayFacts = [];
    if (numberOfFacts < 1 || numberOfFacts > 15) {
      alert("Valor inválido");
      return;
    }
    for (var i = 0; i < numberOfFacts; i++) {
      arrayFacts.push(this.getRandomElement());
    }

    let htmlListOfFacts = this.populateListOfFacts(arrayFacts);
    this.factListDisplayed.innerHTML = htmlListOfFacts;
  }

  getRandomElement() {
    let randomNumber = Math.floor(Math.random() * this.listOfFacts.length);
    let selectedRow = this.listOfFacts[randomNumber];

    return selectedRow;
  }

  populateListOfFacts = data => `
  <ul class="list-group" id="list-of-facts">
      ${data
        .map(
          (item, index) => `
          <li class="list-group-item" data-id="${index}">
            <div class="row">
            <div class="col-md-10 fact-text">
              ${item.text}
            </div>
            <div class="col-md-2">
            <button type="button" class="btn btn-primary rounded-pill fact-button"
             onclick="list.updateFact(${index})">
              Atualizar
            </button>
            </div>
            </div>
          </li>
      `
        )
        .join("")}
        </ul>
  
  `;
}
