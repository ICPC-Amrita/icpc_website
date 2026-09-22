"use client";

import { useEffect, useState } from "react";
import { Timer } from "lucide-react";
import { contestInfo } from "@/app/_constants/contestInfo";

function getTimeLeft(target: number) {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: diff <= 0,
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[3.25rem]">
      <span className="font-display text-2xl sm:text-3xl font-bold text-contest-blue tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[11px] sm:text-xs font-medium uppercase tracking-wide text-gray-500">
        {label}
      </span>
    </div>
  );
}

export default function RegistrationCountdown() {
  const target = new Date(contestInfo.registrationDeadlineISO).getTime();
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft(target));
    const interval = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  if (!timeLeft) return null;

  if (timeLeft.done) {
    return (
      <div className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700 font-semibold">
        <Timer className="size-5 shrink-0" strokeWidth={2.2} />
        Registration has closed
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 sm:gap-5 rounded-xl border border-contest-blue/20 bg-contest-blue/5 px-4 sm:px-5 py-3">
      <div className="flex items-center gap-2 text-contest-blue shrink-0">
        <Timer className="size-5 sm:size-6" strokeWidth={2.2} />
        <span className="text-sm sm:text-base font-semibold">Registration closes in</span>
      </div>
      <div className="flex items-center gap-3 sm:gap-4">
        <Unit value={timeLeft.days} label="Days" />
        <span className="text-xl font-bold text-gray-300">:</span>
        <Unit value={timeLeft.hours} label="Hrs" />
        <span className="text-xl font-bold text-gray-300">:</span>
        <Unit value={timeLeft.minutes} label="Min" />
        <span className="text-xl font-bold text-gray-300">:</span>
        <Unit value={timeLeft.seconds} label="Sec" />
      </div>
    </div>
  );
}
