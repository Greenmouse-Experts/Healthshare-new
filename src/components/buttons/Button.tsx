interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  to: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  children,
  onClick,
  type = "button",
  disabled = false,
}) => {
  // Combine default styles with any additional styles passed through className
  const baseStyles =
    "text-white rounded-[100px] grid place-content-center transition-colors";
  const disabledStyles = disabled
    ? "bg-gray-400 cursor-not-allowed"
    : "bg-[#00A24D] hover:bg-[#207549]";
  const combinedStyles = `${baseStyles} ${
    disabled ? disabledStyles : ""
  } ${className}`;

  return (
    <button
      type={type}
      className={combinedStyles}
      onClick={onClick}
      disabled={disabled}
    
    >
      {children}
    </button>
  );
};

export default Button;
