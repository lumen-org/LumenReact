/* [1] Chonbodeechalermroong, A. & Hewett, R.,
Towards Visualizing Big Data with Large-Scale Edge Constraint Graph Drawing
Big Data Research, 2017, 10, 21-32
 */
/* General advice for working with this algorithm/implementation: a node needs those parameter: x- and y position (no node ought to have the exactly same position as another as they
as the algorithm gives NaN values as you would divide with zero), previous x- and y-position (coordinates of the last iteration) which are the same as the position values in the
first iteration, acceleration splitted into x and y component set to zero in the first iteration.
Edges ought to have a source and target node, no double edges with exactly the same edges
*
* */

"use strict";

import Vector from "./vectorclass";

/**
 *
 * @param {array} nodes An array containing objects of different nodes. Those objects ought to have an (globally) unique id
 * @param {array} edges An array containing objects of different edges. They ought to have an (globally) unique id, value (weight of the edge), a source and target node specified by the node id, also there should be no double edges
 * @param DGA_coolingRate {number} constant cooling
 * @param DGA_constraintSatisfactionDegree {number} how often the constraint satisfaction degree function is applied
 * @param maxIteration {number} aborts algorithm after that many rounds
 * @param DGA_temperature {number} node displacement control
 * @param DGA_strengthOfRepulsiveForce {number} Electrical repulsive force that repels nodes according to distance; similar to Fruchterman and Reingold, compensated by weak constraints
 * @param DGA_timestep {number}
 * @param DGA_damping {number} damping factor, possible influence on convergence, exponentially velocity reduction of damping factor, reduces oscillation
 * @param DGA_proximityRatio {number} constant for weak constraint -> restlength r (desired distance) should lie between the r and r* DGA_proximityRatio, so it is possible, that an edge is shorter than the restlength but not larger
 * @param overallChangePercentage {number} convergence criterion -> relative change to node position in the iteration before
 * @returns Array[] returns Array containing the altered nodes and edges. All the nodes now have positions that should satisfy the weak constraints and avoid edge cluttering and node overlapping
 */
function solve(nodes, edges, DGA_coolingRate = 0.99, DGA_constraintSatisfactionDegree = 20, DGA_proximityRatio = 0.3, overallChangePercentage = 0.00001, maxIteration = 100000, DGA_temperature = 1,
               DGA_strengthOfRepulsiveForce = 10, DGA_timestep = 0.5, DGA_damping = 0.95) {
  //console.log("parameters used:");
  //console.log(DGA_proximityRatio, overallChangePercentage, DGA_coolingRate, DGA_constraintSatisfactionDegree, maxIteration);
  let t1 = performance.now();
  // line 1-4 with initializing node positions and previous positions; node accelerations are set to 0
  randomNodePosition(nodes);
  let round = 0;
  let changeNotRelevant = false;
  // line 5 initialize experimentally established constants
  let time_diff = 0;

  while (changeNotRelevant === false && round < maxIteration && time_diff < 1000000) { //an ultimate convergence criterion


    /** line 6-18 from [1]; Add repulsive forces, similar to those proposed by Fruchterman and Reingold to each node
     * Electrical repulsive force that repels nodes according to distance; similar to Fruchterman and Reingold, compensated by weak constraints*/
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        let df = Vector.subtract(nodes[i].pos, nodes[j].pos);
        let pushforce = Vector.divide(Vector.multiply(df, DGA_strengthOfRepulsiveForce), Math.pow(df.length(), 2));
        nodes[j].a = Vector.subtract(nodes[j].a, pushforce);
        nodes[i].a = Vector.add(nodes[i].a, pushforce);
      }

    }


    /** with DGA_damping and DGA_temperature modified Verlet equation (Newton's laws)
     * dampening factor, possible influence on convergence, exponentially velocity reduction of dampening factor, reduces oscillation,
     * line 13- 18 from [1]*/
    for (let node of nodes) {
      let temp = node.pos;
      node.pos = Vector.add(temp, Vector.multiply(Vector.add(Vector.multiply(Vector.subtract(temp, node.ppos), DGA_damping), Vector.multiply(node.a, Math.pow(DGA_timestep, 2))), DGA_temperature));
      node.ppos = temp;
      node.a = new Vector(0, 0);
    }

    /** Enforcement of weak constraints for all edges according to the edge weights
     * constant for weak constraint -> restlength r (desired distance) should lie between the r and r * DGA_proximityRatio,
     * so it is possible, that an edge is shorter than the restlength but not larger
     * edge weight and restlength are inversily proportional -> an edge with a high weight symbolises a strong bond and the
     * connecting nodes should be closer than nodes with small edge values
     * line 19-24 from [1]*/

    for (let con = 1; con <= DGA_constraintSatisfactionDegree; con++) {
      for (let edge of edges) {
        let node_p, node_q;

        node_p = nodes[edge.source];
        node_q = nodes[edge.target];


        let restlength = 1 / edge.weight;
        let df = Vector.subtract(node_q.pos, node_p.pos);
        let distance = df.length();

        if (distance > restlength || distance < (restlength * DGA_proximityRatio)) { //general case if present edge length is either longer than restlength or shorter than weak constraint

          let D = 1 - (restlength / distance); // move closer to one another
          if (distance < (restlength * DGA_proximityRatio)) {
            D = 1 - ((restlength * DGA_proximityRatio) / distance); // move apart
          }

          node_p.pos = Vector.add(node_p.pos, Vector.multiply(df, 0.5 * D * DGA_temperature));

          node_q.pos = Vector.subtract(node_q.pos, Vector.multiply(df, 0.5 * D * DGA_temperature));
        }
      }

    }


    /** Convergence criterion; looks how much the nodes have changed in this iteration compared to their position in the previous
     * iteration.*/
    if (round > 0) {
      changeNotRelevant = true;
      for (let node of nodes) {
        let diff = Math.abs(Vector.subtract(node.pos, node.ppos).length() )/ node.ppos.length();
        if (diff > overallChangePercentage) {
          changeNotRelevant = false;
          break;
        }

      }
    }

    DGA_temperature = DGA_temperature * DGA_coolingRate; //Cooling procedure
    round++;
    time_diff = performance.now() - t1;


  }
  //drawGraph(nodes, edges, s);
  let t2 = performance.now();
  //console.log("Time:" + (t2 - t1) + " ms");
  //console.log("Iterations:", round - 1);
  for (let node of nodes) {
    node.x = node.pos.x *100;
    node.y = node.pos.y *100;
  }
  return [nodes, edges]
}


/**
 * Every node that has previously been read by papaparse is now fetched and assigned a random position on the grid. It is ensured that no two nodes have the same starting position
 * Because there are needed within the layout algorithm this is also the part where each node is assigned multiple vectors for position (pos), previous position (ppos) and acceleration (a)
 *
 */
function randomNodePosition(nodes) { // works fine with vector changes
  let alreadyANode = {};
  //I need to do something about the size of the node coordinates
  let coordinates = nodes.length;
  for (let node of nodes) {
    let x = 0;
    let y = 0;
    let again = true;
    while (again) { //disallows two nodes having the exact same coordinates
      x = Math.floor((Math.random() * coordinates) + 1);
      y = Math.floor((Math.random() * coordinates) + 1);
      if (x < y) {
        let combination = x.toString() + y.toString();
        if (alreadyANode[combination] !== true) {
          again = false;
        }
      } else {
        let combination = y.toString() + x.toString();
        if (alreadyANode[combination] !== true) {
          again = false;
        }
      }
    }

    if (x < y) {
      let combination = x.toString() + y.toString();
      alreadyANode[combination] = true;
    } else {
      let combination = y.toString() + x.toString();
      alreadyANode[combination] = true;
    }
    node.pos = new Vector(x, y);
    node.ppos = new Vector(x, y);
    node.a = new Vector(0, 0);
    node.change = 1;
    node.size = 1;
    node.last_distance = 0;
  }
}

export default solve;