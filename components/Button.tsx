import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant?:
    | "btn_yellow"
    | "btn_blue"
    | "btn_white"
    | "btn_dark_black_outline"
    | "btn_dark_white_outline";
  onClick?: () => void;
};

const Button = ({ type, title, icon, variant, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 border rounded-full ${variant} font-popins`}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
