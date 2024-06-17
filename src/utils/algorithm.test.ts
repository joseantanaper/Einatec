import { describe, expect, test } from '@jest/globals'
import { dijkstra, findLowestCostN } from './algorithm'

const graph: object = {
  Zerind: { Oradea: 71, Arad: 75 },
  Arad: { Timisoara: 118, Zerind: 75 },
  Oradea: { Zerind: 71, Sibiu: 99 },
  Timisoara: { Arad: 118, Lugoj: 111 },
  Lugoj: { Timisoara: 111, Mehadia: 70 },
  Mehadia: { Lugoj: 70, Dobreta: 75 },
  Dobreta: { Mehadia: 75, Caiova: 120 },
  Caiova: { Dobreta: 120, Rimnicu: 146, Pitesti: 138 },
  Pitesti: { Rimnicu: 97, Caiova: 138, Bucarest: 101 },
  Rimnicu: { Sibiu: 80, Caiova: 146, Pitesti: 97 },
  Sibiu: { Oradea: 151, Arad: 140, Rimnicu: 80, Fagaras: 99 },
  Fagaras: { Sibiu: 99, Bucarest: 211 },
  Bucarest: { Giurgiu: 90, Urziceni: 85, Pitesti: 101, Fagaras: 211 },
  Giurgiu: { Bucarest: 90 },
  Urziceni: { Bucarest: 85, Vaslui: 142, Hirsova: 98 },
  Vaslui: { Urziceni: 142, Iasi: 92 },
  Iasi: { Neamt: 87, Vaslui: 92 },
  Neamt: { Iasi: 87 },
  Hirsova: { Urziceni: 98, Eforie: 86 },
  Eforie: { Hirsova: 86 },
}

const costs = { Rimnicu: 97, Caiova: 138, Bucarest: 101, end: Infinity }
const extraCosts = { A: 1, B: 2, C: 3, D: Infinity }

beforeAll(() => {
  // console.log('dijkstra test start ***')
})
afterAll(() => {
  // console.log('dijkstra test end ***')
})

describe('dijkstra', () => {
  it('hello', () => {
    expect(1).toBe(1)
  })
  it('findLowestCostN returns lowest node', () => {
    console.log(findLowestCostN(costs, []))
    expect(findLowestCostN(costs, [])).toBe('Rimnicu')
  })
  it('findLowestCostN returns lowest node again', () => {
    console.log(findLowestCostN(extraCosts, []))
    expect(findLowestCostN(extraCosts, [])).toBe('A')
  })
})
