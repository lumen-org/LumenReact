import { CREATE_NEW_MODEL, SHOW_PCI_GRAPH, HIDE_PCI_GRAPH } from "./constants";
import { v4 as uuidv4 } from 'uuid';

export const createNewModel = (modelName, model, id=uuidv4()) => {
  return {
    type: CREATE_NEW_MODEL,
    payload: {
      modelName,
      model,
      id
    }
  }
};

export const showPCIGraph = (id) => {
  return {
    type: SHOW_PCI_GRAPH,
    payload: {
      id
    }
  }
}

export const hidePCIGraph = (id) => {
  return {
    type: HIDE_PCI_GRAPH,
    payload: {
      id
    }
  }
}