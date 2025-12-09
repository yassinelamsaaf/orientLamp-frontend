import { cn } from "@/lib/utils";

export const Checkbox = ({ className, ...props }) => {
  return (
    <input
      type="checkbox"
      className={cn(
        "h-4 w-4 rounded border-gray-300 text-orientlamp-gold focus:ring-orientlamp-gold focus:ring-offset-2",
        className
      )}
      {...props}
    />
  );
};
