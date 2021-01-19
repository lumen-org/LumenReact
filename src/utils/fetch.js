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

export const fetch3DPlotData = (BODY) => {
  return fetchData(BASE_URL, BODY).then((response) => {
    const dataString = response["data"].split("\n");
    const X = [];
    const Y = [];
    const Z = [];
    dataString.forEach((element) => {
      X.push(element.split(",")[0]);
      Y.push(element.split(",")[1]);
      Z.push(element.split(",")[2]);
    });
    return {
      x: X,
      y: Y,
      z: Z,
    };
  });
};

export const fetch2DPlotData = (BODY) => {
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
export const fetch2DPlotMarginalCategroy = (BODY) => {
  return fetchData(BASE_URL, BODY).then((response) => {
    const dataString = response["data"].split("\n");
    dataString.splice(-1, 1);
    var X = {};
    var Y = {};
    var categories = ["all"];
    dataString.forEach((element) => {
      var splited = element.split(",");
      if (
        !categories.includes(splited[1]) &&
        splited.length === 3 &&
        splited[1] !== undefined
      ) {
        categories.push(splited[1]);
      }
    });
    if (dataString[0] && dataString[0].split(",").length === 3) {
      categories.splice(0, 1);
    } //delete "all"

    categories.forEach((category) => {
      X[category] = [];
      Y[category] = [];
    });
    dataString.forEach((element) => {
      var splited = element.split(",");
      if (splited.length === 3) {
        X[splited[1]].push(splited[0]);
        Y[splited[1]].push(splited[2]);
      } else {
        X["all"].push(splited[0]);
        Y["all"].push(splited[1]);
      }
    });
    console.log({
      x: X,
      y: Y,
    });

    return {
      x: X,
      y: Y,
    };
  });
};

export const fetch2DPlotDataCategroy = (BODY) => {
  return fetchData(BASE_URL, BODY).then((response) => {
    const dataString = response["data"].split("\n");
    dataString.splice(-1, 1);
    var X = {};
    var Y = {};
    var categories = ["all"];
    dataString.forEach((element) => {
      var splited = element.split(",");
      if (
        !categories.includes(splited[2]) &&
        splited.length === 3 &&
        splited[2] !== undefined
      ) {
        categories.push(splited[2]);
      }
    });
    if (dataString[0] && dataString[0].split(",").length === 3) {
      categories.splice(0, 1);
    }
    categories.forEach((category) => {
      X[category] = [];
      Y[category] = [];
    });
    dataString.forEach((element) => {
      var splited = element.split(",");
      if (splited.length === 3) {
        X[splited[2]].push(splited[0]);
        Y[splited[2]].push(splited[1]);
      } else {
        X["all"].push(splited[0]);
        Y["all"].push(splited[1]);
      }
    });

    return {
      x: X,
      y: Y,
    };
  });
};

export const fetch1DPlotData = (BODY) => {
  return fetchData(BASE_URL, BODY).then((response) => {
    const dataString = response["data"].split("\n");
    const a = [];

    dataString.forEach((element) => {
      a.push(element.split(",")[0]);
    });
    return {
      a,
    };
  });
};

export default fetchData;
