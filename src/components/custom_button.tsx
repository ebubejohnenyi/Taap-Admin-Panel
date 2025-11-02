type props = {
  title: string;
  titleColor?: string;
  icon?: any;
  variant?: string;
  isLoading?: boolean;
};
const CustomButton: React.FC<props> = ({
  icon,
  title,
  titleColor,
  variant,
  isLoading,
}) => {
  return (
    <button
      style={{
        color: titleColor ?? "black",
        backgroundColor:
          variant === "primary"
            ? "#81B622"
            : variant === "secondary"
            ? "#f5f5f5"
            : variant === "error"
            ? "#C11000"
            : "#000000",
      }}
      className={`py-1 px-3 rounded-sm cursor-pointer ${
        icon !== null ? "flex" : "block"
      } items-center ${icon != undefined ? "gap-2" : "gap-0"}`}
    >
      {icon}
      {title}
    </button>
  );
};

export default CustomButton;
