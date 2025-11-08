import ContainerWrapper from "../../components/container_wrapper";
import { Badge, Divider, Table, type TableProps } from "antd";
import TotalLogo from "../../assets/png/t.png";
import CompletedLogo from "../../assets/png/c.png";
import PendingLogo from "../../assets/png/p.png";
import CancelledLogo from "../../assets/png/ca.png";
import RevenueWrapper from "./component/revenue_wrapper";
import CategoryContent from "./component/category_content";

const data: DataType[] = [
  {
    code: "PR-7665",
    type: "GAS",
    quantity: "25/Liters",
    price: "100,000",
    date: "14th Oct, 2025",
    attendant: "Ebe",
    status: "completed",
  },
  {
    code: "PR-7666",
    type: "GAS",
    quantity: "25/Liters",
    price: "100,000",
    date: "14th Oct, 2025",
    attendant: "Ebe",
    status: "completed",
  },
  {
    code: "PR-7667",
    type: "GAS",
    quantity: "25/Liters",
    price: "100,000",
    date: "14th Oct, 2025",
    attendant: "Ebe",
    status: "completed",
  },
];

interface DataType {
  code: string;
  type: string;
  quantity: string;
  price: string;
  date: string;
  attendant: string;
  status: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "CODE",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "TYPE",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "QUANTITY",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "PRICE",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "ATTENDANT",
    dataIndex: "attendant",
    key: "attendant",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <span className="text-[10px] text-[#81B622] capitalize flex items-center gap-1">
        <Badge color="green" />
        {status}
      </span>
    ),
  },
];

const Dashboard = () => {
  return (
    <ContainerWrapper>
      <div className="grid grid-cols-4 gap-5 mb-6">
        <RevenueWrapper
          label="Total Revenue"
          img={TotalLogo}
          amount={19250668709}
          statistics="98% than last month"
        />
        <RevenueWrapper
          label="Completed Order"
          img={CompletedLogo}
          amount="202,506"
          statistics="98% than last month"
        />
        <RevenueWrapper
          label="Pending Order"
          img={PendingLogo}
          amount="192,087"
          statistics="98% than last month"
        />
        <RevenueWrapper
          label="Cancelled Order"
          img={CancelledLogo}
          amount="687"
          statistics="98% than last month"
        />
      </div>
      <div className="my-6">
        <p className="text-gray-400 mb-2">Stock Availability</p>
        <div className="grid grid-cols-4 gap-5 bg-[#F5F5F5] py-3 px-2 rounded-lg">
          <CategoryContent label="PETROL" price="1,200" onChange={() => {}} />
          <CategoryContent label="GAS" price="650" onChange={() => {}} />
          <CategoryContent label="DIESEL" price="2,500" onChange={() => {}} />
          <CategoryContent label="KEROSINE" price="450" onChange={() => {}} />
        </div>
      </div>
      {/* <div className="grid grid-cols-2 gap-5">
        <RevenueBalance />
        <StockAvailability />
      </div> */}

      <div className="border-[0.5px] border-[#F5F5F5] px-2 py-4 rounded-lg w-full h-fit my-5">
        <p className="title-content pl-4">Latest Transaction</p>
        <Divider
          className="p-0 m-0"
          style={{ padding: 0, margin: "20px 0 0 0" }}
        />
        <div className="custom-table">
          <Table<DataType>
            columns={columns}
            dataSource={data}
            rowKey={"code"}
          />
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default Dashboard;
