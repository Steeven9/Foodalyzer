"use client";

interface SelectProps {
  readonly label?: string;
  readonly options: Array<{
    readonly value: string | number;
    readonly label: string;
  }>;
  readonly value: string | number;
  readonly onChange: (value: string | number) => void;
  readonly error?: string;
  readonly required?: boolean;
}

export function Select({
  label,
  options,
  value,
  onChange,
  error,
  required = false,
}: Readonly<SelectProps>) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-slate-300">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 ${
          error ? "border-red-500" : ""
        }`}
      >
        <option value="">Select an option</option>
        {options.map(({ value: optValue, label: optLabel }) => (
          <option key={optValue} value={optValue}>
            {optLabel}
          </option>
        ))}
      </select>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
