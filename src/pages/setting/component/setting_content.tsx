import CustomButton from "../../../components/custom_button";

type Props = {
  label: string;
  description: string;
  selectedOpeningTime: string;
  selectedClosingTime?: string;
  onEdit: () => void;
};

const SettingContent: React.FC<Props> = ({
  label,
  description,
  selectedOpeningTime,
  selectedClosingTime,
  onEdit,
}) => {
  // Helper to format times nicely
  const formatTimeDisplay = () => {
    if (!selectedOpeningTime && !selectedClosingTime) return "Select Time";

    if (selectedOpeningTime && selectedClosingTime) {
      return `${selectedOpeningTime} – ${selectedClosingTime}`;
    }

    // For reconciliation (only opening time)
    return selectedOpeningTime;
  };

  return (
    <div className="grid grid-cols-3 items-center gap-2.5 py-2">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>

      <p className="text-gray-600 text-sm">{formatTimeDisplay()}</p>

      <div className="w-[70px]">
        <CustomButton
          title="Edit"
          variant="primary"
          titleColor="white"
          onClick={onEdit}
        />
      </div>
    </div>
  );
};

export default SettingContent;
