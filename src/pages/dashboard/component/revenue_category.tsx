type props = {
  logo: string;
  label: string;
  value: string;
};

const RevenueCategory: React.FC<props> = ({ logo, label, value }) => {
  return (
    <div className="flex items-center gap-1">
      <img src={logo} />
      <div>
        <p className="text-[12px] text-[#00000080]">{label}</p>
        <p className="font-bold">{value}</p>
      </div>
    </div>
  );
};

export default RevenueCategory;
