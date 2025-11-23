type props = {
  label: string;
  name: string;
};
const CardDetailContent: React.FC<props> = ({ label, name }) => {
  return (
    <>
      <p className="text-gray-400 text-[12px]">{label}</p>
      <p>{name}</p>
    </>
  );
};
export default CardDetailContent;
