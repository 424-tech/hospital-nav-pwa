import type { GridCell } from "@shared/schema";

interface PathDisplayProps {
  path: GridCell[];
  estimatedMinutes: number;
}

export default function PathDisplay({ path, estimatedMinutes }: PathDisplayProps) {
  if (path.length === 0) {
    return null;
  }

  const routeText = path
    .map(cell => cell.name)
    .join(" → ");

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-xl bg-white shadow-md">
      <div className="space-y-3">
        <div>
          <span className="font-semibold text-gray-700">Route: </span>
          <span className="text-base text-gray-600" data-testid="text-route">{routeText}</span>
        </div>
        <div>
          <span className="font-semibold text-xl text-[#007AFF]" data-testid="text-time">
            Estimated Time: ~{estimatedMinutes} minutes
          </span>
        </div>
      </div>
    </div>
  );
}
