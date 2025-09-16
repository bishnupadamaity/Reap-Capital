import React from "react";

interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  className = "w-full h-[3px] bg-white/10",
}) => {
  return <div className={className}></div>;
};
