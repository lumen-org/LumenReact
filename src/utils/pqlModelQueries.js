/**
 * This utility module contains functions that process PQL Model queries.
 * See https://github.com/lumen-org/LumenReact/wiki/PQL-API for understanding the PQL grammar.
 */

import fetchData from "./fetch";
import { BASE_URL, SHOW_MODELS, SHOW_HEADERS } from "../constants/query";

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

export const cloneModel = () => {};

export const marginalizeModel = () => {};

export const dropModel = () => {};

export const deriveSubmodel = () => {};
