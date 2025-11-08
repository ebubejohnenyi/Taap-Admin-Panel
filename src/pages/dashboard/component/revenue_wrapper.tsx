interface props {
  label: string;
  img: string;
  amount: number | string;
  statistics?: string;
}
const RevenueWrapper: React.FC<props> = ({
  label,
  amount,
  img,
  statistics,
}) => {
  return (
    <div className="bg-blue-50/25 w-full rounded-xl p-2 h-fit">
      <div className="flex items-center justify-between">
        <p className="text-gray-400">{label}</p>
        <img src={img} />
      </div>
      <p className="font-bold text-lg">
        {typeof amount === "number" ? `₦${amount.toLocaleString()}` : amount}
      </p>
      {statistics !== null ? (
        <p className="text-[12px] text-blue-800">{statistics}</p>
      ) : null}
    </div>
  );
};

export default RevenueWrapper;
