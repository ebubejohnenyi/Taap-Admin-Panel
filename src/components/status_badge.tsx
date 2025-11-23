import type { ReactNode } from "react";

interface StatusBadgeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  icon: ReactNode;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ icon, ...rest }) => {
  return <span {...rest}>{icon}</span>;
};

export default StatusBadge;
