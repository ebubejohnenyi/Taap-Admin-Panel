import type { MenuProps } from "antd";
import { Badge, ConfigProvider, Layout, Menu } from "antd";
import Logo from "../assets/png/taap logo.png";
import NavigationHeader from "../components/header";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <NavLink
      to="/"
      end
      className={({ isActive }) => (isActive ? "active-tab" : "inactive-tab")}
    >
      <span className="menu-text">Dashboard</span>
    </NavLink>,
    "dashboard",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity={"50%"}>
        <rect
          width="18.5"
          height="18.5"
          x="2.75"
          y="2.75"
          strokeWidth="1.5"
          rx="6"
        />
        <path
          strokeLinecap="round"
          strokeWidth="1.6"
          d="M7.672 16.222v-5.099m4.451 5.099V7.778m4.205 8.444V9.82"
        />
      </g>
    </svg>
  ),
  getItem(
    <NavLink
      to="/reconciliation"
      className={({ isActive }) => (isActive ? "active-tab" : "inactive-tab")}
    >
      <span className="menu-text">Reconciliation</span>
    </NavLink>,
    "reconciliation",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      opacity={"50%"}
    >
      <path
        fill="currentColor"
        d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92c0 .9-.18 1.75-.5 2.54l2.62 1.53c.56-1.24.88-2.62.88-4.07c0-5.18-3.95-9.45-9-9.95M12 19a7 7 0 0 1-7-7c0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95a10 10 0 0 0 10 10c3.3 0 6.23-1.61 8.05-4.09l-2.6-1.53A6.89 6.89 0 0 1 12 19"
      />
    </svg>
  ),
  getItem(
    <NavLink
      to={"order"}
      className={({ isActive }) => (isActive ? "active-tab" : "inactive-tab")}
    >
      Order
    </NavLink>,
    "order",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity={"50%"}
        d="M8.557 2.75H4.682A1.93 1.93 0 0 0 2.75 4.682v3.875a1.94 1.94 0 0 0 1.932 1.942h3.875a1.94 1.94 0 0 0 1.942-1.942V4.682A1.94 1.94 0 0 0 8.557 2.75m10.761 0h-3.875a1.94 1.94 0 0 0-1.942 1.932v3.875a1.943 1.943 0 0 0 1.942 1.942h3.875a1.94 1.94 0 0 0 1.932-1.942V4.682a1.93 1.93 0 0 0-1.932-1.932m0 10.75h-3.875a1.94 1.94 0 0 0-1.942 1.933v3.875a1.94 1.94 0 0 0 1.942 1.942h3.875a1.94 1.94 0 0 0 1.932-1.942v-3.875a1.93 1.93 0 0 0-1.932-1.932M8.557 13.5H4.682a1.943 1.943 0 0 0-1.932 1.943v3.875a1.93 1.93 0 0 0 1.932 1.932h3.875a1.94 1.94 0 0 0 1.942-1.932v-3.875a1.94 1.94 0 0 0-1.942-1.942"
      />
    </svg>
  ),
  getItem(
    <NavLink
      to={"/wallet"}
      className={({ isActive }) => (isActive ? "active-tab" : "inactive-tab")}
    >
      <span className="menu-text">Wallet</span>
    </NavLink>,
    "wallet",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path
          fill="currentColor"
          opacity={"50%"}
          d="m12.702 2.195l7 2.625A2 2 0 0 1 21 6.693v5.363a9 9 0 0 1-4.975 8.05l-3.354 1.677a1.5 1.5 0 0 1-1.342 0l-3.354-1.677A9 9 0 0 1 3 12.056V6.693A2 2 0 0 1 4.298 4.82l7-2.625a2 2 0 0 1 1.404 0M12 4.068L5 6.693v5.363a7 7 0 0 0 3.87 6.26L12 19.883l3.13-1.565A7 7 0 0 0 19 12.056V6.693zM12 8a2 2 0 0 1 1.134 3.648l-.134.085V15a1 1 0 0 1-1.993.117L11 15v-3.267A2 2 0 0 1 12 8"
        />
      </g>
    </svg>
  ),
  getItem(
    <NavLink
      to={"/attendant"}
      className={({ isActive }) => (isActive ? "active-tab" : "inactive-tab")}
    >
      <span className="menu-text">Attendant</span>
    </NavLink>,
    "attendant",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        opacity={"50%"}
        d="M10 3.25C7.904 3.25 6.171 4.91 6.171 7S7.904 10.75 10 10.75c1.65 0 3.075-1.029 3.607-2.486a2.643 2.643 0 1 0 .057-2.358C13.184 4.36 11.714 3.25 10 3.25M7.671 7c0-1.224 1.024-2.25 2.329-2.25S12.329 5.776 12.329 7S11.305 9.25 10 9.25S7.671 8.224 7.671 7m6.686.143a1.643 1.643 0 1 1 3.286 0a1.643 1.643 0 0 1-3.286 0m-6.072 4.564c-.403-.261-.984-.462-1.596-.294q-.245.068-.488.145l-.984.316c-1.233.394-2.188 1.373-2.51 2.613l-.011.04l-.42 2.952c-.167 1.18.485 2.401 1.78 2.701c1.197.278 3.126.57 5.944.57s4.746-.292 5.945-.57c1.293-.3 1.946-1.52 1.779-2.701l-.42-2.951l-.01-.041c-.323-1.24-1.278-2.219-2.511-2.613l-.984-.316q-.243-.077-.488-.145c-.612-.168-1.193.033-1.596.294c-.37.24-.974.529-1.715.529c-.74 0-1.345-.29-1.715-.53m-1.198 1.152c.064-.017.202-.01.384.107c.512.332 1.4.77 2.529.77s2.017-.438 2.53-.77c.18-.117.319-.124.383-.107q.215.06.428.128l.985.315c.75.24 1.308.82 1.506 1.524l.406 2.864c.075.527-.206.93-.633 1.03c-1.077.25-2.891.53-5.605.53s-4.528-.28-5.605-.53c-.427-.1-.708-.503-.634-1.03l.407-2.864a2.26 2.26 0 0 1 1.506-1.524l.985-.315q.213-.068.428-.128"
      />
      <path
        fill="currentColor"
        opacity={"50%"}
        d="M18.183 10.298a1.05 1.05 0 0 0-.914.202c-.27.21-.748.5-1.269.5a.5.5 0 0 0 0 1c.858 0 1.556-.457 1.883-.71a.1.1 0 0 1 .043-.024h.004q.201.053.399.118l.685.225c.526.173.925.594 1.066 1.114l.283 2.049c.056.403-.156.705-.46.777q-.335.082-.813.16a.5.5 0 1 0 .16.988q.512-.085.884-.175c.895-.213 1.333-1.07 1.22-1.887l-.291-2.106l-.007-.027a2.62 2.62 0 0 0-1.73-1.843l-.685-.225a8 8 0 0 0-.458-.136"
      />
    </svg>
  ),
  getItem(
    <NavLink
      to={"/inventory"}
      className={({ isActive }) => (isActive ? "active-tab" : "inactive-tab")}
    >
      <span className="menu-text">Inventory</span>
    </NavLink>,
    "inventory",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        opacity={"50%"}
        d="M9.5 6.5a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2zM4.5 2A2.5 2.5 0 0 0 2 4.5v9A2.5 2.5 0 0 0 4.5 16h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 13.5 2zM3 4.5A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 13.5zM7.5 18a3.5 3.5 0 0 1-2.45-1h9.45a2.5 2.5 0 0 0 2.5-2.5V5.05c.619.632 1 1.496 1 2.45v7a3.5 3.5 0 0 1-3.5 3.5z"
      />
    </svg>
  ),
  getItem(
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <NavLink
        to={"/notification"}
        className={({ isActive }) => (isActive ? "active-tab" : "inactive-tab")}
      >
        <span className="menu-text">Notification</span>
      </NavLink>
      <Badge
        count={5}
        size="small"
        color="#3E8672"
        style={{
          borderRadius: "4px",
          minWidth: "15px",
          height: "15px",
          fontSize: "10px",
        }}
      />
    </div>,
    "notification",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        opacity={"50%"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 6H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3m-4-7a3 3 0 1 0 6 0a3 3 0 1 0-6 0"
      />
    </svg>
  ),
];

const bottomItems: MenuItem[] = [
  getItem(
    <NavLink
      to={"/setting"}
      className={({ isActive }) => (isActive ? "active-tab" : "inactive-tab")}
    >
      <span className="menu-text">Settings</span>
    </NavLink>,
    "setting",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        opacity={"50%"}
        d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454q-.557-.31-.947-.664l-2.668 1.135l-1.865-3.25l2.306-1.739q-.045-.27-.073-.558q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626L3.258 9.126l1.865-3.212L7.771 7.03q.448-.373.97-.673q.52-.3 1.013-.464L10.134 3h3.732l.361 2.912q.575.202 1.016.463t.909.654l2.725-1.115l1.865 3.211l-2.382 1.796q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.393-.94.673t-.985.445L13.866 21zM11 20h1.956l.369-2.708q.756-.2 1.36-.549q.606-.349 1.232-.956l2.495 1.063l.994-1.7l-2.189-1.644q.125-.427.166-.786q.04-.358.04-.72q0-.38-.04-.72t-.166-.747l2.227-1.683l-.994-1.7l-2.552 1.07q-.454-.499-1.193-.935q-.74-.435-1.4-.577L13 4h-1.994l-.312 2.689q-.756.161-1.39.52q-.633.358-1.26.985L5.55 7.15l-.994 1.7l2.169 1.62q-.125.336-.175.73t-.05.82q0 .38.05.755t.156.73l-2.15 1.645l.994 1.7l2.475-1.05q.589.594 1.222.953q.634.359 1.428.559zm.973-5.5q1.046 0 1.773-.727T14.473 12t-.727-1.773t-1.773-.727q-1.052 0-1.776.727T9.473 12t.724 1.773t1.776.727M12 12"
      />
    </svg>
  ),
  getItem(
    <span className="text-[#E53935] font-medium">Logout</span>,
    "logout",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="red"
        d="M11 13V4h1v9zm8-.5a7.5 7.5 0 0 1-7.5 7.5A7.5 7.5 0 0 1 4 12.5c0-2.71 1.44-5.09 3.6-6.4l.73.73A6.48 6.48 0 0 0 5 12.5a6.5 6.5 0 0 0 6.5 6.5a6.5 6.5 0 0 0 6.5-6.5c0-2.44-1.34-4.56-3.33-5.67l.73-.73a7.48 7.48 0 0 1 3.6 6.4"
      />
    </svg>
  ),
];

const RootPage: React.FC = () => {
  const location = useLocation();

  const selectedKey = location.pathname.split("/").pop() || "dashboard";

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemSelectedBg: "#f5f5f5",
            itemSelectedColor: "#00000",
          },
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible={false}
          collapsed={false}
          style={{
            backgroundColor: "#ffffff",
            borderRight: "1px solid #f0f0f0",
            position: "fixed",
            left: 0,
            top: 0,
            height: "100vh",
          }}
        >
          <img
            src={Logo}
            alt="logo"
            className="h-[100px] w-[100px] ml-7 object-cover"
          />
          <div className="lg:h-10/12 sm:h-10/12 xl:10/12 flex flex-col justify-between">
            <Menu
              theme="light"
              selectedKeys={[selectedKey]}
              mode="inline"
              items={items}
            />
            <Menu
              theme="light"
              mode="inline"
              selectable={true}
              selectedKeys={[selectedKey]}
              items={bottomItems}
            />
          </div>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <NavigationHeader />
          <Outlet />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default RootPage;
