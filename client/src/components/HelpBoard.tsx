import type { HelpRequest } from "@shared/schema";
import HelpRequestCard from "./HelpRequestCard";

interface HelpBoardProps {
  requests: HelpRequest[];
  onOfferHelp: (id: string) => void;
}

export default function HelpBoard({ requests, onOfferHelp }: HelpBoardProps) {
  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <h2 className="text-[28px] font-semibold">Community Help Requests</h2>
      <div className="space-y-4">
        {requests.map((request) => (
          <HelpRequestCard
            key={request.id}
            request={request}
            onOfferHelp={onOfferHelp}
          />
        ))}
      </div>
    </div>
  );
}
