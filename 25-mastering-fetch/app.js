const BASE_URL = "http://localhost:33764/dogs";
const PUP_ID_STRING = "/452";

const pupperButton = document.querySelector("button.button");
const pupUpdateForm = document.querySelector("form");

const fetchConfigObjectPATCHGenerator = pupperData => {
  return {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pupperData)
  };
};

const getPupper = () => {
  // data.json() makes a *JS OBJECT* out of a JSON string
  return fetch(BASE_URL + PUP_ID_STRING).then(data => data.json());
};

const showPupOnPage = pup => {
  const dogNameElement = document.querySelector("#dog-name");
  const dogAgeElement = document.querySelector("#dog-age");
  const dogImgElement = document.querySelector("img");

  dogNameElement.innerText = pup.name;
  dogAgeElement.innerText = pup.age;
  dogImgElement.src = pup.img;
};

pupperButton.addEventListener("click", e => {
  getPupper().then(pup => showPupOnPage(pup));
});

pupUpdateForm.addEventListener("submit", e => {
  e.preventDefault();

  const pupper = {};

  e.target[0].value ? (pupper.name = e.target[0].value) : null;
  e.target[1].value ? (pupper.age = e.target[1].value) : null;

  if (e.target[2].value) {
    pupper.img = e.target[2].value;
  }

  // make a FETCH requrest, method: PATCH, it has to include the pup data
  fetch(BASE_URL + PUP_ID_STRING, fetchConfigObjectPATCHGenerator(pupper)).then(
    () => {
      getPupper().then(showPupOnPage());
    }
  );
});
