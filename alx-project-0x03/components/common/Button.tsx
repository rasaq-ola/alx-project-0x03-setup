import type { ButtonProps } from "@/interface";

type ButtonColor = "red" | "blue" | "orange" | "green";

const Button = ({
  buttonLabel,
  buttonSize,
  buttonBackgroundColor,
  action,
}: ButtonProps & { buttonBackgroundColor?: ButtonColor }) => {
  const backgroundColorClass = buttonBackgroundColor
    ? {
        red: "bg-red-500",
        blue: "bg-blue-500",
        orange: "bg-orange-500",
        green: "bg-green-500",
      }[buttonBackgroundColor as ButtonColor]
    : "bg-slate-500";

  return (
    <button
      onClick={action}
      className={`${backgroundColorClass} ${buttonSize} px-6 py-2 text-sm font-semibold rounded-lg hover:${backgroundColorClass}/50 transition duration-300 text-white`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
