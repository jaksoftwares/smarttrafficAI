import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
      ghost: "text-gray-600 hover:bg-gray-100",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded-md transition-all duration-300",
          variants[variant],
          className ?? "" // Ensure className is always a string
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
