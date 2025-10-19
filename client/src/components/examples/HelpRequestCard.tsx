import HelpRequestCard from "../HelpRequestCard";

export default function HelpRequestCardExample() {
  const request = {
    id: "h1",
    location: "Floor 2 - ICU",
    timePosted: "5 min ago",
    reward: 15,
  };
  
  return (
    <div className="p-4">
      <HelpRequestCard
        request={request}
        onOfferHelp={(id) => console.log("Offered help for:", id)}
      />
    </div>
  );
}
