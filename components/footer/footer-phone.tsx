import { Phone } from "lucide-react";

export function FooterPhone() {
  return (
    <div className="flex items-center justify-end">
      <Phone className="h-5 w-5 text-gray-800 dark:text-white mr-2" />
      <span className="text-gray-800 dark:text-white">Need help? Call us</span>
      <span className="text-[#363aed] ml-2 font-semibold">
        +971-555-555-555
      </span>
    </div>
  );
}
