export type GraphKey =
  | 'Zerind'
  | 'Arad'
  | 'Oradea'
  | 'Timisoara'
  | 'Lugoj'
  | 'Mehadia'
  | 'Dobreta'
  | 'Caiova'
  | 'Pitesti'
  | 'Rimnicu'
  | 'Sibiu'
  | 'Fagaras'
  | 'Bucarest'
  | 'Giurgiu'
  | 'Urziceni'
  | 'Vaslui'
  | 'Iasi'
  | 'Neamt'
  | 'Hirsova'
  | 'Eforie'

/**
 * Execute the Dijkstra algorhith on a Graph, using start and end nodes.
 *
 *
 * @param graph The source Graph to find optimal path
 * @param startNode Start node from Graph
 * @param endNode End node from Graph
 * @returns object Contains distance and path
 */
export const dijkstra = (
  graph: any /* Source grapho */,
  startNode: GraphKey = 'Pitesti' /* Start node */,
  endNode: GraphKey = 'Fagaras' /* End Node */
): object => {
  const costs = { ...graph[startNode], end: Infinity }
  // const costs = Object.assign({ end: Infinity }, graph[startNode])
  const parents: any = { end: null }
  const processed: any = []

  console.log('costs', costs, 'processed', processed)

  let node = findLowestCostN(costs, processed)

  // console.log(startNode, '->', endNode)

  while (node) {
    let cost = costs[node]
    let children = graph[node]

    for (let n in children) {
      let newCost = cost + children[n]
      if (!costs[n] || costs[n] > newCost) {
        costs[n] = newCost
        parents[n] = node
      }
    }
    processed.push(node)
    node = findLowestCostN(costs, processed)
  }

  let optimalPath = [endNode]
  let parent = parents[endNode]
  while (parent) {
    optimalPath.push(parent)
    parent = parents[parent]
  }
  optimalPath.reverse()

  return { distance: costs[endNode], path: optimalPath }
}

/**
 * Finds node of lower cost between options.
 *
 * @param costs Array of optimal costs
 * @param processed Array of processed/visited Graph nodes
 * @returns GraphKey with lowest cost
 */
export const findLowestCostN = (costs: any, processed: any): GraphKey => {
  return Object.keys(costs).reduce((lowest: any, node: any) => {
    if (lowest === null || costs[node] < costs[lowest]) {
      if (!processed.includes(node)) {
        lowest = node
      }
    }
    return lowest
  }, null)
}
