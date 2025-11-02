import { Select } from "antd";
import TotalLogo from "../../../assets/png/t.png";
import CompletedLogo from "../../../assets/png/c.png";
import PendingLogo from "../../../assets/png/p.png";
import CancelledLogo from "../../../assets/png/ca.png";
import RevenueCategory from "./revenue_category";

const RevenueBalance: React.FC = () => {
  return (
    <div className="w-[549px] h-[176] shadow py-5 px-5 rounded-xl">
      <div className="flex justify-between">
        <div>
          <p className="text-[#00000080]">Total Revenue</p>
          <div className="flex items-center">
            <p className="text-[36px] font-bold">₦</p>
            <p className="text-[36px] font-bold">192,506,687.09</p>
          </div>
        </div>
        <Select
          defaultValue="Today"
          style={{ width: 120 }}
          onChange={() => {}}
          options={[
            { value: "today", label: "Today" },
            { value: "week", label: "This Week" },
            { value: "month", label: "This Month" },
            { value: "year", label: "This Year" },
          ]}
        />
      </div>
      <div className="flex justify-between gap-5 my-3">
        <RevenueCategory logo={TotalLogo} label="Total Order" value="2,024" />
        <RevenueCategory logo={CompletedLogo} label="Completed" value="207" />
        <RevenueCategory logo={PendingLogo} label="Pending" value="650" />
        <RevenueCategory logo={CancelledLogo} label="Cancelled" value="34" />
      </div>
    </div>
  );
};

export default RevenueBalance;
