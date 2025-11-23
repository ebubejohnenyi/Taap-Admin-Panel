import { Form, Switch } from "antd";
import CustomButton from "../../../components/custom_button";
import { useState } from "react";

type props = {
  label: string;
  value: string;
  onSave: () => void;
};
const StockContent: React.FC<props> = ({ label, value, onSave }) => {
  const [amount, setAmount] = useState(value);
  const handleChange = (e: any) => {
    // Remove ₦, commas, and spaces
    const raw = e.target.value.replace(/₦|,/g, "");

    // Only numbers allowed
    if (!isNaN(raw)) {
      setAmount(raw);
    }
  };

  return (
    <Form>
      <div className="grid grid-cols-3 lg:gap-40 items-center w-fit mb-5">
        <p>{label}</p>
        <Form.Item
          style={{
            padding: 0,
            margin: 0,
            width: "fit-content",
          }}
        >
          <Switch
            defaultChecked
            onChange={() => {}}
            size="small"
            style={{ width: "30px" }}
          />
        </Form.Item>
        <div className="w-[150px] flex items-center gap-2.5">
          <Form.Item style={{ padding: 0, margin: 0, width: "fit-content" }}>
            <input
              className="text-gray-400 w-[60px] border border-gray-300 rounded-sm px-1"
              value={`₦${Number(amount).toLocaleString()}`}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item style={{ padding: 0, margin: 0, width: "fit-content" }}>
            <CustomButton
              title="Save"
              variant="primary"
              titleColor="white"
              onClick={onSave}
            />
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default StockContent;
