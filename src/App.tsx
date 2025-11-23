import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/root_page";
import Wallet from "./pages/wallet/wallet";
import Dashboard from "./pages/dashboard/dashboard";
import Order from "./pages/order/order";
import Attendant from "./pages/attendant/attendant";
import Notification from "./pages/notification/notification";
import Inventory from "./pages/inventory/inventory";
import AttendantDetail from "./pages/attendant/attendant_detail";
import Login from "./pages/onboarding/login";
import Reconciliation from "./pages/reconciliation/reconciliation";
import Setting from "./pages/setting/setting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    // element: <Login />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "reconciliation", element: <Reconciliation /> },
      {
        path: "order",
        element: <Order />,
      },
      { path: "wallet", element: <Wallet /> },
      { path: "attendant", element: <Attendant /> },
      { path: "attendant-detail", element: <AttendantDetail /> },
      { path: "inventory", element: <Inventory /> },
      { path: "notification", element: <Notification /> },
      { path: "setting", element: <Setting /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
