import { BASE_URL } from "../constants/query";
export const fetchData = (url, body) => {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      const { response: { status = -1, statusText = "" } = {} } = error;

      if (status >= 200 && status < 300) {
        return Promise.resolve({ status, statusText });
      } else throw error;
    });
};

export const fetchPlotData = (BODY) => {
  fetchData(BASE_URL, BODY).then((response) => console.log(response));
};
export default fetchData;
