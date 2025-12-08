import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
};

const baseClasses =
  "inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-[#EE73DE] bg-[#EE73DE] text-white hover:bg-white hover:text-[#EE73DE] hover:shadow-md dark:border-[#B76BFC] dark:bg-[#B76BFC] dark:hover:bg-zinc-950 dark:hover:text-[#B76BFC]",
  secondary:
    "border-[#EE73DE]/20 bg-white text-zinc-900 hover:bg-[#EE73DE] hover:text-white hover:border-[#EE73DE] dark:border-[#B76BFC]/20 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-[#B76BFC] dark:hover:text-white dark:hover:border-[#B76BFC]",
  ghost:
    "border-transparent bg-transparent text-zinc-900 hover:bg-[#EE73DE]/5 dark:text-zinc-100 dark:hover:bg-[#B76BFC]/10",
};

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={cn(baseClasses, variantClasses[variant], className)}
    />
  );
}

