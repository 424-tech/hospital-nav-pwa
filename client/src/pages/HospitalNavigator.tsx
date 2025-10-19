import { useState, useMemo } from "react";
import FloorGrid from "@/components/FloorGrid";
import FloorSelector from "@/components/FloorSelector";
import NavigationControls from "@/components/NavigationControls";
import PathDisplay from "@/components/PathDisplay";
import HelpBoard from "@/components/HelpBoard";
import NoticeBoard from "@/components/NoticeBoard";
import { floorData, helpRequests, announcements } from "@/lib/hospitalData";
import { findPath, estimateTime } from "@/lib/pathfinding";
import type { GridCell } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export default function HospitalNavigator() {
  const { toast } = useToast();
  const [currentFloor, setCurrentFloor] = useState(1);
  const [currentLocation, setCurrentLocation] = useState<GridCell | null>(null);
  const [destination, setDestination] = useState<GridCell | null>(null);
  const [path, setPath] = useState<GridCell[]>([]);
  
  const allCells = useMemo(() => {
    return [...floorData[1], ...floorData[2], ...floorData[3]];
  }, []);
  
  const pathCellIds = useMemo(() => {
    return new Set(path.map(cell => cell.id));
  }, [path]);
  
  const handleNavigate = () => {
    if (!currentLocation || !destination) return;
    
    const foundPath = findPath(currentLocation, destination, allCells);
    setPath(foundPath);
    
    if (foundPath.length > 0) {
      setCurrentFloor(foundPath[0].floor);
    }
  };
  
  const handleCurrentChange = (cellId: string) => {
    const cell = allCells.find(c => c.id === cellId);
    setCurrentLocation(cell || null);
    setPath([]);
  };
  
  const handleDestinationChange = (cellId: string) => {
    const cell = allCells.find(c => c.id === cellId);
    setDestination(cell || null);
    setPath([]);
  };
  
  const handleOfferHelp = (id: string) => {
    toast({
      title: "Success!",
      description: "You'll earn ₹15 for helping!",
    });
  };
  
  const estimatedMinutes = useMemo(() => {
    return estimateTime(path.length);
  }, [path]);
  
  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <header>
          <h1 className="text-[32px] font-semibold text-center mb-2 text-gray-800" data-testid="text-title">
            Hospital Navigator
          </h1>
        </header>
        
        <section>
          <FloorSelector
            currentFloor={currentFloor}
            onFloorChange={setCurrentFloor}
          />
        </section>
        
        <section>
          <FloorGrid
            cells={floorData[currentFloor]}
            currentLocation={currentLocation}
            destination={destination}
            pathCells={pathCellIds}
          />
        </section>
        
        <section>
          <NavigationControls
            allCells={allCells}
            currentLocation={currentLocation}
            destination={destination}
            onCurrentChange={handleCurrentChange}
            onDestinationChange={handleDestinationChange}
            onNavigate={handleNavigate}
          />
        </section>
        
        {path.length > 0 && (
          <section>
            <PathDisplay
              path={path}
              estimatedMinutes={estimatedMinutes}
            />
          </section>
        )}
        
        <section>
          <HelpBoard
            requests={helpRequests}
            onOfferHelp={handleOfferHelp}
          />
        </section>
        
        <section>
          <NoticeBoard announcements={announcements} />
        </section>
      </div>
    </div>
  );
}
