/**
 * This utility module contains functions that process PQL Model queries.
 * See https://github.com/lumen-org/LumenReact/wiki/PQL-API for understanding the PQL grammar.
 */

import fetchData from "./fetch";
import {
  BASE_URL,
  SHOW_MODELS,
  SHOW_HEADERS,
  CLONE_MODEL,
  DROP_MODEL,
  MARGINLAIZE_MODEL,
  CREATE_EMP_MODEL,
} from "../constants/query";

/**
 * returns a list of all names of models in the model base
 */
export const showModel = () => {
  return fetchData(BASE_URL, SHOW_MODELS).then((response) => {
    return response["models"];
  });
};

/**
 *  returns a description of a model in terms of its random variables
 */
export const showHeaders = (FROM) => {
  const BODY = { ...SHOW_HEADERS, FROM };
  return fetchData(BASE_URL, BODY).then((response) => {
    return response["fields"];
  });
};

/**
 *
 * @param {*} FROM presumably take in an mcg model
 * perform query to get emp model in the backend
 */
export const createEmpmodel = (from) => {
  const BODY = {
    ...CREATE_EMP_MODEL,
    FROM: "emp_" + from.split("_")[1],
    OPTS: {
      AUTO_CREATE_MODEL: {
        MODEL_TYPE: "empirical",
        FOR_MODEL: "mcg_" + from.split("_")[1],
      },
    },
  };
  return fetchData(BASE_URL, BODY).then((response) => {
    return response;
  });
};
/**
 * reates an identical copy of a model under a different name
 */
export const cloneModel = (FROM) => {
  const BODY = { ...CLONE_MODEL, FROM, AS: FROM + "_clone" };
  return fetchData(BASE_URL, BODY);
};

/**
 * drops a model from the model base
 */
export const dropModel = (DROP) => {
  return fetchData(BASE_URL, { DROP: DROP });
};

/**
 * Maginalizes some random variables out of a model (and modifies that model instead of creating a new one)
 * This query is sent each time field items change, to make the query process faster.
 */
export const marginalizeModel = (FROM, MODEL, AS) => {
  const BODY = {
    FROM,
    MODEL,
    AS,
  };
  return fetchData(BASE_URL, BODY);
};

/**
 * Derive submodel over a set of random variables from the field
 * conditioned over some operation and field items
 */
export const deriveSubmodel = (FROM, MODEL, AS, WHERE) => {
  const BODY = {
    FROM,
    MODEL,
    AS,
    WHERE,
  };
  return fetchData(BASE_URL, BODY);
};
