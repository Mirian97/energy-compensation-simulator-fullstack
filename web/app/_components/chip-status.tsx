import { ComponentProps, FC } from "react";
import { cn } from "../_lib/utils";

type ChipStatus = ComponentProps<"span">;

export const ChipStatus: FC<ChipStatus> = ({ children, className }) => {
  return (
    <p
      className={cn(
        "w-fit whitespace-nowrap rounded-full border border-yellow-500 bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-600",
        className,
      )}
    >
      {children}
    </p>
  );
};
