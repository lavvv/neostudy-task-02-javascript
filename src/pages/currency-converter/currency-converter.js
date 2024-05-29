const currencyExchangeClient = axios.create({
  baseURL: "https://currency-exchange.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "1727e24cdbmsh37e1fcf2e9e5cf7p1724c2jsn6734c5d52f70",
    "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
  },
});

const requestParams = {
  to: "RUB",
  from: ["USD", "EUR", "CNH", "JPY", "GBP", "SGD"],
};

const makeExchangeRatesList = function (params = {}) {
  const { to = "", from = [] } = params;
  const exchangeRatesListElement = document.querySelector(
    ".currencyConverter__exchangeRatesList",
  );

  const endpoints = from.map(
    (currencies) => `exchange?to=${to}&from=${currencies}&q=1.0`,
  );

  Promise.all(endpoints.map((endpoint) => currencyExchangeClient.get(endpoint)))
    .then((responses) => {
      exchangeRatesListElement.innerHTML = responses
        .map((response, index) => {
          const currencyName = from[index];
          const currencyValue = response.data.toFixed(2);

          return `
            <li>
              ${currencyName}: <span class="currencyConverter__currencyValue">${currencyValue}</span>
            </li>
          `;
        })
        .join("");
    })
    .catch((error) => {
      console.log(error);
    });
};

const makeLastUpdateDate = function () {};

const setExchangeRatesRefreshInterval = function (refreshIntervalMinutes = 15) {
  const refreshIntervalMs = refreshIntervalMinutes * 60 * 1000;
  const lastUpdateElement = document.querySelector(
    ".currencyConverter__lastUpdate",
  );

  lastUpdateElement.innerText = `
    Updates every ${refreshIntervalMinutes} minutes. Last update: ${new Date().toLocaleString()}
  `;

  setInterval(() => {
    makeExchangeRatesList(endpoints);
    makeLastUpdateDate();
  }, refreshIntervalMs);
};

makeExchangeRatesList(requestParams);
setExchangeRatesRefreshInterval();
