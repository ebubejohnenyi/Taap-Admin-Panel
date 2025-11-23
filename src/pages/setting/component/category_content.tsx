import { Switch } from "antd";
import type { SwitchChangeEventHandler } from "antd/es/switch";

type props = {
  onChange: SwitchChangeEventHandler;
  label: string;
  price: string;
};
const CategoryContent: React.FC<props> = ({ onChange, label, price }) => {
  return (
    <div className="flex justify-between px-2.5">
      <p className="font-bold">{label}</p>
      <p className="font-bold">₦{Number(price).toLocaleString()}</p>
      <span>
        <Switch defaultChecked onChange={onChange} size="small" />
      </span>
    </div>
  );
};

export default CategoryContent;
