type props = {
  label: string;
  avatarLabel: string;
  percent: number;
};
const PumpAvatar: React.FC<props> = ({ avatarLabel, label, percent }) => {
  return (
    <div className="flex items-center gap-1">
      <span className="w-5 h-5 rounded-full bg-[#F5F5F5] text-[10px] flex justify-center items-center text-gray-400">
        {avatarLabel}
      </span>
      <div className="flex gap-1">
        <p className="whitespace-nowrap">{label}</p>
        <p className="text-gray-400">{percent}%</p>
      </div>
    </div>
  );
};

export default PumpAvatar;
