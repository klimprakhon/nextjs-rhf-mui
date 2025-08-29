"use client";

import { AmountSection } from "@/components/features/accounting/amountSection";
import { PriceSection } from "@/components/features/accounting/priceSection";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

export interface PriceFormValues {
  price: number | null;
  amount: number | null;
}

const Accounting = () => {
  const { control, handleSubmit } = useForm<PriceFormValues>({
    defaultValues: { price: null, amount: 1000 },
  });

  const onSubmit = (data: PriceFormValues) => {
    console.log("data", data);
  };

  return (
    <div className="px-32 pt-7">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <PriceSection control={control} />
        <AmountSection control={control} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Accounting;
