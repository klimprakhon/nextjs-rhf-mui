import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { NumberInputBase } from "./numberInputBase";

interface NumberInputProps<T extends FieldValues> {
  id: string;
  name: Path<T>;
  control: Control<T>;
  label?: string;
  decimals?: number;
  required?: boolean;
  disabled?: boolean;
  rules?: RegisterOptions<T, Path<T>>;
}

export const NumberInput = <T extends FieldValues>({
  id,
  name,
  control,
  label,
  decimals,
  required = false,
  disabled = false,
  rules,
}: NumberInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <NumberInputBase
          id={id}
          label={label}
          value={field.value}
          onChange={field.onChange}
          decimals={decimals ?? 2}
          error={!!fieldState.error}
          errorText={fieldState.error?.message}
          required={required}
          disabled={disabled}
        />
      )}
    />
  );
};
