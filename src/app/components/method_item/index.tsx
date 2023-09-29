import { IconType } from "react-icons";

interface MethodItemProps {
  icon: IconType;
  children: React.ReactNode;
}

export const MethodItem = ({ icon: Icon, children }: MethodItemProps) => {
  return (
    <div className="flex items-center gap-3">
      {Icon && (
        <Icon
          size={62}
          className="min-w-[62px] min-h-[62px] bg-primary text-white p-3 rounded-full"
        />
      )}
      <p className="text-secondary font-bold">{children}</p>
    </div>
  );
};
