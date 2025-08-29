"use client";

import { TextField, TextFieldProps } from "@mui/material";
import { useMemo, useState } from "react";

interface NumberInputBaseProps
  extends Omit<TextFieldProps, "value" | "onChange"> {
  id: string;
  value?: number | null;
  onChange: (value: number | null) => void;
  placeholder?: string;
  label?: string;
  decimals?: number;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
}

export const NumberInputBase = ({
  id,
  value,
  placeholder,
  label,
  decimals = 2,
  required = false,
  disabled = false,
  error,
  errorText,
  onChange,
  ...rest
}: NumberInputBaseProps) => {
  // format only on blur
  const formatNumericValue = (num: number) => {
    if (num === null) return "";
    const factor = Math.pow(10, decimals);
    const rounded = Math.round(num * factor) / factor;

    return rounded.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };
  // internal display state (string) for formatting
  const [displayValue, setDisplayValue] = useState<string>(() =>
    value ? formatNumericValue(value) : ""
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setDisplayValue(raw);

    const num = parseFloat(raw.replace(/,/g, ""));
    onChange(isNaN(num) ? null : num);
  };

  // Handle blur (format nicely)
  const handleBlur = () => {
    if (value == null) return;
    const formatted = formatNumericValue(value);
    setDisplayValue(formatted);

    const factor = Math.pow(10, decimals);
    const roundedNumber = Math.round(value * factor) / factor;
    onChange(roundedNumber);
  };

  const helperText = useMemo(() => {
    return (
      <span id={`${id}-error-text`} className="text-red-500 text-[10px]">
        {errorText}
      </span>
    );
  }, [id, errorText]);

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <div className="text-[14px]">
          {required && <span className="text-red-500 mr-1">*</span>}
          {label}
        </div>
      )}
      <TextField
        {...rest}
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-input": {
            backgroundColor: required ? "#E1F5FE" : disabled ? "#F5F5F5" : "",
            borderRadius: "4px",
            border: error ? "1px solid red" : "",
            textAlign: "right",
          },
        }}
        value={displayValue}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        helperText={helperText}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};
