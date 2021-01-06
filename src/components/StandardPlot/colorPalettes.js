/*
A collection of color scheme could be used in plotting,
taken from https://www.color-hex.com/color-palettes/
*/

export const colorPalettes = {
  buo: ["#003333", "#b8ffe0", "#ffcf05", "#f17047", "#fbab5a"],
  lilac: ["#f46060", "#c4b0df", "#d071c2", "#9168ae", "#dda095"],
  iceCreamWizard: ["#92203d", "#d020ff", "#3b9a63", "#009ce7", "#582929"],
};

export const createCategoryColorMap = (categories) => {
  var categoryColors = {};
  categories.forEach((category, ind) => {
    categoryColors[category] = colorPalettes.lilac[ind];
  });
  return categoryColors;
};
