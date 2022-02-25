const jokeContainer = document.querySelector(".container");
const titleHeader = document.querySelector("title");
// Parameters and Url
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
const url = "https://v2.jokeapi.dev/joke/Any?idRange=" + id;

async function fetchJoke() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
    createHtml(json);
  } catch (error) {
    console.log(error);
    jokeContainer.innerHTML = message("error", "There was an error when fetching api" + error);
  }
}

fetchJoke();

function createHtml(json) {
  let deliveryJoke = json.delivery;

  if (json.delivery) {
    deliveryJoke;
  } else {
    deliveryJoke = json.joke;
  }

  let jokeSetup = json.setup;

  if (json.setup) {
    jokeSetup;
  } else {
    jokeSetup = "Joke has no setup";
  }
  jokeContainer.innerHTML += `<div class="joke-box">
                            <h3>Category: ${json.category}</h3>
                            <h4>Setup: ${jokeSetup}</h4>
                            <h4>Delivery: ${deliveryJoke}</h4>
                            <h5>This is a ${json.type} joke</h5>
                            </div>`;
  titleHeader.innerHTML = `Joke about ${json.category}`;
}
