import type { GridCell } from "@shared/schema";
import { Button } from "@/components/ui/button";

interface NavigationControlsProps {
  allCells: GridCell[];
  currentLocation: GridCell | null;
  destination: GridCell | null;
  onCurrentChange: (cellId: string) => void;
  onDestinationChange: (cellId: string) => void;
  onNavigate: () => void;
}

export default function NavigationControls({
  allCells,
  currentLocation,
  destination,
  onCurrentChange,
  onDestinationChange,
  onNavigate,
}: NavigationControlsProps) {
  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      <div>
        <label htmlFor="current-location" className="block text-base font-medium mb-2 text-gray-700">
          Where are you now?
        </label>
        <select
          id="current-location"
          data-testid="select-current"
          value={currentLocation?.id || ""}
          onChange={(e) => onCurrentChange(e.target.value)}
          className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 shadow-sm focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
        >
          <option value="">Select location</option>
          {allCells.map((cell) => (
            <option key={cell.id} value={cell.id}>
              Floor {cell.floor} - {cell.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="destination" className="block text-base font-medium mb-2 text-gray-700">
          Where do you want to go?
        </label>
        <select
          id="destination"
          data-testid="select-destination"
          value={destination?.id || ""}
          onChange={(e) => onDestinationChange(e.target.value)}
          className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 shadow-sm focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
        >
          <option value="">Select destination</option>
          {allCells.map((cell) => (
            <option key={cell.id} value={cell.id}>
              Floor {cell.floor} - {cell.name}
            </option>
          ))}
        </select>
      </div>

      <Button
        data-testid="button-navigate"
        onClick={onNavigate}
        disabled={!currentLocation || !destination}
        className="w-full h-12 bg-[#007AFF] hover:bg-[#0051D5] active:scale-95 transition-all text-base font-medium"
      >
        Find Route
      </Button>
    </div>
  );
}
