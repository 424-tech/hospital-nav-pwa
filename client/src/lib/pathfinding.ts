import type { GridCell } from "@shared/schema";

interface PathNode {
  cell: GridCell;
  parent: PathNode | null;
  g: number;
  h: number;
  f: number;
}

function heuristic(a: GridCell, b: GridCell): number {
  const floorDiff = Math.abs(a.floor - b.floor) * 5;
  const rowDiff = Math.abs(a.row - b.row);
  const colDiff = Math.abs(a.col - b.col);
  return floorDiff + rowDiff + colDiff;
}

function getNeighbors(cell: GridCell, allCells: GridCell[]): GridCell[] {
  const neighbors: GridCell[] = [];
  const { floor, row, col } = cell;
  
  const directions = [
    { dr: -1, dc: 0 },
    { dr: 1, dc: 0 },
    { dr: 0, dc: -1 },
    { dr: 0, dc: 1 },
  ];
  
  for (const { dr, dc } of directions) {
    const neighbor = allCells.find(
      c => c.floor === floor && c.row === row + dr && c.col === col + dc
    );
    if (neighbor) neighbors.push(neighbor);
  }
  
  if (cell.name === "Stairs" || cell.name === "Elevator") {
    const verticalNeighbor = allCells.find(
      c => (c.name === "Stairs" || c.name === "Elevator") && 
           c.floor !== floor && 
           c.row === row && 
           c.col === col
    );
    if (verticalNeighbor) neighbors.push(verticalNeighbor);
  }
  
  return neighbors;
}

export function findPath(start: GridCell, end: GridCell, allCells: GridCell[]): GridCell[] {
  const openSet: PathNode[] = [];
  const closedSet = new Set<string>();
  
  const startNode: PathNode = {
    cell: start,
    parent: null,
    g: 0,
    h: heuristic(start, end),
    f: heuristic(start, end),
  };
  
  openSet.push(startNode);
  
  while (openSet.length > 0) {
    openSet.sort((a, b) => a.f - b.f);
    const current = openSet.shift()!;
    
    if (current.cell.id === end.id) {
      const path: GridCell[] = [];
      let node: PathNode | null = current;
      while (node) {
        path.unshift(node.cell);
        node = node.parent;
      }
      return path;
    }
    
    closedSet.add(current.cell.id);
    
    const neighbors = getNeighbors(current.cell, allCells);
    for (const neighbor of neighbors) {
      if (closedSet.has(neighbor.id)) continue;
      
      const g = current.g + 1;
      const h = heuristic(neighbor, end);
      const f = g + h;
      
      const existingNode = openSet.find(n => n.cell.id === neighbor.id);
      if (existingNode) {
        if (g < existingNode.g) {
          existingNode.g = g;
          existingNode.f = f;
          existingNode.parent = current;
        }
      } else {
        openSet.push({
          cell: neighbor,
          parent: current,
          g,
          h,
          f,
        });
      }
    }
  }
  
  return [];
}

export function estimateTime(pathLength: number): number {
  return Math.ceil(pathLength * 0.5);
}
