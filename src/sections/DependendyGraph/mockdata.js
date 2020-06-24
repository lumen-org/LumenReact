export const mockData = {
  _nodes: [
    {label: "node 0"},
    {label: "node 1"},
    {label: "node 2"},
    {label: "node 3"},
    {label: "node 4"},
  ],
  _edges: [
    {source: "node 0", target: "node 1", weight: 1},
    {source: "node 1", target: "node 2", weight: 1},
    {source: "node 2", target: "node 0", weight: 1},
    {source: "node 0", target: "node 4", weight: 1},
    {source: "node 3", target: "node 4", weight: 2}
  ]
}