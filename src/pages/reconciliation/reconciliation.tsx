import {
  DatePicker,
  Drawer,
  Form,
  Input,
  InputNumber,
  Select,
  Table,
  Tooltip,
  type TableProps,
} from "antd";
import ContainerWrapper from "../../components/container_wrapper";
import CustomButton from "../../components/custom_button";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const data: DataType[] = [
  {
    id: 1,
    sale: "₦100,109.70",
    type: "POS",
    stock: "Gas",
    volume: "25/Liters",
    date: "25 Nov, 2025",
  },
  {
    id: 2,
    sale: "₦100,109.70",
    type: "POS",
    stock: "Fuel",
    volume: "25/Liters",
    date: "25 Nov, 2025",
  },
  {
    id: 3,
    sale: "₦100,109.70",
    type: "Cash",
    stock: "Diesel",
    volume: "25/Liters",
    date: "25 Nov, 2025",
  },
  {
    id: 4,
    sale: "₦100,109.70",
    type: "Transfer",
    stock: "Fuel",
    volume: "25/Liters",
    date: "25 Nov, 2025",
  },
  {
    id: 5,
    sale: "₦100,109.70",
    type: "POS",
    stock: "Fuel",
    volume: "25/Liters",
    date: "25 Nov, 2025",
  },
  {
    id: 6,
    sale: "₦100,109.70",
    type: "Transfer",
    stock: "Gas",
    volume: "25/Liters",
    date: "25 Nov, 2025",
  },
];

interface DataType {
  id: number;
  sale: string;
  type: string;
  stock: string;
  volume: string;
  date: string;
}

const Reconciliation = () => {
  const [open, setOpen] = useState("");

  const showDrawer = (value: string) => {
    setOpen(value);
  };

  const onClose = () => {
    setOpen("");
  };
  const [dropdown, setDropDown] = useState<number | null>();

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "SALE",
      dataIndex: "sale",
      key: "sale",
    },
    {
      title: "TYPE",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "STOCK",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "VOLUME",
      dataIndex: "volume",
      key: "volume",
    },
    {
      title: "DATE",
      dataIndex: "date",
      key: "date",
    },
    {
      render: (_, record) => (
        <div
          className="relative"
          onMouseEnter={() => setDropDown(record.id)}
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
          {dropdown === record.id && (
            <div className="bg-white shadow h-fit rounded-lg w-fit py-1.5 px-0.5 absolute z-10 bottom-0 top-5">
              <p
                onClick={() =>
                  showDrawer(
                    record.type.toLowerCase() === "pos" ? "pos" : "cash"
                  )
                }
                className="text-black hover:bg-[#F5F5F5] cursor-pointer hover:transition-all hover:ease-in-out w-full px-2 py-0.5 rounded-sm"
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

  const notify = () =>
    toast.success("Great job! Cash reconciliation has been recorded.");

  return (
    <ContainerWrapper>
      <ToastContainer />
      <div className="w-full flex items-center justify-between">
        <Tooltip title="Automated reconciliation would be generated.">
          <p className="text-gray-400">
            Review and verify your cash and POS transactions. At the end of the
            day, an automated reconciliation is generated for accurate records.
          </p>
        </Tooltip>
        <div className="w-[200px] flex items-center gap-5">
          <CustomButton
            title="Cash"
            titleColor="white"
            variant="primary"
            onClick={() => showDrawer("cash")}
          />
          <CustomButton
            title="POS"
            titleColor="grey"
            variant="secondary"
            onClick={() => showDrawer("pos")}
          />
        </div>
      </div>
      <div className="mt-5">
        <div className="custom-table">
          <Table<DataType>
            columns={columns}
            dataSource={data}
            rowKey={"id"}
            scroll={{ x: "max-content" }}
          />
        </div>
      </div>
      <Drawer
        title={`${open === "cash" ? "Reconcile Cash" : "Reconcile POS"}`}
        closeIcon={false}
        onClose={onClose}
        open={open === "cash" || open === "pos"}
        extra={<CloseOutlined onClick={onClose} />}
        styles={{
          content: { marginBottom: 10, borderRadius: "12px 0 0 12px" },
        }}
      >
        <Form
          onFinish={() => {
            setOpen("");
            notify();
          }}
        >
          <Form.Item
            name={"amount"}
            label="Amount"
            layout="vertical"
            rules={[{ required: true, message: "Field cannot be empty" }]}
          >
            <InputNumber
              className="w-full border border-gray-300 rounded-md"
              placeholder="Enter Amount"
              style={{
                outline: "none",
                boxShadow: "none",

                width: "100%",
              }}
              formatter={(value) =>
                `₦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value: any) => value.replace(/₦\s?|(,*)/g, "")}
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
              format="DD-MM-YYYY"
            />
          </Form.Item>

          <Form.Item
            name={"stock"}
            label="Stock"
            layout="vertical"
            rules={[{ required: true, message: "Field cannot be empty" }]}
          >
            <Select
              options={[
                { label: "Fuel", value: "fuel" },
                { label: "Gas", value: "gas" },
                { label: "Diesel", value: "diesel" },
                { label: "Keorsine", value: "kerosine" },
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

export default Reconciliation;
