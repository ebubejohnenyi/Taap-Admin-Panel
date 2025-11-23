import ContainerWrapper from "../../components/container_wrapper";
import RevenueCard from "../dashboard/component/revenue_card";
import { Divider, Drawer, Form, InputNumber } from "antd";
import CustomButton from "../../components/custom_button";

import { CloseOutlined, CreditCardOutlined } from "@ant-design/icons";
import CardDetailContent from "./component/card_detail_content";
import StatusBadge from "../../components/status_badge";
import { useState } from "react";
import TransactionContent from "./component/transaction_content";

const Wallet: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <ContainerWrapper>
      <div className="lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2.5 mb-5">
            <RevenueCard
              label="Balance"
              icon={
                <span className="rounded-xl flex items-center justify-center w-10 h-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 32 32"
                    style={{ transform: "rotate(40deg)" }}
                  >
                    <path
                      fill="currentColor"
                      d="M15 4v20.063L8.22 17.28l-1.44 1.44l8.5 8.5l.72.686l.72-.687l8.5-8.5l-1.44-1.44L17 24.063V4z"
                    />
                  </svg>
                </span>
              }
              value={19250668709}
            />
            <RevenueCard
              label="Withdrawal"
              icon={
                <span className="rounded-xl flex items-center justify-center w-10 h-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 32 32"
                    style={{ transform: "rotate(220deg)" }}
                  >
                    <path
                      fill="currentColor"
                      d="M15 4v20.063L8.22 17.28l-1.44 1.44l8.5 8.5l.72.686l.72-.687l8.5-8.5l-1.44-1.44L17 24.063V4z"
                    />
                  </svg>
                </span>
              }
              value={19250668709}
            />
          </div>
          <CustomButton
            title="Withdraw"
            icon={<CreditCardOutlined />}
            variant="primary"
            titleColor="white"
            onClick={showDrawer}
          />
        </div>

        <div className="border border-[#F5F5F5] rounded-lg p-2">
          <p className="text-gray-400 text-[12px]">Bank Account Info</p>
          <Divider style={{ padding: 0, margin: "10px 0 10px 0" }} />
          <div className="flex flex-col gap-1">
            <CardDetailContent label="Full Name" name="Oando Lts Company" />
            <CardDetailContent label="Country" name="Nigeria" />
            <CardDetailContent
              label="Address"
              name="88 Hebert Maculay Way, Sabo Yaba"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="lg:flex lg:items-center lg:justify-between">
          <p className="sm:mb-3">Transaction History</p>
          <div className="flex items-center gap-5">
            <CustomButton title="Download PDF" variant="secondary" />
            <CustomButton
              title="View Statement"
              variant="primary"
              titleColor="white"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <TransactionContent
            icon={
              <StatusBadge
                className="bg-[#008000]/10 p-2 rounded-full flex items-center gap-2 w-fit"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 text-[#008000]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
                    />
                  </svg>
                }
              />
            }
            message="Successful Transaction"
            amount="12093008700"
            transactionTime="4:44pm 14 Sep, 2025."
          />
          <TransactionContent
            icon={
              <StatusBadge
                className="bg-[#008000]/10 p-2 rounded-full flex items-center gap-2 w-fit"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 text-[#008000]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
                    />
                  </svg>
                }
              />
            }
            message="Successful Transaction"
            amount="12093008700"
            transactionTime="4:44pm 14 Sep, 2025."
          />
          <TransactionContent
            icon={
              <StatusBadge
                className="bg-[#008000]/10 p-2 rounded-full flex items-center gap-2 w-fit"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 text-[#008000]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
                    />
                  </svg>
                }
              />
            }
            message="Successful Transaction"
            amount="12093008700"
            transactionTime="4:44pm 14 Sep, 2025."
          />
          <TransactionContent
            icon={
              <StatusBadge
                className="bg-[#FF0000]/10 p-2 rounded-full flex items-center gap-2 w-fit"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 text-[#FF0000]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                }
              />
            }
            message="Successful Transaction"
            amount="12093008700"
            transactionTime="4:44pm 14 Sep, 2025."
          />
        </div>
      </div>
      <Drawer
        title="Withdraw Funds"
        closeIcon={false}
        onClose={onClose}
        open={open}
        extra={<CloseOutlined onClick={onClose} />}
        styles={{
          content: { marginBottom: 10, borderRadius: "12px 0 0 12px" },
        }}
      >
        <p className="mb-2 text-sm text-gray-400">
          Withdrawal are processed instantly
        </p>
        <Form>
          <p className="text-gray-400">Amount</p>
          <Form.Item
            name={"amount"}
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
          <div className="flex gap-2.5 bg-[#008000]/10 rounded-lg px-2 py-2 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>

            <p>
              We adhere entirely to the data security standards of the payment
              card industry
            </p>
          </div>
          <CustomButton
            title="Proceed"
            variant="primary"
            titleColor="white"
            className="mt-4"
          />
        </Form>
      </Drawer>
    </ContainerWrapper>
  );
};

export default Wallet;
