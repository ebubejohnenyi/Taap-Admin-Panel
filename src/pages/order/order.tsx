import {
  type TableProps,
  Badge,
  Segmented,
  Table,
  DatePicker,
  type DatePickerProps,
} from "antd";
import ContainerWrapper from "../../components/container_wrapper";
import { useState } from "react";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import OrderCard from "./component/order_card";
import type { Dayjs } from "dayjs";

const { RangePicker } = DatePicker;

interface DataType {
  code: string;
  type: string;
  quantity: string;
  price: string;
  date: string;
  customer: string;
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
    title: "CUSTOMER",
    dataIndex: "customer",
    key: "customer",
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
    render: (status, record) => (
      <span
        className={`text-[10px] wrap-anywher ${
          record.status === "delivered"
            ? "green"
            : record.status === "pending"
            ? "purple"
            : null
        } capitalize flex items-center gap-1`}
      >
        <Badge
          color={` ${
            record.status === "delivered"
              ? "green"
              : record.status === "pending"
              ? "purple"
              : null
          }`}
        />
        <p>{status}</p>
      </span>
    ),
  },
];

type Align = "All" | "Pending" | "Delivered";

const getYearMonth = (date: Dayjs) => date.year() * 12 + date.month();

const disabled7DaysDate: DatePickerProps["disabledDate"] = (
  current,
  { from, type }
) => {
  if (from) {
    const minDate = from.add(-6, "days");
    const maxDate = from.add(6, "days");

    switch (type) {
      case "year":
        return (
          current.year() < minDate.year() || current.year() > maxDate.year()
        );

      case "month":
        return (
          getYearMonth(current) < getYearMonth(minDate) ||
          getYearMonth(current) > getYearMonth(maxDate)
        );

      default:
        return Math.abs(current.diff(from, "days")) >= 7;
    }
  }

  return false;
};

const Order: React.FC = () => {
  const [alignValue, setAlignValue] = useState<Align>("All");

  const data: DataType[] = [
    {
      code: "PR-7665",
      type: "GAS",
      quantity: "25/L",
      price: "100,000",
      date: "14th Oct, 2025",
      customer: "Ebere Chukwu",
      attendant: "Ebere Chukwu",
      status: "delivered",
    },
    {
      code: "PR-7666",
      type: "GAS",
      quantity: "25/L",
      price: "100,000",
      date: "14th Oct, 2025",
      customer: "Sammy Okoro",
      attendant: "Sammy Okoro",
      status: "pending",
    },
    {
      code: "PR-7667",
      type: "GAS",
      quantity: "25/L",
      price: "100,000",
      date: "14th Oct, 2025",
      customer: "Linda Ikeji",
      attendant: "Linda Ikeji",
      status: "delivered",
    },
    {
      code: "PR-7668",
      type: "GAS",
      quantity: "25/L",
      price: "100,000",
      date: "14th Oct, 2025",
      customer: "Ebere Chukwu",
      attendant: "Ebere Chukwu",
      status: "delivered",
    },
    {
      code: "PR-7669",
      type: "GAS",
      quantity: "25/L",
      price: "100,000",
      date: "14th Oct, 2025",
      customer: "Sammy Okoro",
      attendant: "Sammy Okoro",
      status: "pending",
    },
    {
      code: "PR-76610",
      type: "GAS",
      quantity: "25/L",
      price: "100,000",
      date: "14th Oct, 2025",
      customer: "Linda Ikeji",
      attendant: "Linda Ikeji",
      status: "delivered",
    },
  ];

  const filteredData =
    alignValue === "All"
      ? data
      : data.filter(
          (data) => data.status.toLowerCase() === alignValue.toLowerCase()
        );

  return (
    <ContainerWrapper>
      <RangePicker
        disabledDate={disabled7DaysDate}
        style={{ marginBottom: "10px" }}
      />
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 mb-5">
        <OrderCard
          icon={<CaretUpOutlined />}
          label={"Total Order"}
          value={"45"}
          statistics={"45.2"}
        />
        <OrderCard
          icon={<CaretUpOutlined />}
          label={"Order items over time"}
          value={"406"}
          statistics={"55.2"}
        />
        <OrderCard
          icon={<CaretUpOutlined />}
          label={"Fulfilled order over time"}
          value={"56"}
          statistics={"85.2"}
        />
        <OrderCard
          icon={<CaretDownOutlined />}
          label={"Issue order over time"}
          value={"4"}
          statistics={"2"}
        />
      </div>
      <div>
        <Segmented
          value={alignValue}
          style={{ marginBottom: 8 }}
          onChange={setAlignValue}
          options={["All", "Pending", "Delivered"]}
        />
        <div className="custom-table">
          <Table<DataType>
            columns={columns}
            dataSource={filteredData}
            rowKey={"code"}
            scroll={{ x: "max-content" }}
          />
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default Order;
