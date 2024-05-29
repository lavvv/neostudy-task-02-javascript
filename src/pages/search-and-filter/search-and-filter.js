const listInputElement = document.getElementById("filterableList__input");
const listElement = document.getElementById("filterableList__list");
const filterableListItems = [
  "Item 1 Alex",
  "Item 2 Joe",
  "Item 3",
  "Item 4 Jack",
  "Item 5 HTML",
  "Item 6 CSS",
  "Item 7 JS",
  "Item 8",
  "Item 9",
  "Item 10",
];

const makeItems = function (items) {
  listElement.innerHTML = items
    .map((item) => {
      return `
        <li class="filterableList__item filterableList--border">${item}</li>
      `;
    })
    .join("");
};

const filterItemsList = function (list) {
  const filterValue = listInputElement.value.toLowerCase();
  const filteredItems = list.filter((li) => {
    const textValue = li.textContent.toLowerCase();
    return textValue.includes(filterValue);
  });
  listElement.replaceChildren(...filteredItems);
};

makeItems(filterableListItems);
const listItems = Array.from(listElement.querySelectorAll("li"));
filterItemsList(listItems);
listInputElement.addEventListener("input", () => filterItemsList(listItems));
