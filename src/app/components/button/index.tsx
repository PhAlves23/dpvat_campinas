import { IconType } from "react-icons";

interface ButtonProps {
  children: React.ReactNode;
  icon?: IconType;
}

export const Button = ({ children, icon: Icon }: ButtonProps) => {
  return (
    <button
      className={`w-full bg-orange-400 text-white py-2 px-6 rounded-full text-lg ${
        Icon ? "flex justify-center font-semibold items-center gap-5" : ""
      }`}
    >
      {children}
      {Icon && <Icon size={20} />}
    </button>
  );
};
