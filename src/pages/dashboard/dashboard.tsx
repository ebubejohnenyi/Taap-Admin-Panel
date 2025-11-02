import { Layout, Switch } from "antd";
import RevenueBalance from "./component/revenue_balance";
import { useState } from "react";
import RevenueCategory from "./component/revenue_category";
import CategoryContent from "./component/category_content";
import CustomButton from "../../components/custom_button";

const { Content } = Layout;

const Dashboard = () => {
  const [toggle, setToggle] = useState(false);
  const onChange = (checked: boolean) => {
    setToggle(!checked);
  };

  return (
    <Content style={{ backgroundColor: "white" }}>
      <div className="px-5 grid grid-cols-2 gap-5">
        <RevenueBalance />
        <div className="border p-3 rounded-lg border-gray-100">
          <div className="flex justify-end items-center gap-5 mb-2">
            <CustomButton
              title="Edit"
              variant="secondary"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8"
                    stroke-width="1"
                  />
                </svg>
              }
            />
            <CustomButton title="Save" variant="primary" titleColor="white" />
          </div>
          <div className="flex flex-col gap-5">
            <CategoryContent label="PETROL" price="1,200" onChange={() => {}} />
            <CategoryContent label="GAS" price="650" onChange={() => {}} />
            <CategoryContent label="DIESEL" price="2,500" onChange={() => {}} />
            <CategoryContent label="KEROSINE" price="450" onChange={() => {}} />
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Dashboard;
