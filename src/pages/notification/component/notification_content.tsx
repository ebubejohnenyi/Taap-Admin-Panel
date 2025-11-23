import { useState } from "react";

type props = {
  name: string;
  message: string;
};
const NotificationContent: React.FC<props> = ({ name, message }) => {
  const [seen, setSeen] = useState(false);

  const handleReadMessage = () => {
    setSeen((prev) => (prev = true));
  };

  return (
    <div
      className="border-b-gray-200 border-b pb-2.5 mb-2.5"
      onClick={handleReadMessage}
    >
      <div className={"flex items-center justify-between"}>
        <div className="lg:flex items-center gap-1">
          <p className="font-bold">{name}</p>
          <p>{message}</p>
        </div>
        {seen ? null : (
          <span className="px-2 py-1 bg-green-600/10 rounded-sm">
            <p className="text-[10px] text-green-600">New</p>
          </span>
        )}
      </div>
      <p className="text-gray-400 text-[12px]">5 min ago</p>
    </div>
  );
};
export default NotificationContent;
