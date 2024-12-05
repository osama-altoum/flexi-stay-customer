import { Phone } from "lucide-react";

export function FooterPhone() {
  return (
    <div className="flex items-center justify-end">
      <Phone className="h-5 w-5 text-gray-400 mr-2" />
      <span className="text-gray-400">Need help? Call us</span>
      <span className="text-yellow-400 ml-2 font-semibold">1-800-222-8888</span>
    </div>
  );
}
