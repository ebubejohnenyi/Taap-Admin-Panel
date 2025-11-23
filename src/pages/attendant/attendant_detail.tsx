import { DatePicker, Drawer, Form, Input, Select } from "antd";
import ContainerWrapper from "../../components/container_wrapper";
import CustomButton from "../../components/custom_button";
import PersonAvatar from "../../components/person_avatar";
import DetailContent from "./component/detail_content";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";

const AttendantDetail = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <ContainerWrapper>
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <PersonAvatar img="" className="w-[142px] h-[142px]" />
          <div>
            <p className="text-2xl font-bold">Abubakar Haruna</p>
            <div className="flex items-center gap-2.5 text-gray-400">
              <p>haruna@gmail.com</p>
              <p>+234 70123456789</p>
            </div>
          </div>
        </div>

        <div className="w-20">
          <CustomButton
            titleColor="white"
            variant="primary"
            title="Edit"
            onClick={showDrawer}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-20 gap-y-4 mt-5">
        <DetailContent label="Full Name" value="Abubakar Haruna" />
        <DetailContent label="Phone Number" value="+234 70123456789" />
        <DetailContent
          label="Address"
          value="123, ABC Street, Lagos, Nigeria"
        />
        <DetailContent label="State" value="Jos" />
        <DetailContent label="Language" value="Hausa" />
        <DetailContent label="Country" value="Nigeria" />
      </div>

      <div className="mt-5">
        <p className="font-bold">Resume</p>
        <embed
          src="src/assets/pdf/cv-template.pdf"
          width="800px"
          height="750px"
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
        <Form>
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
    </ContainerWrapper>
  );
};

export default AttendantDetail;
