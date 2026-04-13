"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ChevronRight } from "lucide-react";
import { risks, severityColor, type Risk } from "@/lib/data";

interface RiskCardsProps {
  onSelectRisk: (risk: Risk) => void;
}

export default function RiskCards({ onSelectRisk }: RiskCardsProps) {
  const highCount = risks.filter((r) => r.severity === "high").length;
  const mediumCount = risks.filter((r) => r.severity === "medium").length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      {/* Risk summary bar */}
      <div className="flex items-center gap-4 mb-5">
        <div className="flex items-center gap-1.5">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <span className="text-sm font-semibold text-gray-900">
            {risks.length} risks identified
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            {highCount} high
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            {mediumCount} medium
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            {risks.length - highCount - mediumCount} low
          </span>
        </div>
      </div>

      {/* Risk cards */}
      <div className="space-y-3">
        {risks.map((risk, i) => {
          const colors = severityColor(risk.severity);
          return (
            <motion.button
              key={risk.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
              onClick={() => onSelectRisk(risk)}
              className={`w-full text-left rounded-xl border ${colors.border} ${colors.bg} p-5
                hover:shadow-md transition-all duration-200 group cursor-pointer`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${colors.badge}`}
                    >
                      {risk.severity.toUpperCase()}
                    </span>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {risk.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {risk.summary}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    <span className="font-medium">Why it matters:</span>{" "}
                    {risk.whyItMatters}
                  </p>
                </div>
                <ChevronRight
                  className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0
                  group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
