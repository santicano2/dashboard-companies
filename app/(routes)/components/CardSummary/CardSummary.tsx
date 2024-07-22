import { CustomIcon } from "@/components/CustomIcon";
import { CardSummaryProps } from "./CardSummary.types";
import { CustomTooltip } from "@/components/CustomTooltip";

export function CardSummary(props: CardSummaryProps) {
  const { average, icon, total, title, tooltipText } = props;

  return (
    <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <CustomIcon icon={icon} />
          {title}
        </div>
        <CustomTooltip content={tooltipText} />
      </div>
    </div>
  );
}
