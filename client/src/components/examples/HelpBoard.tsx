import HelpBoard from "../HelpBoard";
import { helpRequests } from "@/lib/hospitalData";

export default function HelpBoardExample() {
  return (
    <div className="p-4">
      <HelpBoard
        requests={helpRequests}
        onOfferHelp={(id) => console.log("Offered help for:", id)}
      />
    </div>
  );
}
