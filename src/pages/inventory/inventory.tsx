import ContainerWrapper from "../../components/container_wrapper";
import RevenueCard from "../dashboard/component/revenue_card";
import TrackInventoryContent from "./component/track_inventory_content";
import { useState } from "react";
import {
  Badge,
  DatePicker,
  Drawer,
  Form,
  Input,
  Select,
  Table,
  type TableProps,
} from "antd";
import { Link } from "react-router-dom";
import PersonAvatar from "../../components/person_avatar";
import CustomButton from "../../components/custom_button";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { toast, ToastContainer } from "react-toastify";

const Inventory = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropDown] = useState<number | null>(null);

  const showDrawer = () => {
    console.log("Open");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const data: DataType[] = [
    {
      key: 1,
      supplier: "NNPC Delivery Company",
      type: "Fuel",
      date: "2:45pm 14th Nov, 2025",
      status: "delivered",
      volume: "205,345 Liters",
    },
    {
      key: 2,
      supplier: "NNPC Delivery Company",
      type: "Gas",
      date: "2:45pm 14th Nov, 2025",
      status: "delivered",
      volume: "205,345 Liters",
    },
    {
      key: 3,
      supplier: "NNPC Delivery Company",
      type: "Diesel",
      date: "2:45pm 14th Nov, 2025",
      status: "delivered",
      volume: "205,345 Liters",
    },
    {
      key: 4,
      supplier: "NNPC Delivery Company",
      type: "kerosin",
      date: "2:45pm 14th Nov, 2025",
      status: "delivered",
      volume: "205,345 Liters",
    },
  ];

  interface DataType {
    key: number;
    supplier: string;
    type: string;
    date: string;
    status: string;
    volume: string;
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "SUPPLIER",
      dataIndex: "supplier",
      key: "supplier",
      render: (attendant) => (
        <div className="flex items-center gap-2">
          <PersonAvatar img={""} className="object-contain w-7 h-7" />
          <p>{attendant}</p>
        </div>
      ),
    },
    {
      title: "TYPE",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "DATE",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span className="text-[10px] wrap-anywhere text-[#81B622] capitalize flex items-center gap-1">
          <Badge color="green" />
          <p>{status}</p>
        </span>
      ),
    },
    {
      title: "VOLUME",
      dataIndex: "volume",
      key: "volume",
    },
    {
      render: (_, record) => (
        <div
          className="relative"
          onMouseEnter={() => setDropDown(record.key)}
          onMouseLeave={() => setDropDown(null)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
          {dropdown === record.key && (
            <div className="bg-white shadow h-fit rounded-lg w-fit py-1.5 px-0.5 absolute z-10 bottom-0 top-5">
              <p
                onClick={showDrawer}
                className="text-black hover:bg-[#F5F5F5] hover:transition-all hover:ease-in-out w-full px-2 py-0.5 rounded-sm"
              >
                Edit
              </p>
            </div>
          )}
        </div>
      ),
      key: "actions",
    },
  ];

  const notify = () => toast.success("Great job! New stock recorded.");

  return (
    <ContainerWrapper>
      <ToastContainer />
      <div className="lg:w-[500px]">
        <div className="grid lg:grid-cols-2  gap-10 mb-5">
          <RevenueCard
            label="Stock Receivied"
            value={"19250668709"}
            track_inventory={
              <div className="sm:grid-cols-4 grid lg:grid-cols-2 w-full">
                <TrackInventoryContent
                  statusColor="orange"
                  label="Fuel"
                  value="50"
                />
                <TrackInventoryContent
                  statusColor="green"
                  label="Gas"
                  value="30"
                />
                <TrackInventoryContent
                  statusColor="purple"
                  label="Diesel"
                  value="10"
                />
                <TrackInventoryContent
                  statusColor="gray"
                  label="Kerosin"
                  value="10"
                />
              </div>
            }
          />
          <RevenueCard
            label="Stock Sold"
            value={"901234"}
            track_inventory={
              <div className="sm:grid-cols-4 grid lg:grid-cols-2">
                <TrackInventoryContent
                  statusColor="orange"
                  label="Fuel"
                  value="50"
                />
                <TrackInventoryContent
                  statusColor="green"
                  label="Gas"
                  value="30"
                />
                <TrackInventoryContent
                  statusColor="purple"
                  label="Diesel"
                  value="10"
                />
                <TrackInventoryContent
                  statusColor="gray"
                  label="Kerosin"
                  value="10"
                />
              </div>
            }
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div>
          <p>Inventory Managment</p>
          <p className="text-gray-400">
            Track current stock, capacity, and shortages in real-time
          </p>
        </div>
        <div className="w-[150px]">
          <CustomButton
            title="Add Record"
            titleColor="white"
            variant="primary"
            icon={<PlusOutlined />}
            onClick={showDrawer}
          />
        </div>
      </div>
      <div className="custom-table">
        <Table<DataType>
          columns={columns}
          dataSource={data}
          rowKey={"key"}
          scroll={{ x: "max-content" }}
        />
      </div>
      <Drawer
        title="Record Stock"
        closeIcon={false}
        onClose={onClose}
        open={open}
        extra={<CloseOutlined onClick={onClose} />}
        styles={{
          content: { marginBottom: 10, borderRadius: "12px 0 0 12px" },
        }}
      >
        <Form
          onFinish={() => {
            setOpen(false);
            notify();
          }}
        >
          <Form.Item
            name={"supplier"}
            label="Supplier"
            layout="vertical"
            rules={[{ required: true, message: "Field cannot be empty" }]}
          >
            <Select
              options={[
                { label: "NNPC", value: "igbo" },
                { label: "PMC", value: "hausa" },
              ]}
            />
          </Form.Item>

          <Form.Item
            name={"volume"}
            label="Volume"
            layout="vertical"
            rules={[{ required: true, message: "Field cannot be empty" }]}
          >
            <Input
              className="w-full border border-gray-300 rounded-md"
              placeholder="Enter Volume"
            />
          </Form.Item>

          <Form.Item
            name={"date"}
            label="Date"
            layout="vertical"
            rules={[{ required: true, message: "Field cannot be empty" }]}
          >
            <DatePicker
              className="w-full border border-gray-300 rounded-md"
              placeholder="Select Date"
              showTime
              format="YYYY-MM-DD HH:mm:ss"
            />
          </Form.Item>

          <Form.Item
            name={"stock_type"}
            label="Stock Type"
            layout="vertical"
            rules={[{ required: true, message: "Field cannot be empty" }]}
          >
            <Select
              options={[
                { label: "Fuel", value: "fuel" },
                { label: "Gas", value: "gas" },
                { label: "Diesel", value: "diesel" },
                { label: "Kerosine", value: "Kerosin" },
              ]}
            />
          </Form.Item>
          <CustomButton
            type="submit"
            title="Save"
            variant="primary"
            titleColor="white"
            className="mt-4"
          />
        </Form>
      </Drawer>
    </ContainerWrapper>
  );
};

export default Inventory;
