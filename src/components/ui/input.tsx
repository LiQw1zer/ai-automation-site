import * as React from "react";
import { cn } from "@/lib/utils";

const baseClasses =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-brand focus:ring-2 focus:ring-brand/30";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(baseClasses, className)} {...props} />
));
Input.displayName = "Input";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(baseClasses, "resize-none", className)}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Input, Textarea };
