import { Form, Modal, TimePicker } from "antd";
import ContainerWrapper from "../../components/container_wrapper";
import SettingContent from "./component/setting_content";
import StockContent from "./component/stock_content";
import { useState } from "react";
import { Dayjs } from "dayjs";
import CustomButton from "../../components/custom_button";
import { toast, ToastContainer } from "react-toastify";

const Setting = () => {
  const [isModalOpen, setIsModalOpen] = useState("");

  // Opening & Closing Time States
  const [openingTime, setOpeningTime] = useState<Dayjs | null>(null);
  const [closingTime, setClosingTime] = useState<Dayjs | null>(null);

  // Reconciliation Time State
  const [reconTime, setReconTime] = useState<Dayjs | null>(null);

  const showModal = (tab: string) => {
    setIsModalOpen(tab);
  };

  const handleCancel = () => {
    setIsModalOpen("");
  };

  // Disable earlier hours/minutes for closing time
  const disableClosingTime = () => {
    if (!openingTime) return {};

    const openHour = openingTime.hour();
    const openMinute = openingTime.minute();

    return {
      disabledHours: () => Array.from({ length: openHour }, (_, i) => i),
      disabledMinutes: (selectedHour: number) =>
        selectedHour === openHour
          ? Array.from({ length: openMinute }, (_, i) => i)
          : [],
    };
  };

  const notifyOpenClose = () =>
    toast.success("Successfully! Set Opening & Closing time.");

  const notifyReconciliation = () =>
    toast.success("Successfully! Set reconciliation time.");

  const notifySave = () => toast.success("Success");

  const handleSave = (value: string) => {
    if (value === "fuel") {
      notifySave();
    } else if (value === "gas") {
      notifySave();
    } else if (value === "diesel") {
      notifySave();
    } else if (value === "kerosine") {
      notifySave();
    }
  };

  return (
    <ContainerWrapper>
      <ToastContainer />
      {/* Opening & Closing Display */}
      <SettingContent
        label="Opening - Closing"
        description="Set opening and closing time for station."
        selectedOpeningTime={openingTime?.format("hh:mm A") || "Not set"}
        selectedClosingTime={closingTime?.format("hh:mm A") || "Not set"}
        onEdit={() => showModal("open-close")}
      />

      {/* Reconciliation Display */}
      <SettingContent
        label="Reconciliation"
        description="Set automated reconciliation time."
        selectedOpeningTime={reconTime?.format("hh:mm A") || "Not set"}
        selectedClosingTime=""
        onEdit={() => showModal("reconciliation")}
      />

      {/* Stock Section */}
      <div className="py-2">
        <p>Stock Availability</p>
        <p className="text-gray-400">
          Set available stock amount for each product.
        </p>

        <div className="pl-5">
          <StockContent
            label="Fuel"
            value="1234"
            onSave={() => handleSave("fuel")}
          />
          <StockContent
            label="Gas"
            value="754"
            onSave={() => handleSave("gas")}
          />
          <StockContent
            label="Diesel"
            value="2234"
            onSave={() => handleSave("diesel")}
          />
          <StockContent
            label="Kerosin"
            value="234"
            onSave={() => handleSave("kerosine")}
          />
        </div>
      </div>

      {/* Modal */}
      <Modal
        title={
          isModalOpen === "open-close"
            ? "Set Opening & Closing Time"
            : "Set Reconciliation Time"
        }
        open={isModalOpen !== ""}
        onCancel={handleCancel}
        maskClosable={false}
        keyboard={false}
        footer={false}
      >
        {/* Open and Close Form */}
        {isModalOpen === "open-close" && (
          <Form
            layout="vertical"
            onFinish={() => {
              setIsModalOpen("");
              notifyOpenClose();
            }}
          >
            <div className="flex items-center gap-5">
              {/* Opening Time Picker */}
              <Form.Item
                name="openingTime"
                rules={[
                  { required: true, message: "Please select opening time" },
                ]}
              >
                <TimePicker
                  format="hh:mm A"
                  value={openingTime}
                  onChange={(val) => {
                    setOpeningTime(val);
                    setClosingTime(null); // clear closing time if opening changes
                  }}
                />
              </Form.Item>

              {/* Closing Time Picker */}
              <Form.Item
                name="closingTime"
                rules={[
                  { required: true, message: "Please select closing time" },
                ]}
              >
                <TimePicker
                  format="hh:mm A"
                  value={closingTime}
                  onChange={(val) => setClosingTime(val)}
                  {...disableClosingTime()}
                />
              </Form.Item>
            </div>

            <CustomButton
              title="Save"
              variant="primary"
              titleColor="white"
              type="submit"
            />
          </Form>
        )}

        {/* Reconciliation */}
        {isModalOpen === "reconciliation" && (
          <Form
            layout="vertical"
            onFinish={() => {
              setIsModalOpen("");
              notifyReconciliation();
            }}
          >
            <Form.Item
              name="reconciliationTime"
              rules={[{ required: true, message: "Please select a time" }]}
            >
              <TimePicker
                format="hh:mm A"
                value={reconTime}
                onChange={(val) => setReconTime(val)}
              />
            </Form.Item>

            <CustomButton
              title="Save"
              variant="primary"
              titleColor="white"
              type="submit"
            />
          </Form>
        )}
      </Modal>
    </ContainerWrapper>
  );
};

export default Setting;
