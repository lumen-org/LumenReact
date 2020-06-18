export const mockData = {
  nodes: [
    {label: "node 0"},
    {label: "node 1"},
    {label: "node 2"},
    {label: "node 3"},
    {label: "node 4"},
  ],
  edges: [
    {source: 0, target: 1, weight: 1},
    {source: 1, target: 2, weight: 1},
    {source: 2, target: 0, weight: 1},
    {source: 0, target: 4, weight: 1},
  ]
}