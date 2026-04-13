"use client";

import { motion } from "framer-motion";
import { economics, dealOverview } from "@/lib/data";
import { TrendingUp, Info } from "lucide-react";

export default function Economics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15 }}
    >
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-gray-700" />
            <h3 className="text-lg font-semibold text-gray-900">
              Deal Economics
            </h3>
          </div>

          {/* Breakdown table */}
          <div className="space-y-0 divide-y divide-gray-100">
            {economics.map((line, i) => (
              <motion.div
                key={line.label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.06 }}
                className={`flex items-center justify-between py-3.5 ${
                  line.highlight ? "font-semibold" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`text-sm ${line.highlight ? "text-gray-900" : "text-gray-600"}`}
                  >
                    {line.label}
                  </span>
                  {line.note && (
                    <span className="text-xs text-gray-400 hidden sm:inline">
                      ({line.note})
                    </span>
                  )}
                </div>
                <span
                  className={`text-sm tabular-nums ${
                    line.highlight ? "text-gray-900" : "text-gray-700"
                  }`}
                >
                  {line.amount}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Visual bar */}
          <div className="mt-6 mb-2">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>Value breakdown</span>
              <span>{dealOverview.headlinePrice} total</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden flex">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="bg-emerald-500 rounded-l-full"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "5%" }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="bg-amber-400"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "25%" }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                className="bg-red-300 rounded-r-full"
              />
            </div>
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Cash at close
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Escrow
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-300" />
                Deferred
              </span>
            </div>
          </div>
        </div>

        {/* Bottom insight */}
        <div className="px-6 sm:px-8 py-3.5 bg-blue-50 border-t border-blue-100 flex items-start gap-2">
          <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Risk-adjusted view:</span> Only 75%
            of the headline value is guaranteed upfront cash. The remaining 25%
            carries varying degrees of repayment and timing risk.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
