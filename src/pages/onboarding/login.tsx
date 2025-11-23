import { Form, Input } from "antd";
import CustomButton from "../../components/custom_button";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Logo from "../../assets/png/taap logo.png";

const Login = () => {
  return (
    <div className="grid grid-cols-2 justify-center items-center h-screen">
      <div className="bg-orange-400 h-screen w-full"></div>
      <div className="px-10 h-screen">
        <img src={Logo} alt="logo" className="h-10 object-contain mt-10" />
        <p className="font-bold mt-40">Welcome Back!</p>
        <div className="flex items-center gap-1">
          <p>Don't have an account?</p>
          <p className="underline text-black font-bold">Sign Up</p>
        </div>
        <Form>
          <Form.Item
            label="Email"
            name="email"
            layout="vertical"
            rules={[{ required: true, message: "Field cannot be empty." }]}
          >
            <input
              type="email"
              placeholder="Enter Email"
              className="border border-gray-400 rounded-sm w-full px-1.5 py-2 outline-none"
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            layout="vertical"
            rules={[{ required: true, message: "Field cannot be empty." }]}
          >
            <Input.Password
              placeholder="Enter Password"
              style={{
                padding: "8px 6px",
                border: "1px",
                borderColor: "#99a1af",
                borderStyle: "solid",
                borderRadius: "4px",
              }}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item>
            <div className="flex flex-col gap-4">
              <CustomButton
                title="Login"
                titleColor="white"
                variant="primary"
              />
              <CustomButton
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <g fill="none" fill-rule="evenodd" clip-rule="evenodd">
                      <path
                        fill="#f44336"
                        d="M7.209 1.061c.725-.081 1.154-.081 1.933 0a6.57 6.57 0 0 1 3.65 1.82a100 100 0 0 0-1.986 1.93q-1.876-1.59-4.188-.734q-1.696.78-2.362 2.528a78 78 0 0 1-2.148-1.658a.26.26 0 0 0-.16-.027q1.683-3.245 5.26-3.86"
                        opacity="0.987"
                      />
                      <path
                        fill="#ffc107"
                        d="M1.946 4.92q.085-.013.161.027a78 78 0 0 0 2.148 1.658A7.6 7.6 0 0 0 4.04 7.99q.037.678.215 1.331L2 11.116Q.527 8.038 1.946 4.92"
                        opacity="0.997"
                      />
                      <path
                        fill="#448aff"
                        d="M12.685 13.29a26 26 0 0 0-2.202-1.74q1.15-.812 1.396-2.228H8.122V6.713q3.25-.027 6.497.055q.616 3.345-1.423 6.032a7 7 0 0 1-.51.49"
                        opacity="0.999"
                      />
                      <path
                        fill="#43a047"
                        d="M4.255 9.322q1.23 3.057 4.51 2.854a3.94 3.94 0 0 0 1.718-.626q1.148.812 2.202 1.74a6.62 6.62 0 0 1-4.027 1.684a6.4 6.4 0 0 1-1.02 0Q3.82 14.524 2 11.116z"
                        opacity="0.993"
                      />
                    </g>
                  </svg>
                }
                title="Login with Google"
                titleColor="black"
                variant="secondary"
              />
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
