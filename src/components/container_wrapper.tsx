import { Layout } from "antd";
import type { ReactNode } from "react";

const { Content } = Layout;
interface props {
  children: ReactNode;
}
const ContainerWrapper: React.FC<props> = ({ children }) => {
  return (
    <Content style={{ backgroundColor: "white" }} className="px-5">
      {children}
    </Content>
  );
};

export default ContainerWrapper;
