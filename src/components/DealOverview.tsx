"use client";

import { motion } from "framer-motion";
import { dealOverview } from "@/lib/data";
import {
  DollarSign,
  Clock,
  Lock,
  Banknote,
  ShieldCheck,
} from "lucide-react";

function QualityGauge({ score }: { score: number }) {
  const percentage = (score / 10) * 100;
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (percentage / 100) * circumference;
  const color =
    score >= 7 ? "#10b981" : score >= 5 ? "#f59e0b" : "#ef4444";

  return (
    <div className="relative w-24 h-24">
      <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#f3f4f6"
          strokeWidth="8"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-bold text-gray-900">{score}</span>
        <span className="text-[10px] text-gray-400 -mt-0.5">/10</span>
      </div>
    </div>
  );
}

const statItems = [
  {
    icon: DollarSign,
    label: "Headline Price",
    value: dealOverview.headlinePrice,
  },
  {
    icon: Banknote,
    label: "Cash at Closing",
    value: dealOverview.cashUpfront,
  },
  {
    icon: Clock,
    label: "Deferred",
    value: dealOverview.deferred,
  },
  {
    icon: ShieldCheck,
    label: "Escrow",
    value: dealOverview.escrow,
  },
  {
    icon: Lock,
    label: "Exclusivity",
    value: dealOverview.exclusivity,
  },
];

export default function DealOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            {/* Left: deal info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">
                  {dealOverview.dealType}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-3">
                {dealOverview.headlinePrice}{" "}
                <span className="text-base font-normal text-gray-400">
                  total consideration
                </span>
              </h2>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {statItems.slice(1).map((item) => (
                  <div key={item.label} className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      <item.icon className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: deal quality gauge */}
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <QualityGauge score={dealOverview.dealQuality} />
              <span className="text-xs font-medium text-gray-500 mt-1">
                Deal Quality
              </span>
            </div>
          </div>
        </div>

        {/* Bottom insight bar */}
        <div className="px-6 sm:px-8 py-3.5 bg-amber-50 border-t border-amber-100">
          <p className="text-sm text-amber-800">
            <span className="font-semibold">Key insight:</span> Only 70% of the
            headline value ($8.4M) is guaranteed at closing. The remaining 30%
            is subject to deferred payments and escrow conditions.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
