const form = document.querySelector("form");

function handleFormSubmission(event) {
  event.preventDefault();

  console.log({
    username: event.target[0].value,
    password: event.target[1].value
  });
}

form.addEventListener("submit", handleFormSubmission);
