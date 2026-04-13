"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Lightbulb, AlertTriangle, MessageSquare } from "lucide-react";
import { severityColor, type Risk } from "@/lib/data";

interface ClauseModalProps {
  risk: Risk | null;
  onClose: () => void;
}

export default function ClauseModal({ risk, onClose }: ClauseModalProps) {
  return (
    <AnimatePresence>
      {risk && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-x-4 top-[5%] bottom-[5%] sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2
              sm:max-w-2xl sm:w-full z-50 flex flex-col"
          >
            <div className="bg-white rounded-2xl shadow-2xl flex flex-col max-h-full overflow-hidden">
              {/* Header */}
              <div className="flex items-start justify-between p-6 border-b border-gray-100">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${severityColor(risk.severity).badge}`}
                    >
                      {risk.severity.toUpperCase()} RISK
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {risk.title}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors -mt-1 -mr-1"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Original clause */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <h3 className="text-sm font-semibold text-gray-900">
                      Original Clause
                    </h3>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <p className="text-sm text-gray-600 leading-relaxed italic font-mono">
                      {risk.originalClause}
                    </p>
                  </div>
                </div>

                {/* Plain English */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <h3 className="text-sm font-semibold text-gray-900">
                      In Plain English
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {risk.plainEnglish}
                  </p>
                </div>

                {/* Why it matters */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle
                      className={`w-4 h-4 ${severityColor(risk.severity).text}`}
                    />
                    <h3 className="text-sm font-semibold text-gray-900">
                      Why It Matters
                    </h3>
                  </div>
                  <div
                    className={`rounded-xl p-4 border ${severityColor(risk.severity).border} ${severityColor(risk.severity).bg}`}
                  >
                    <p
                      className={`text-sm leading-relaxed ${severityColor(risk.severity).text}`}
                    >
                      {risk.whyItMatters}
                    </p>
                  </div>
                </div>

                {/* Negotiation angle */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="w-4 h-4 text-blue-500" />
                    <h3 className="text-sm font-semibold text-gray-900">
                      Suggested Negotiation Angle
                    </h3>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <p className="text-sm text-blue-800 leading-relaxed">
                      {risk.negotiationAngle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
