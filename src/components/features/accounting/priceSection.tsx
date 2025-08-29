import { PriceFormValues } from "@/app/accounting/page";
import { Accordion } from "@/components/ui/accordion";
import { NumberInput } from "@/components/ui/input";
import { Control } from "react-hook-form";

interface PriceSectionProps {
  control: Control<PriceFormValues>;
}

export const PriceSection = ({ control }: PriceSectionProps) => {
  return (
    <Accordion title="Big section">
      <div>
        <NumberInput
          id="price-number-input-with-react-hook-form"
          name="price"
          control={control}
          label="Price"
          decimals={2}
          rules={{ required: "Price is required" }}
        />
      </div>
    </Accordion>
  );
};
