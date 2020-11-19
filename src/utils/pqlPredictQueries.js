/**
 * This utility module contains functions that process PQL queries for data processing.
 * See https://github.com/lumen-org/LumenReact/wiki/PQL-API for understanding the PQL grammar.
 */

/**
 *
 * @param {*} predictClause required
 * @param {*} fromCaluse required
 * @param {*} whereCaluse optional
 * @param {*} splitbyClause optional
 * predict-expr = predict-clause, from-clause , [where-clause], [split-by-clause];
 */
function createPredictionExpression(
  predictClause,
  fromCaluse,
  whereCaluse = null,
  splitbyClause = null
) {}

/**
 * predict-clause = "PREDICT" , (dimension | aggr-dimension) , {dimension | aggr-dimension};
 * @param {*} dimension
 * @param {*} aggregation  "probability", "maximum", "minimum", "average" etc
 * @param {*} _class "denisty"
 * @param {*} yields yields of the prediction
 * @param {*} name name of the dimension
 */
function createPredictionClause(
  dimension,
  aggregation = null,
  _class = null,
  yields = null,
  name = null
) {}

/**
 * Currently I am not sure how many parameters are avaliable,
 * please add here the complete variables description once the
 * BE documentation is finished.
 * @param {*} name name of the dimension
 * @param {*} split
 * @param {*} args
 * @param {*} _class
 */
function createSplitByClause(
  name = "dimensionName",
  split = "equiinterval",
  args = 25,
  _class = "Split"
) {
  return {
    name,
    split,
    args,
    class: _class,
  };
}
