import React from "react";

export function AmenityItem({ icon, value, label }: any) {
  return (
    <div className="flex  flex-col gap-1 items-center justify-center text-center">
      {React.cloneElement(icon, {
        className: "w-5 h-5 mb-1 text-gray-600 dark:text-gray-400",
      })}

      <div className="text-sm">
        <span className="font-semibold text-gray-900 dark:text-gray-100">
          {value}
        </span>{" "}
        <span className="text-gray-500">{label}</span>
      </div>
    </div>
  );
}
