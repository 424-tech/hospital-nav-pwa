import type { GridCell, RoomType } from "@shared/schema";

interface FloorGridProps {
  cells: GridCell[];
  currentLocation: GridCell | null;
  destination: GridCell | null;
  pathCells: Set<string>;
  onCellClick?: (cell: GridCell) => void;
}

const getRoomColor = (type: RoomType): string => {
  const colors: Record<RoomType, string> = {
    lab: "bg-gradient-to-br from-blue-100 to-blue-200",
    ward: "bg-gradient-to-br from-green-100 to-green-200",
    opd: "bg-gradient-to-br from-yellow-100 to-yellow-200",
    pharmacy: "bg-gradient-to-br from-purple-100 to-purple-200",
    emergency: "bg-gradient-to-br from-red-100 to-red-200",
    general: "bg-[#F5F5F5]",
  };
  return colors[type];
};

export default function FloorGrid({ 
  cells, 
  currentLocation, 
  destination, 
  pathCells,
  onCellClick 
}: FloorGridProps) {
  return (
    <div className="grid grid-cols-5 gap-1 w-full max-w-[400px] md:max-w-[500px] mx-auto">
      {cells.map((cell) => {
        const isStart = currentLocation?.id === cell.id;
        const isEnd = destination?.id === cell.id;
        const isInPath = pathCells.has(cell.id);
        
        return (
          <button
            key={cell.id}
            data-testid={`cell-${cell.id}`}
            onClick={() => onCellClick?.(cell)}
            className={`
              relative aspect-square rounded-lg overflow-hidden
              flex items-center justify-center text-xs font-medium
              ${getRoomColor(cell.type)}
              ${isStart ? "ring-4 ring-[#007AFF] animate-pulse-custom" : ""}
              ${isEnd ? "ring-4 ring-red-500" : ""}
              transition-all duration-300 hover:scale-105
            `}
          >
            <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-center leading-tight">
              {cell.name}
            </span>
            {isInPath && !isStart && !isEnd && (
              <div className="absolute inset-0 border-4 border-[#007AFF] pointer-events-none" />
            )}
          </button>
        );
      })}
    </div>
  );
}
