"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { negotiationTips, severityColor } from "@/lib/data";

export default function NegotiationTips() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <Zap className="w-5 h-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">
            Negotiation Guidance
          </h3>
        </div>

        <div className="space-y-3">
          {negotiationTips.map((tip, i) => {
            const colors = severityColor(tip.priority);
            return (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="flex items-start gap-3 group"
              >
                <div className="mt-1.5 flex-shrink-0">
                  <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                      {tip.text}
                    </p>
                    <ArrowRight className="w-3 h-3 text-gray-300 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${colors.badge}`}
                >
                  {tip.priority}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">Next step:</span>{" "}
            Share this analysis with your M&A advisor or attorney to refine your
            counter-proposal strategy.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
