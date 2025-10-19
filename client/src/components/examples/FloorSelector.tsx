import FloorSelector from "../FloorSelector";
import { useState } from "react";

export default function FloorSelectorExample() {
  const [floor, setFloor] = useState(1);
  
  return (
    <div className="p-4">
      <FloorSelector
        currentFloor={floor}
        onFloorChange={(f) => {
          setFloor(f);
          console.log("Floor changed to:", f);
        }}
      />
    </div>
  );
}
