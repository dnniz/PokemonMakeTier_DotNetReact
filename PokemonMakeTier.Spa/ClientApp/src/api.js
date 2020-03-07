// const BASE_URL = "https://localhost:44338/api";
const BASE_URL = "../../api";
const URL_POKEAPI_GLITCH = "https://pokeapi.glitch.me/v1";
const URL_POKEAPI_CO = "https://pokeapi.co/api/v2";

async function callApi(endpoint, baseUrl, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    "User-Agent":
      "PokemonMakeTier (https://github.com/dnniz/PokemonMakeTier_DotNetReact)",
    Accept: "application/json"
  };

  const url = baseUrl + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  pokemon: {
    glitch: {
      detail(dexId) {
        return callApi(`/pokemon/${dexId}`, URL_POKEAPI_GLITCH);
      }
    },
    co: {
      detail(dexId) {
        return callApi(`/pokemon/${dexId}`, URL_POKEAPI_CO);
      }
    }
  },
  user: {
    create(user) {
      return callApi(`/user`, BASE_URL, {
        method: "POST",
        body: JSON.stringify(user)
      });
    }
  },
  login(user) {
    return callApi(`/users/login`, BASE_URL, {
      method: "POST",
      body: JSON.stringify(user)
    });
  }
};

export default api;
