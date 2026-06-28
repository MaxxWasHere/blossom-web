import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  hover,
  ...props
}: HTMLAttributes<HTMLDivElement> & { hover?: boolean }) {
  return <div className={cn("blsm-card", hover && "blsm-card-hover", className)} {...props} />;
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("blsm-card-header", className)} {...props} />;
}

export function CardIcon({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("blsm-card-icon", className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("blsm-card-title", className)} {...props} />;
}

export function CardBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("blsm-card-body", className)} {...props} />;
}
