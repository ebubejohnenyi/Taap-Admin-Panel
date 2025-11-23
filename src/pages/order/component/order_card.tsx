import type { ReactNode } from "react";

type props = {
  icon: ReactNode;
  label: string;
  value: string;
  statistics: string;
};
const OrderCard: React.FC<props> = ({ icon, label, statistics, value }) => {
  return (
    <div className="w-full rounded-lg px-3 py-3 mb-1 h-fit border border-gray-400/20">
      <p className="text-[12px] text-gray-400">{label}</p>
      <p className="text-2xl">{value}-</p>
      <span className="flex items-center gap-1 text-[12px] text-gray-400">
        {icon}
        <p>{statistics}% last week</p>
      </span>
    </div>
  );
};

export default OrderCard;
