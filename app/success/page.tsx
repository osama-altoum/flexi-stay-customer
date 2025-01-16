"use client";

// import properteis from "@/data/properteis.json";
import { useParams, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { generateFireworks } from "./Firework";
import { useEffect } from "react";

export default function ReservationSuccessPage() {
  const { id } = useParams();
  const router = useRouter();

  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  useEffect(() => {
    setTimeout(() => {
      generateFireworks();
    }, 400);

    router.push("/");
  }, [router]);

  return (
    <div
      className={`min-h-screen pt-16  ${
        isDarkMode
          ? "bg-[#121212] bg-[url('/assets/images/bg-skyward.png')]"
          : "bg-[#fbf7f6] bg-[url('/assets/images/bg-skyward-1.png')]"
      }`}
    >
      <div className="mx-auto my-30 xl:w-[500px] xl:h-[500px] lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] xs:w-[200px] xs:h-[200px]">
        <img
          src="/assets/images/success.svg"
          alt=""
          className="w-full h-full"
        />
        <h2 className="text-[25px] text-[#5046e4] font-bold text-center">
          Reservation Successfully
        </h2>
      </div>
    </div>
  );
}
