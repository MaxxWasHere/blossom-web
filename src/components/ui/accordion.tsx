"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function AccordionItem({
  question,
  children,
  defaultOpen,
}: {
  question: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="blsm-accordion-item" data-state={open ? "open" : "closed"}>
      <button
        type="button"
        className="blsm-accordion-trigger"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{question}</span>
        <ChevronDown size={18} className={cn("blsm-accordion-chevron")} />
      </button>
      {open && (
        <div className="blsm-accordion-content" data-state="open">
          {children}
        </div>
      )}
    </div>
  );
}
