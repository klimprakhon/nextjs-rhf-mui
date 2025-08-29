import { PriceFormValues } from "@/app/accounting/page";
import { Accordion } from "@/components/ui/accordion";
import { NumberInput } from "@/components/ui/input";
import { Control } from "react-hook-form";

interface AmountSectionProps {
  control: Control<PriceFormValues>;
}

export const AmountSection = ({ control }: AmountSectionProps) => {
  return (
    <Accordion title="Big section">
      <div>
        <NumberInput
          id="amount-number-input-with-react-hook-form"
          name="amount"
          control={control}
          label="Amount"
          decimals={6}
          rules={{ required: "Amount is required" }}
        />
      </div>
    </Accordion>
  );
};
