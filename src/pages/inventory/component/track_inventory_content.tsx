import { Badge } from "antd";

type props = {
  statusColor: string;
  label: string;
  value: string;
};
const TrackInventoryContent: React.FC<props> = ({
  statusColor,
  label,
  value,
}) => {
  return (
    <div className="flex items-center gap-1">
      <Badge color={statusColor} />
      <p className="text-gray-400 text-[12px]">
        {label} {value}%
      </p>
    </div>
  );
};

export default TrackInventoryContent;
