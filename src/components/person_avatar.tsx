import defaultAvatar from "../assets/svg/default_avatar.svg";

interface PersonAvatarProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  img: string;
}
const PersonAvatar: React.FC<PersonAvatarProps> = ({ img, ...rest }) => {
  return (
    <div className="rounded-full overflow-hidden">
      <img src={img === "" ? defaultAvatar : img} alt="" {...rest} />
    </div>
  );
};

export default PersonAvatar;
