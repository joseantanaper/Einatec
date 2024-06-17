export const dijkstra = (
  graph: any /* Source grapho */,
  startNode: string = 'Pitesti' /* Start node */,
  endNode: string = 'Fagaras' /* End Node */
) => {
  const costs = { ...graph[startNode], end: Infinity }
  // const costs = Object.assign({ end: Infinity }, graph[startNode])
  const parents: any = { end: null }
  const processed: any = []

  let node = findLowestCostN(costs, processed)

  console.log(startNode, '->', endNode)

  while (node) {
    let cost = costs[node]
    let children = graph[node]

    for (let n in children) {
      let newCost = cost + children[n]
      if (!costs[n] || costs[n] > newCost) {
        costs[n] = newCost
        parents[n] = node
        // console.log('FOR', 'From', node, '(', cost, ')', 'to', children, '=>', newCost);
      }
    }
    processed.push(node)
    node = findLowestCostN(costs, processed)
  }

  let optimalPath = [endNode]
  let parent = parents[endNode]
  while (parent) {
    optimalPath.push(parent)
    console.log('OPTIMAL', parent)
    parent = parents[parent]
  }
  optimalPath.reverse()

  return { distance: costs[endNode], path: optimalPath }
}

const findLowestCostN = (costs: any, processed: any) => {
  return Object.keys(costs).reduce((lowest: any, node: any) => {
    if (lowest === null || costs[node] < costs[lowest]) {
      if (!processed.includes(node)) {
        lowest = node
      }
    }
    return lowest
  }, null)
}
