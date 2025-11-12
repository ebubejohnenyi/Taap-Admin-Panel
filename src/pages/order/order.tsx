import { type TabsProps, Tabs } from "antd";
import ContainerWrapper from "../../components/container_wrapper";
import PreOrder from "./pre-order";
import ValidatedOrder from "./validated_order";
import CancelledOrder from "./cancelled_order";
import CompletedOrder from "./completed_order";

const Order: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Pre Order",
      children: <PreOrder />,
    },
    {
      key: "2",
      label: "Validated Order",
      children: <ValidatedOrder />,
    },
    {
      key: "3",
      label: "Cancelled Order",
      children: <CancelledOrder />,
    },
    {
      key: "4",
      label: "Completed Order",
      children: <CompletedOrder />,
    },
  ];

  return (
    <ContainerWrapper>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </ContainerWrapper>
  );
};

export default Order;
