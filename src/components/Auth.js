export const BASE_URL = "https://auth.nomoreparties.co/";

function checkResponse(response) {
  return response.ok
    ? response.json()
    : Promise.reject(`Ошибка: ${response.status}`);
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};
