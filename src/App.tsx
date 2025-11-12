import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/root_page";
import Wallet from "./pages/wallet/wallet";
import Dashboard from "./pages/dashboard/dashboard";
import PreOrder from "./pages/order/pre-order";
import Order from "./pages/order/order";
import ValidatedOrder from "./pages/order/validated_order";
import CancelledOrder from "./pages/order/cancelled_order";
import CompletedOrder from "./pages/order/completed_order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "order/",
        element: <Order />,
        children: [
          { index: true, element: <PreOrder /> },
          { path: "pre-order", element: <PreOrder /> },
          { path: "validated-order", element: <ValidatedOrder /> },
          { path: "cancelled-order", element: <CancelledOrder /> },
          { path: "completed-order", element: <CompletedOrder /> },
        ],
      },
      { path: "wallet", element: <Wallet /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
