import { message } from "antd";
import StatusBadge from "../../../components/status_badge";

type props = {
  message: string;
  amount: string;
  icon: React.ReactNode;
  transactionTime: string;
};
const TransactionContent: React.FC<props> = ({
  message,
  amount,
  icon,
  transactionTime,
}) => {
  return (
    <div className="flex items-center gap-2.5  border-b border-[#F5F5F5] p-2.5 rounded-sm hover:bg-[#F5F5F5]/50 hover:transition-all hover:ease-in-out">
      {icon}
      <div className="flex items-center justify-between w-full">
        <p>
          {message} ₦{Number(amount).toLocaleString()}
        </p>
        <p className="text-gray-400">{transactionTime}</p>
      </div>
    </div>
  );
};

export default TransactionContent;
