import { ReactElement, MouseEvent } from "react";

const colorVariants = {
    yellow: "bg-[#ffbf23] hover:bg-black hover:text-[#ffbf23] font-bold text-xl border border-black",
    red: "hover:bg-[#900603] text-white bg-red-600 font-bold text-xl border border-black",
    blue: "bg-[#1E90FF] text-white hover:bg-blue-600 font-bold text-xl border border-black",
    black_yellow: "bg-black text-white text-xl font-bold hover:bg-[#ffbf23] hover:text-black border border-black",
    black_green: "bg-black text-white text-xl font-bold hover:bg-[#cef261] hover:text-black border border-black"
}


const sizeVariants = {
  small: "px-2 py-2 text-xs rounded-sm",
  medium: "px-3 py-2 rounded-md",
  large: "px-6 py-3 text-xl rounded-lg",
};


const defaultButtonStyles = "cursor-pointer flex items-center justify-center space-x-2 transition-all duration-300 rounded-xl";

const disabledStyles = "opacity-50 cursor-not-allowed";

interface ButtonProps {
    colorVariant: "yellow" | "red" | "black_yellow" | "black_green" | "blue";
    sizeVariant: "small" | "medium" | "large";
    text: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    className?: string;
}

export const Button = ({
    colorVariant,
    sizeVariant,
    text,
    onClick,
    startIcon,
    endIcon,
    disabled = false,
    type = "button",
    className = ""
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={`
                ${defaultButtonStyles}
                ${colorVariants[colorVariant]}
                ${sizeVariants[sizeVariant]}
                ${disabled ? disabledStyles : ''}
                ${className}
            `}
            onClick={onClick}
            disabled={disabled}
        >
            {startIcon && (
                <div className="mr-1">
                    {startIcon}
                </div>
            )}
            {text}
            {endIcon && (
                <div className="ml-1">
                    {endIcon}
                </div>
            )}
        </button>
    );
};