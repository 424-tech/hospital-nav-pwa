import type { HelpRequest } from "@shared/schema";
import { Button } from "@/components/ui/button";

interface HelpRequestCardProps {
  request: HelpRequest;
  onOfferHelp: (id: string) => void;
}

export default function HelpRequestCard({ request, onOfferHelp }: HelpRequestCardProps) {
  return (
    <div 
      className="bg-white rounded-xl p-4 space-y-3 border-l-4 border-[#FFB74D] shadow-md hover:-translate-y-0.5 transition-transform duration-300" 
      data-testid={`card-help-${request.id}`}
    >
      <div className="font-semibold text-base">{request.location}</div>
      <div className="text-sm text-gray-500">{request.timePosted}</div>
      <Button
        data-testid={`button-offer-help-${request.id}`}
        onClick={() => onOfferHelp(request.id)}
        className="w-full h-11 bg-[#007AFF] hover:bg-[#0051D5] active:scale-95 transition-all"
      >
        Offer Help - Earn ₹{request.reward}
      </Button>
    </div>
  );
}
