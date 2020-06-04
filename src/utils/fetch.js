import { BASE_URL, FETCH_SCHEMA } from "../constants/query";

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
    return {
      categoricalFields: response["fields"]
        .filter((field, index) => {
          return field.dtype === "string";
        })
        .map((field) => field.name),
      quantitativeFields: response["fields"]
        .filter((field, index) => {
          return field.dtype === "numerical";
        })
        .map((field) => field.name),
    };
  });
};

export const fetchModelData = (modelName) => {
  const POST_BODY = { ...FETCH_SCHEMA, FROM: modelName };
  return _fetchModelData(POST_BODY)
};

// TODO: refractor the style specifications to somewhere else
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
