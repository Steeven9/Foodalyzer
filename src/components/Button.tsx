"use client";

import { ReactNode } from "react";

interface ButtonProps {
  readonly children: ReactNode;
  readonly onClick?: () => void;
  readonly disabled?: boolean;
  readonly variant?: "primary" | "secondary" | "danger";
  readonly className?: string;
  readonly type?: "button" | "submit";
}

export function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  className = "",
  type = "button",
}: Readonly<ButtonProps>) {
  const baseClasses =
    "px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const variantClasses = {
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white",
    secondary: "bg-slate-600 hover:bg-slate-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
