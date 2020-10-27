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
 * reates an identical copy of a model under a different name
 */
export const cloneModel = (FROM) => {
  const BODY = { ...CLONE_MODEL, FROM, AS: FROM + "_clone" };
  return fetchData(BASE_URL, BODY).then((response) => console.log(response));
};

/**
 * drops a model from the model base
 */
export const dropModel = (DROP) => {
  return fetchData(BASE_URL, { ...DROP_MODEL, DROP }).then((response) =>
    console.log(response)
  );
};

/**
 * Maginalizes some random variables out of a model (and modifies that model instead of creating a new one)
 */
export const marginalizeModel = () => {};

export const deriveSubmodel = () => {};
