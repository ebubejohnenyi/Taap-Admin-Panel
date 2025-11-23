import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import ContainerWrapper from "../../components/container_wrapper";
import CustomButton from "../../components/custom_button";
import {
  type TableProps,
  Badge,
  DatePicker,
  Drawer,
  Form,
  Input,
  Modal,
  Select,
  Table,
} from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import PersonAvatar from "../../components/person_avatar";
import { toast, ToastContainer } from "react-toastify";

const Attendant = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropDown] = useState<number | null>();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const data: DataType[] = [
    {
      key: 1,
      attendant: "Uche Johnson Chinemerem",
      date_joined: "10th May, 2025",
      pump_assigned: "Pump 1",
      sales: "255 Total",
      status: "active",
    },
    {
      key: 2,
      attendant: "Uche Johnson Chinemerem",
      date_joined: "10th May, 2025",
      pump_assigned: "Pump 1",
      sales: "255 Total",
      status: "active",
    },
    {
      key: 3,
      attendant: "Uche Johnson Chinemerem",
      date_joined: "10th May, 2025",
      pump_assigned: "Pump 1",
      sales: "255 Total",
      status: "active",
    },
    {
      key: 4,
      attendant: "Uche Johnson Chinemerem",
      date_joined: "10th May, 2025",
      pump_assigned: "Pump 1",
      sales: "255 Total",
      status: "active",
    },
  ];

  interface DataType {
    key: number;
    attendant: string;
    date_joined: string;
    pump_assigned: string;
    sales: string;
    status: string;
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "ATTENDANT",
      dataIndex: "attendant",
      key: "attendant",
      render: (attendant) => (
        <div className="flex items-center gap-2">
          <PersonAvatar img={""} className="object-contain w-7 h-7" />
          <Link to={"/attendant-detail"}>
            <p className="underline text-black">{attendant}</p>
          </Link>
        </div>
      ),
    },
    {
      title: "DATE",
      dataIndex: "date_joined",
      key: "date_joined",
    },
    {
      title: "PUMP ASSIGNED",
      dataIndex: "pump_assigned",
      key: "pump_assigned",
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
      title: "SALES",
      dataIndex: "sales",
      key: "sales",
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
              <Link to={"/attendant-detail"}>
                <p className="text-black hover:bg-[#F5F5F5] hover:transition-all hover:ease-in-out w-full px-2 py-0.5 rounded-sm">
                  View
                </p>
              </Link>
              <p
                onClick={showModal}
                className="text-red-600 cursor-pointer hover:bg-[#F5F5F5] hover:transition-all hover:ease-in-out w-full px-2 py-0.5 rounded-sm"
              >
                Remove
              </p>
            </div>
          )}
        </div>
      ),
      key: "actions",
    },
  ];

  const notify = () => toast.success("Successfully! New attendant added.");
  const notifyDelete = () => toast.success("Successfully! Attendant deleted.");

  return (
    <ContainerWrapper>
      <ToastContainer />
      <div className="flex items-center justify-between">
        <div>
          <p>Attendant Managment</p>
          <p className="text-gray-400">
            Management tool that streamline, productivity, optimize efficiency
          </p>
        </div>
        <div className="w-[150px]">
          <CustomButton
            title="Add Attendant"
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
        title="Add Attendant"
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
            name={"full_name"}
            label="Full Name"
            layout="vertical"
            rules={[{ required: true, message: "Field cannot be empty" }]}
          >
            <Input
              className="w-full border border-gray-300 rounded-md"
              placeholder="Enter full attendant name"
            />
          </Form.Item>

          <Form.Item
            name={"phone_number"}
            label="Phone Number"
            layout="vertical"
            rules={[{ required: true, message: "Field cannot be empty" }]}
          >
            <Input
              className="w-full border border-gray-300 rounded-md"
              placeholder="Enter attendant phone number"
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
            name={"Address"}
            label="Address"
            layout="vertical"
            rules={[{ required: true, message: "Field cannot be empty" }]}
          >
            <Input
              className="w-full border border-gray-300 rounded-md"
              placeholder="Enter attendant address"
            />
          </Form.Item>

          <Form.Item
            name={"state"}
            label="State"
            layout="vertical"
            rules={[{ required: true, message: "Field cannot be empty" }]}
          >
            <Select
              options={[
                { label: "Abia", value: "igbo" },
                { label: "Enugu", value: "hausa" },
                { label: "Abuja", value: "yoruba" },
                { label: "Lagos", value: "igala" },
              ]}
            />
          </Form.Item>
          <Form.Item
            name={"language"}
            label="Language"
            layout="vertical"
            rules={[{ required: true, message: "Field cannot be empty" }]}
          >
            <Select
              options={[
                { label: "Igbo", value: "igbo" },
                { label: "Hausa", value: "hausa" },
                { label: "Yoruba", value: "yoruba" },
                { label: "Igala", value: "igala" },
              ]}
            />
          </Form.Item>
          <Form.Item
            name={"country"}
            label="Country"
            layout="vertical"
            rules={[{ required: true, message: "Field cannot be empty" }]}
          >
            <Select options={[{ label: "Nigeria", value: "nigeria" }]} />
          </Form.Item>
          <CustomButton
            title="Save"
            variant="primary"
            titleColor="white"
            className="mt-4"
          />
        </Form>
      </Drawer>
      <Modal
        className="custom-modal"
        title="Remove Attendant"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <CustomButton
            onClick={() => {
              setIsModalOpen(false);
              notifyDelete();
            }}
            title="Confirm"
            titleColor="white"
            variant="error"
          />
        }
      >
        <p className="my-2">
          Are you sure you want to remove attendant? Action cannot revert
        </p>
        <div className="flex items-center gap-2">
          <PersonAvatar img={""} className="object-contain w-7 h-7" />
          <p className="text-black">{"Uche Johnson Chinemerem"}</p>
        </div>
      </Modal>
    </ContainerWrapper>
  );
};

export default Attendant;
