import ContainerWrapper from "../../components/container_wrapper";
import NotificationContent from "./component/notification_content";

const Notification = () => {
  return (
    <ContainerWrapper>
      <NotificationContent
        name="Reconciliation Generated"
        message="Dear Customer, your plan would expire soon. Kindly reached out to
            our customer success team to renew."
      />
      <NotificationContent
        name="Wallet Withdrawal"
        message="Dear Customer, your plan would expire soon. Kindly reached out to
            our customer success team to renew."
      />
      <NotificationContent
        name="Report"
        message="Dear Customer, your plan would expire soon. Kindly reached out to
            our customer success team to renew."
      />
    </ContainerWrapper>
  );
};

export default Notification;
