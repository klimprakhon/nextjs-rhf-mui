"use client";

import {
  Accordion as AccordionMUI,
  AccordionDetails,
  AccordionProps as AccordionMUIProps,
  AccordionSummary,
} from "@mui/material";
import { ReactNode } from "react";
import { Control } from "react-hook-form";

interface AccordionProps<
  T extends Omit<AccordionMUIProps, "defaultedExpanded">
> {
  title: string;
  children: ReactNode;
  control?: Control<T>;
}

export const Accordion = <
  T extends Omit<AccordionMUIProps, "defaultedExpanded">
>({
  title,
  children,
}: AccordionProps<T>) => {
  return (
    <div>
      <AccordionMUI defaultExpanded>
        <AccordionSummary>
          <span className="font-bold">{title}</span>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </AccordionMUI>
    </div>
  );
};
