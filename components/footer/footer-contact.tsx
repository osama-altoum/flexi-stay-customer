import { MapPin, Clock, Mail } from "lucide-react";

export function FooterContact() {
  return (
    <div className="text-gray-400">
      <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 mt-1" />
          <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
        </div>
        <div className="flex items-center space-x-3">
          <Clock className="h-5 w-5" />
          <span>Hours: 8:00 - 17:00, Mon - Sat</span>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5" />
          <a
            href="mailto:support@travila.com"
            className="hover:text-white transition-colors"
          >
            support@travila.com
          </a>
        </div>
      </div>
    </div>
  );
}
