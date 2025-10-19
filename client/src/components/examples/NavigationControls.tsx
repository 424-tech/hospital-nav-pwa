import NavigationControls from "../NavigationControls";
import { floorData } from "@/lib/hospitalData";
import { useState } from "react";

export default function NavigationControlsExample() {
  const allCells = [...floorData[1], ...floorData[2], ...floorData[3]];
  const [current, setCurrent] = useState<string | null>(null);
  const [destination, setDestination] = useState<string | null>(null);
  
  const currentCell = allCells.find(c => c.id === current) || null;
  const destCell = allCells.find(c => c.id === destination) || null;
  
  return (
    <div className="p-4">
      <NavigationControls
        allCells={allCells}
        currentLocation={currentCell}
        destination={destCell}
        onCurrentChange={(id) => {
          setCurrent(id);
          console.log("Current:", id);
        }}
        onDestinationChange={(id) => {
          setDestination(id);
          console.log("Destination:", id);
        }}
        onNavigate={() => console.log("Navigate clicked")}
      />
    </div>
  );
}
