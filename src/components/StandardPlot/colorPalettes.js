/*
A collection of color scheme could be used in plotting,
taken from https://www.color-hex.com/color-palettes/
*/

export const colorPalettes = {
  buo: ["#003333", "#b8ffe0", "#ffcf05", "#f17047", "#fbab5a"],
  lilac: [
    "#f46060",
    "#ffcf05",
    "#d071c2",
    "#9168ae",
    "#dda095",
    "#003333",
    "#b8ffe0",
    "#ffcf05",
  ],
  iceCreamWizard: ["#92203d", "#d020ff", "#3b9a63", "#009ce7", "#582929"],
  colorBright: ["#f391b3", "#ffa85c", "#f4ff5c", "#c1ff9b", "#6ce4ef"],
};

export const createCategoryColorMap = (categories) => {
  var categoryColors = {};
  categories.forEach((category, ind) => {
    categoryColors[category] = colorPalettes.colorBright[ind];
  });
  return categoryColors;
};
