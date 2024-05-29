const sliderContainerElement = document.getElementById("slider__container");
const prevButtonElement = document.getElementById("slider__buttonPrev");
const nextButtonElement = document.getElementById("slider__buttonNext");
const URL = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10";

const getImages = function (url) {
  return axios.get(url);
};

const makeSlider = function (images) {
  sliderContainerElement.innerHTML = images
    .map((item) => {
      return `
        <li class="slider__item">
          <figure>
            <img
              src="${item.url}"
              alt=""
              class="slider__image"
            />
            <figcaption class="slider__caption">${item.title}</figcaption>
          </figure>
        </li>
      `;
    })
    .join("");
};

const buttonsBehavior = function () {
  if (sliderContainerElement.scrollLeft === 0) {
    prevButtonElement.disabled = true;
    prevButtonElement.classList.add("slider__button--disabled");
  } else {
    prevButtonElement.disabled = false;
    prevButtonElement.classList.remove("slider__button--disabled");
  }

  if (
    sliderContainerElement.scrollLeft ===
    sliderContainerElement.scrollWidth - sliderContainerElement.clientWidth
  ) {
    nextButtonElement.disabled = true;
    nextButtonElement.classList.add("slider__button--disabled");
  } else {
    nextButtonElement.disabled = false;
    nextButtonElement.classList.remove("slider__button--disabled");
  }
};

const prevButtonClickHandler = function () {
  sliderContainerElement.scrollBy(-500, 0);
};

const nextButtonClickHandler = function () {
  sliderContainerElement.scrollBy(500, 0);
};

getImages(URL)
  .then((response) => {
    makeSlider(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

prevButtonElement.disabled = true;
prevButtonElement.classList.add("slider__button--disabled");
nextButtonElement.disabled = false;
nextButtonElement.classList.remove("slider__button--disabled");
sliderContainerElement.addEventListener("scroll", buttonsBehavior);
prevButtonElement.addEventListener("click", prevButtonClickHandler);
nextButtonElement.addEventListener("click", nextButtonClickHandler);
