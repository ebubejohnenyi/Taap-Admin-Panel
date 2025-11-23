type props = {
  label: string;
  value: string;
};
const DetailContent: React.FC<props> = ({ label, value }) => {
  return (
    <div>
      <p className="text-sm">{label}</p>
      <p className="bg-[#F5F5F5] px-5 py-3.5 rounded-sm text-gray-400">
        {value}
      </p>
    </div>
  );
};

export default DetailContent;
