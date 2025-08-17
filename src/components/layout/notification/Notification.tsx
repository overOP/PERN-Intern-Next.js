import Image, { StaticImageData } from "next/image";

interface NotificationProps {
  icon?: string | StaticImageData;
  text?: string;
}

const Notification = ({ icon, text }: NotificationProps) => {
  if (!text) return null;

  return (
    <div className="flex items-center gap-2">
      {icon && (
        <Image
          src={icon}
          alt="notification icon"
          width={20}
          height={20}
          className="object-contain"
        />
      )}
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default Notification;
