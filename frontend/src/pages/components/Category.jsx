import Leading from "./icons/Leading";
import LeadingRightArrow from "./icons/LeadingRIghtArrow";
export default function Category() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2 px-3">
        <div>
          <Leading />
        </div>
        <div>Food & Drinks</div>
      </div>
      <div>
        <LeadingRightArrow />
      </div>
    </div>
  );
}
