export const mockData = {
  _nodes: [
    {label: "survived"},
    {label: "pclass"},
    {label: "sex"},
    {label: "embarked"},
    {label: "age"},
    {label: "fare"}
  ],
  _edges: [
    {source: "survived", target: "age", weight: 0.148},
    {source: "pclass", target: "embarked", weight: 0.182},
    {source: "fare", target: "embarked", weight: 0.251},
    {source: "pclass", target: "age", weight: 0.719},
    {source: "survived", target: "pclass", weight: 0.844},
    {source: "embarked", target: "pclass", weight: 0.844},
    {source: "survived", target: "sex", weight: 1.87},
    {source: "pclass", target: "fare", weight: 2.08},
  ]
}