import PathDisplay from "../PathDisplay";
import { floorData } from "@/lib/hospitalData";

export default function PathDisplayExample() {
  const path = [
    floorData[1][0],
    floorData[1][1],
    floorData[1][2],
  ];
  
  return (
    <div className="p-4">
      <PathDisplay path={path} estimatedMinutes={5} />
    </div>
  );
}
