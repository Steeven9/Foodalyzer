"use client";

interface InputProps {
  readonly label?: string;
  readonly type?: string;
  readonly placeholder?: string;
  readonly value: string | number;
  readonly onChange: (value: string | number) => void;
  readonly error?: string;
  readonly required?: boolean;
  readonly className?: string;
}

export function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = "",
}: Readonly<InputProps>) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-slate-300">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          onChange(
            type === "number"
              ? Number.parseFloat(e.target.value) || 0
              : e.target.value
          )
        }
        className={`px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 ${
          error ? "border-red-500" : ""
        } ${className}`}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
