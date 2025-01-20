"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { generateFireworks } from "../../components/firework/Firework";

const ReservationSuccessPage = () => {
  const { id } = useParams(); // "id" is not used in the current implementation
  const router = useRouter();
  const { theme } = useTheme();

  const isDarkMode = theme === "dark";

  useEffect(() => {
    const fireworkTimeout = setTimeout(() => {
      generateFireworks();
    }, 400);

    const redirectTimeout = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => {
      clearTimeout(fireworkTimeout);
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  const backgroundClass = isDarkMode
    ? "bg-[#121212] bg-[url('/assets/images/bg-skyward.png')]"
    : "bg-[#fbf7f6] bg-[url('/assets/images/bg-skyward-1.png')]";

  const containerSizeClasses =
    "xl:w-[500px] xl:h-[500px] lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] xs:w-[200px] xs:h-[200px]";

  return (
    <div className={`min-h-screen pt-16 ${backgroundClass}`}>
      <div className={`mx-auto my-30 ${containerSizeClasses}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/success.svg"
          alt="Success"
          className="w-full h-full"
        />
        <h2 className="text-[25px] text-[#5046e4] font-bold text-center">
          Reservation Successfully
        </h2>
      </div>
    </div>
  );
};

export default ReservationSuccessPage;
