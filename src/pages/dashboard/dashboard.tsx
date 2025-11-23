import ContainerWrapper from "../../components/container_wrapper";
import { Badge, Divider, Table, type TableProps } from "antd";
import RevenueCard from "./component/revenue_card";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import PumpAvatar from "./component/pump_avatar";

// register once
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
);

const data: DataType[] = [
  {
    code: "PR-7665",
    type: "GAS",
    quantity: "25/Liters",
    price: "100,000",
    date: "14th Oct, 2025",
    customer: "Ebere Chukwu",
    attendant: "Ebere Chukwu",
    status: "completed",
  },
  {
    code: "PR-7666",
    type: "GAS",
    quantity: "25/Liters",
    price: "100,000",
    date: "14th Oct, 2025",
    customer: "Sammy Okoro",
    attendant: "Sammy Okoro",
    status: "pending",
  },
  {
    code: "PR-7667",
    type: "GAS",
    quantity: "25/Liters",
    price: "100,000",
    date: "14th Oct, 2025",
    customer: "Linda Ikeji",
    attendant: "Linda Ikeji",
    status: "cancelled",
  },
  {
    code: "PR-7668",
    type: "GAS",
    quantity: "25/Liters",
    price: "100,000",
    date: "14th Oct, 2025",
    customer: "Ebere Chukwu",
    attendant: "Ebere Chukwu",
    status: "completed",
  },
  {
    code: "PR-7669",
    type: "GAS",
    quantity: "25/Liters",
    price: "100,000",
    date: "14th Oct, 2025",
    customer: "Sammy Okoro",
    attendant: "Sammy Okoro",
    status: "pending",
  },
  {
    code: "PR-76610",
    type: "GAS",
    quantity: "25/Liters",
    price: "100,000",
    date: "14th Oct, 2025",
    customer: "Linda Ikeji",
    attendant: "Linda Ikeji",
    status: "cancelled",
  },
];

interface DataType {
  code: string;
  type: string;
  quantity: string;
  price: string;
  date: string;
  customer: string;
  attendant: string;
  status: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "CODE",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "TYPE",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "QUANTITY",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "PRICE",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "CUSTOMER",
    dataIndex: "customer",
    key: "customer",
  },
  {
    title: "ATTENDANT",
    dataIndex: "attendant",
    key: "attendant",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    render: (status, record) => (
      <span
        className={`text-[10px] wrap-anywher ${
          record.status === "completed"
            ? "green"
            : record.status === "pending"
            ? "text-purple-600"
            : record.status === "cancelled"
            ? "text-[#c11000]"
            : null
        } capitalize flex items-center gap-1`}
      >
        <Badge
          color={` ${
            record.status === "completed"
              ? "green"
              : record.status === "pending"
              ? "purple"
              : record.status === "cancelled"
              ? "red"
              : null
          }`}
        />
        <p>{status}</p>
      </span>
    ),
  },
];

const Dashboard = () => {
  const pumpData = [
    { name: "Pump 1", value: 60 },
    { name: "Pump 2", value: 40 },
    { name: "Pump 3", value: 15 },
    { name: "Pump 4", value: 80 },
  ];

  const sortPumpData = pumpData.sort((a, b) => b.value - a.value);

  // Function to generate distinct colors
  const generateColors = (count: number) => {
    const colors: string[] = [];
    for (let i = 0; i < count; i++) {
      const hue = (i * 360) / count; // spread colors evenly
      colors.push(`hsl(${hue}, 70%, 60%)`); // HSL format
    }
    return colors;
  };

  const doughnutData = {
    datasets: [
      {
        label: "Pump",
        data: pumpData.map((pump) => pump.value),
        backgroundColor: generateColors(sortPumpData.length),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    cutout: "80%",
  } as const;

  const attendantData = [
    { name: "Kelvin", value: 60 },
    { name: "Chimezie", value: 40 },
    { name: "Bayo", value: 15 },
    { name: "Mercy", value: 80 },
    { name: "Mary", value: 10 },
  ];

  const sortAttendantData = attendantData.sort((a, b) => b.value - a.value);

  const barData = {
    labels: attendantData.map((attendant) => attendant.name),
    datasets: [
      {
        data: attendantData.map(
          (attendantPerformance) => attendantPerformance.value
        ),
        backgroundColor: attendantData.map(() => "#8979FF"),
        borderRadius: 100,
        borderWidth: 1,
        categoryPercentage: 0.6,
        barPercentage: 0.9,
        maxBarThickness: 40,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <ContainerWrapper>
      <div className="grid lg:grid-cols-4 gap-5 sm:grid-cols-1">
        <RevenueCard
          label="Total Sale"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              className="text-[#008000]"
            >
              <path
                fill="currentColor"
                d="M12 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2 12q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 2q.425 0 .713.288T13 3t-.288.713T12 4Q8.675 4 6.337 6.338T4 12t2.338 5.663T12 20t5.663-2.337T20 12q0-.425.288-.712T21 11t.713.288T22 12q0 2.05-.788 3.875t-2.15 3.188t-3.175 2.15T12 22"
              />
            </svg>
          }
          value={19250668709}
          footer={
            <div className="small-text pt-2.5">
              <div className="grid grid-cols-3 text-gray-400">
                <p>App</p>
                <p>POS</p>
                <p>Cash</p>
              </div>
              <div className="grid grid-cols-3">
                <p>₦{"205M"}</p>
                <p>₦{"345,590.70"}</p>
                <p>₦{"100,109.70"}</p>
              </div>
            </div>
          }
        />
        <RevenueCard
          label="Litres sold"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              className="text-[#8979FF]"
            >
              <path
                fill="currentColor"
                d="M12 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2 12q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 2q.425 0 .713.288T13 3t-.288.713T12 4Q8.675 4 6.337 6.338T4 12t2.338 5.663T12 20t5.663-2.337T20 12q0-.425.288-.712T21 11t.713.288T22 12q0 2.05-.788 3.875t-2.15 3.188t-3.175 2.15T12 22"
              />
            </svg>
          }
          value={"50000"}
          footer={
            <div className="small-text pt-2.5">
              <p className="text-gray-400 ">Remaining</p>
              <p>34,000 / L</p>
            </div>
          }
        />
        <RevenueCard
          label="Tank level"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              className="text-[#808080]"
            >
              <path
                fill="currentColor"
                d="M12 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2 12q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 2q.425 0 .713.288T13 3t-.288.713T12 4Q8.675 4 6.337 6.338T4 12t2.338 5.663T12 20t5.663-2.337T20 12q0-.425.288-.712T21 11t.713.288T22 12q0 2.05-.788 3.875t-2.15 3.188t-3.175 2.15T12 22"
              />
            </svg>
          }
          value={"82506"}
          footer={
            <div className="small-text pt-2.5">
              <div className="grid grid-cols-3">
                <p className="text-gray-400">OPENING</p>
                <p className="text-gray-400">DELIVERIES</p>
                <p className="text-red-300">MISSING</p>
              </div>
              <div className="grid grid-cols-3">
                <p>192,506 / L</p>
                <p>34,000 / L</p>
                <p className="text-red-300">34,000 / L</p>
              </div>
            </div>
          }
        />
        <RevenueCard
          label="Difference"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              className="text-[#C11000]"
            >
              <path
                fill="currentColor"
                d="M12 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2 12q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 2q.425 0 .713.288T13 3t-.288.713T12 4Q8.675 4 6.337 6.338T4 12t2.338 5.663T12 20t5.663-2.337T20 12q0-.425.288-.712T21 11t.713.288T22 12q0 2.05-.788 3.875t-2.15 3.188t-3.175 2.15T12 22"
              />
            </svg>
          }
          value={`-${"34000"}`}
          footer={
            <div className="small-text text-red-300 pt-2.5">
              <p>LEAKAGE VALUE</p>
              <p>{`-₦${"100,109.70"}`}</p>
            </div>
          }
        />
      </div>
      <div className="lg:flex items-start lg:justify-between sm:hidden mt-7">
        <div className="rounded-lg px-5 py-3 w-fit h-fit border border-gray-400/20 sm:mb-7">
          <p className="small-text text-gray-400">Pump Analysis</p>
          <div className="flex items-center gap-5">
            <div className="" style={{ width: 250, height: 230 }}>
              <Doughnut options={options} data={doughnutData} />
            </div>
            <div>
              <p className="text-gray-400 py-2">100% Reconciled</p>
              <div className="grid grid-row-4 gap-4overflow-scroll h-40">
                {sortPumpData.map((pump) => (
                  <PumpAvatar
                    avatarLabel={pump.name[0]}
                    label={pump.name}
                    percent={pump.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden lg:block">
          <p className="small-text text-gray-400 mb-1">Attendant Analysis</p>
          <div className="lg:flex items-center gap-5">
            <div
              style={{
                width: "530px",
                height: "fit-content",
                marginBottom: "5px",
              }}
            >
              <Bar data={barData} options={barOptions} />
            </div>

            <div className="flex lg:flex-col sm:flex-row justify-center gap-3 h-64 overflow-scroll">
              {sortAttendantData.map((attendant) => (
                <PumpAvatar
                  avatarLabel={attendant.name[0]}
                  label={attendant.name}
                  percent={attendant.value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-400/20 py-4 rounded-lg w-full h-fit mt-7">
        <p className="title-content pl-4">Latest Transaction</p>
        <Divider style={{ padding: 0, margin: "20px 0 0 0" }} />
        <div className="custom-table">
          <Table<DataType>
            columns={columns}
            dataSource={data}
            rowKey={"code"}
            scroll={{ x: "max-content" }}
          />
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default Dashboard;
