const mainNavLinks = [
  {
    name: "Slider",
    href: "slider",
  },
  {
    name: "Form",
    href: "form",
  },
  {
    name: "Search And Filter",
    href: "search-and-filter",
  },
  {
    name: "Currency Converter",
    href: "currency-converter",
  },
  {
    name: "Button Up",
    href: "button-up",
  },
];

const headerElement = `
  <header>
    <nav class="mainNav">
      <ul class="mainNav__list">
        ${mainNavLinks
          .map(
            (link) => `
            <li class="mainNav__item">
              <a class="mainNav__link" href="/src/pages/${link.href}/${link.href}.html">${link.name}</a>
            </li>
          `,
          )
          .join("")}
      </ul>
    </nav>
  </header>
`;

document.body.insertAdjacentHTML("afterbegin", headerElement);
