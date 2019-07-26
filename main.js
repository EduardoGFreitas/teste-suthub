const container = document.querySelector("#listaFatos");

let html,
  list,
  form = "";

const getFact = () => {
  fetch("./db.json")
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("@cat_facts", JSON.stringify(data.all));
      return filterBySize(data.all);
    })
    .then(facts => populateHTML(facts))
    .then(html => (container.innerHTML = html))
    .then(() => importDependencies());
};

const filterBySize = (list, n = 5, start = 0) => list.slice(start, n);

const importDependencies = () => {
  list = new List();
  list.init();

  form = new Form();
  form.init();
};

const populateHTML = data => `
<div class="container mt-5 mb-5">

<div class="row justify-content-start  mt-5 mb-5">
<div class="col-md-6 col-xs-12">
<form id="filter-form" onsubmit="${e => form.handleForm(e)}" >
        <div class="input-group mb-3">
        <input type="number" id="filter-input" class="form-control"
        min="1" max="15"
        onkeydown="form.validateInputOnChange"
        placeholder="Digite um número entre 1 - 15" 
        aria-label="campo ´para filtar quantidade de fatos"
        aria-describedby="button-addon2">
        <div class="input-group-append">
          <button class="btn btn-outline-primary" type="submit" id="button-addon2">Atualizar </button>
        </div>
      </div>
    </form>
    </div>
</div>

  <div class="row justify-content-start mt-5 mb-5">
    <div class="col-md-12 ">
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
    </div>
  </div>
</div>

`;
