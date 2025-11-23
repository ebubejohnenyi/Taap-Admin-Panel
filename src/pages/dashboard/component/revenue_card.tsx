import type { ReactNode } from "react";

interface RevenueProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  label: string;
  icon?: ReactNode;
  footer?: ReactNode;
  value: number | string;
  track_inventory?: ReactNode;
}
const RevenueCard: React.FC<RevenueProps> = ({
  label,
  value: amount,
  icon,
  footer,
  track_inventory,
  ...rest
}) => {
  return (
    <div {...rest}>
      <div className="w-full rounded-lg px-3 py-4 mb-1 h-fit border border-gray-400/20 flex items-center justify-between">
        <div>
          <p className="text-gray-400">{label}</p>
          <p className="font-bold text-lg">
            {typeof amount === "number"
              ? `₦${amount.toLocaleString()}`
              : `${Number(amount).toLocaleString()} / L`}
          </p>
        </div>
        {icon ? icon : null}
      </div>
      {track_inventory ? <div className="mt-2">{track_inventory}</div> : null}
      {footer}
    </div>
  );
};

export default RevenueCard;
