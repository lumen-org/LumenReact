import update from "immutability-helper";

/*
maintains fetching and data storing of an active 
Differential Marginal Plot (DMP)

This can be considered as a child of the plots, since
it will call a call-back function to dispatch the result here 
to plots store.

It has to listen to the changes from specifications store.
 */

const DefaultScatterTrace = {
  x: [],
  y: [],
  type: "scatter",
  mode: "markers",
  xaxis: "x", //+ ind, // this is necesarry for building subplots
  yaxis: "y", //+ ind,
  marker: {
    color: "rgba(17, 157, 255,0.5)",
    size: 5,
    line: {
      color: "rgb(231, 99, 250)",
      width: 1,
    },
  },
};

const DefaultXhistogramTrace = {
  x: [],
  type: "histogram",
  xaxis: "x",
};

const DefaultYhistogramTrace = {
  y: [],
  type: "histogram",
  xaxis: "y",
};

const defaultLayout = {
  autosize: true,
  title: "",
  grid: {
    rows: 0,
    columns: 0,
    pattern: "independent",
  },
};

const defaultDensityTrace = {
  x: [],
  y: [],
  name: "density",
  ncontours: 20,
  colorscale: "Hot",
  reversescale: true,
  showscale: false,
  type: "histogram2dcontour",
};

export const defaultState = {
  plotData: [],

  layout: {
    autosize: true,
    title: "",
    grid: {
      rows: 0,
      columns: 0,
      pattern: "independent",
    },
  },
};
