import FloorGrid from "../FloorGrid";
import { floorData } from "@/lib/hospitalData";

export default function FloorGridExample() {
  const cells = floorData[1];
  const pathCells = new Set(["1-0-0", "1-0-1", "1-0-2"]);
  
  return (
    <div className="p-4">
      <FloorGrid
        cells={cells}
        currentLocation={cells[0]}
        destination={cells[2]}
        pathCells={pathCells}
        onCellClick={(cell) => console.log("Clicked:", cell.name)}
      />
    </div>
  );
}
