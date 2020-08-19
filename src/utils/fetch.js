import { BASE_URL, FETCH_SCHEMA } from "../constants/query";
import { generateId } from "./idGenerator";

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

export const _fetchModelData = (BODY) => {
  return fetchData(BASE_URL, BODY).then((response) => {
    return { Fields: response["fields"], id: response["id"] ? response["id"] : generateId() };
  });
};

export const fetchModelData = (modelName) => {
  const POST_BODY = { ...FETCH_SCHEMA, FROM: modelName };
  return _fetchModelData(POST_BODY);
};

export const fetchPlotData = (BODY) => {
  return fetchData(BASE_URL, BODY).then((response) => {
    const dataString = response["data"].split("\n");
    const X = [];
    const Y = [];
    dataString.forEach((element) => {
      X.push(element.split(",")[0]);
      Y.push(element.split(",")[1]);
    });
    return {
      x: X,
      y: Y,
    };
  });
};

export default fetchData;
