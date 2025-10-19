import { Button } from "@/components/ui/button";

interface FloorSelectorProps {
  currentFloor: number;
  onFloorChange: (floor: number) => void;
}

export default function FloorSelector({ currentFloor, onFloorChange }: FloorSelectorProps) {
  const floors = [1, 2, 3];
  
  return (
    <div className="flex gap-3 justify-center">
      {floors.map((floor) => (
        <Button
          key={floor}
          data-testid={`button-floor-${floor}`}
          variant={currentFloor === floor ? "default" : "outline"}
          onClick={() => onFloorChange(floor)}
          className={`w-28 h-11 text-base font-medium transition-all active:scale-95 ${
            currentFloor === floor 
              ? "bg-[#007AFF] hover:bg-[#0051D5]" 
              : "border-gray-300 hover:border-[#007AFF] hover:text-[#007AFF]"
          }`}
        >
          Floor {floor}
        </Button>
      ))}
    </div>
  );
}
