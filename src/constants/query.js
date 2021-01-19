export const BASE_URL = "http://127.0.0.1:52104/webservice";
export const SHOW_MODELS = { SHOW: "MODELS" };
export const SHOW_HEADERS = { SHOW: "HEADER", FROM: "" };
export const DROP_MODEL = { DROP: "" };
export const CLONE_MODEL = {
  FROM: "",
  MODEL: "*",
  AS: "_clone",
};
export const MARGINLAIZE_MODEL = {
  FROM: "",
  MODEL: [],
  AS: "",
};
export const DERIVE_SUB_MODEL = {};

export const CREATE_EMP_MODEL = {
  SHOW: "HEADER",
  FROM: "emp_iris",
  OPTS: {
    AUTO_CREATE_MODEL: { MODEL_TYPE: "empirical", FOR_MODEL: "mcg_iris" },
  },
};
