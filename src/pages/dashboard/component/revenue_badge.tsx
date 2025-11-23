interface RevenueBadgeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  icon: React.ReactNode;
}

const RevenueBadge: React.FC<RevenueBadgeProps> = ({ icon, ...rest}) => {
  return (
    <span
    {...rest}
      
    >
      {icon}
    </span>
  );
};

export default RevenueBadge;
