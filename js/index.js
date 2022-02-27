const jokeContainer = document.querySelector(".container");

const url = "https://v2.jokeapi.dev/joke/any?amount=10";
const options = {
  method: "GET",
  headers: {
    host: "https://v2.jokeapi.dev",
  },
};

async function fetchApi() {
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    const jokes = json.jokes;

    console.log(jokes);
    createHtml(jokes);
  } catch (error) {
    console.log(error);
    jokeContainer.innerHTML = message("error", "There was an error when fetching API: " + error);
  }
}

fetchApi();

//the html created for the page.
function createHtml(jokes) {
  jokeContainer.innerHTML = "";

  for (let i = 0; i < jokes.length; i++) {
    let jokeSetup = jokes[i].setup;
    let isJokeSafe = jokes[i].safe;

    if (jokes[i].setup) {
      jokeSetup = jokes[i].setup;
    } else {
      jokeSetup = "Joke has no setup, click on box to see joke";
    }

    if (jokes[i].safe) {
      isJokeSafe = "This joke is not marked as a offensive joke";
    } else {
      isJokeSafe = "This joke may be offensive for some people, watch at own risk.";
    }

    jokeContainer.innerHTML += `<a href="details.html?id=${jokes[i].id}"><div class="joke-box joke">
            <h2>Category: ${jokes[i].category}</h2>
            <h3>Setup: ${jokeSetup}</h3>
            <p>Its a ${jokes[i].type} joke</p>
            <p>Note: ${isJokeSafe}</p></div></a>`;
  }
}
