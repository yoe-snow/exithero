"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Shield,
  LayoutDashboard,
  AlertTriangle,
  TrendingUp,
  Zap,
  ArrowLeft,
  FileText,
} from "lucide-react";
import DealOverview from "@/components/DealOverview";
import RiskCards from "@/components/RiskCards";
import Economics from "@/components/Economics";
import NegotiationTips from "@/components/NegotiationTips";
import ClauseModal from "@/components/ClauseModal";
import type { Risk } from "@/lib/data";

type Tab = "summary" | "risks" | "economics" | "negotiation";

const tabs: { id: Tab; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "summary", label: "Summary", icon: LayoutDashboard },
  { id: "risks", label: "Risks", icon: AlertTriangle },
  { id: "economics", label: "Economics", icon: TrendingUp },
  { id: "negotiation", label: "Negotiation", icon: Zap },
];

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("summary");
  const [selectedRisk, setSelectedRisk] = useState<Risk | null>(null);

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              ExitHero
            </span>
          </div>
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            New analysis
          </button>
        </div>
      </header>

      {/* Document info bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-2 text-sm text-gray-500">
          <FileText className="w-3.5 h-3.5" />
          <span>Series_A_Acquisition_LOI_Draft.pdf</span>
          <span className="mx-1">·</span>
          <span className="text-emerald-600 font-medium">Analysis complete</span>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-[65px] z-20">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex gap-1 -mb-px">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors
                    ${
                      isActive
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }
                  `}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-900 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content area */}
      <main className="flex-1 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-8">
          {activeTab === "summary" && (
            <div className="space-y-6">
              <DealOverview />
              <RiskCards onSelectRisk={setSelectedRisk} />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Economics />
                <NegotiationTips />
              </div>
            </div>
          )}

          {activeTab === "risks" && (
            <RiskCards onSelectRisk={setSelectedRisk} />
          )}

          {activeTab === "economics" && <Economics />}

          {activeTab === "negotiation" && <NegotiationTips />}
        </div>
      </main>

      {/* Clause drilldown modal */}
      <ClauseModal
        risk={selectedRisk}
        onClose={() => setSelectedRisk(null)}
      />
    </div>
  );
}
