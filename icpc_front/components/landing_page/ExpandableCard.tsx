"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

interface ExpandableCardProps {
  icon: React.ReactNode;
  iconBg?: string;
  title: string;
  desc: string;
}

export default function ExpandableCard({ icon, iconBg = "bg-paper", title, desc }: ExpandableCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      className="flex flex-col items-center text-center gap-3 p-5 sm:p-6 rounded-xl bg-white shadow-sm ring-1 shadow-black/5 ring-black/10 hover:shadow-md transition-shadow h-full w-full"
    >
      <div className={`w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center shrink-0 ring-1 ring-black/5`}>
        {icon}
      </div>

      <span className="flex items-center gap-1.5">
        <span className="text-sm font-bold text-gray-900 leading-snug">{title}</span>
        <Plus
          className={`size-3.5 text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        />
      </span>

      <div
        className="grid w-full transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
        </div>
      </div>
    </button>
  );
}
