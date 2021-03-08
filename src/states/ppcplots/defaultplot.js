export const getData = (x = [], start = 0, end = 1) => {
  return {
      x: x,
      type: 'histogram',
      name: "ppc values",
      marker: {
        line: {
          width: 1
        }
      },
      xbins: {
        start: start,
        end: end,
        size: 0.2 //  when we want to spezify a specific amount of bins
      }
    }
}


export const getLayout = (xval = 0) => {
  const layout = {
    bargap: 0.05,
    autosize: true,
    showgrid: false,
    title: {
      text: "PPC Plot",
    },
    shapes: [{
      type: "line",
      x0: xval,
      y0: 0,
      x1: xval,
      yref: 'paper',
      y1: 1,
      name: "reference",
      line: {
        color: 'orange',
        width: 1.5,
      }
    }]
  };
  return layout;
}

export const getShade = (xval = 0) => {
  return [{
    type: "line",
    x0: xval,
    y0: 0,
    x1: xval,
    yref: 'paper',
    y1: 1,
    name: "reference",
    line: {
      color: 'orange',
      width: 1.5,
    }
  }]
}