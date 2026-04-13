"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  FileText,
  Shield,
  TrendingUp,
  Zap,
  CheckCircle,
} from "lucide-react";

const ANALYSIS_STEPS = [
  "Reading document structure…",
  "Extracting financial terms…",
  "Identifying risk clauses…",
  "Analyzing deal economics…",
  "Generating negotiation insights…",
  "Preparing your report…",
];

export default function UploadPage() {
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleFile = useCallback(() => {
    setFile("Series_A_Acquisition_LOI_Draft.pdf");
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      handleFile();
    },
    [handleFile]
  );

  const startAnalysis = useCallback(() => {
    setAnalyzing(true);
    setCurrentStep(0);
    setCompletedSteps([]);

    ANALYSIS_STEPS.forEach((_, i) => {
      setTimeout(() => {
        setCurrentStep(i);
        if (i > 0) {
          setCompletedSteps((prev) => [...prev, i - 1]);
        }
      }, i * 600);
    });

    setTimeout(() => {
      setCompletedSteps((prev) => [...prev, ANALYSIS_STEPS.length - 1]);
    }, ANALYSIS_STEPS.length * 600);

    setTimeout(() => {
      router.push("/dashboard");
    }, ANALYSIS_STEPS.length * 600 + 800);
  }, [router]);

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            ExitHero
          </span>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            {!analyzing ? (
              <motion.div
                key="upload"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Heading */}
                <div className="text-center mb-10">
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
                    Understand Your LOI in Minutes
                  </h1>
                  <p className="text-lg text-gray-500 max-w-md mx-auto">
                    Upload your Letter of Intent and get clear, actionable
                    insights on risks, economics, and negotiation strategy.
                  </p>
                </div>

                {/* Upload area */}
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  onClick={handleFile}
                  className={`
                    relative rounded-2xl border-2 border-dashed p-12 text-center cursor-pointer
                    transition-all duration-200
                    ${
                      isDragging
                        ? "border-gray-900 bg-gray-50 scale-[1.02]"
                        : file
                          ? "border-emerald-300 bg-emerald-50"
                          : "border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50"
                    }
                  `}
                >
                  {file ? (
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {file}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF · Ready to analyze
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                        <Upload className="w-6 h-6 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Drop your LOI here, or{" "}
                          <span className="text-gray-900 underline underline-offset-2">
                            browse
                          </span>
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          PDF, DOCX, or TXT up to 10MB
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <button
                  onClick={startAnalysis}
                  disabled={!file}
                  className={`
                    mt-6 w-full py-3.5 px-6 rounded-xl text-sm font-semibold transition-all duration-200
                    ${
                      file
                        ? "bg-gray-900 text-white hover:bg-gray-800 active:scale-[0.98] shadow-sm"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }
                  `}
                >
                  Analyze LOI
                </button>

                {/* Features hint */}
                <div className="mt-12 grid grid-cols-3 gap-6">
                  {[
                    {
                      icon: Shield,
                      label: "Risk Analysis",
                      desc: "Spot hidden risks",
                    },
                    {
                      icon: TrendingUp,
                      label: "Deal Economics",
                      desc: "See the real numbers",
                    },
                    {
                      icon: Zap,
                      label: "Negotiation Tips",
                      desc: "Know what to push on",
                    },
                  ].map((f) => (
                    <div key={f.label} className="text-center">
                      <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <f.icon className="w-4 h-4 text-gray-500" />
                      </div>
                      <p className="text-xs font-medium text-gray-700">
                        {f.label}
                      </p>
                      <p className="text-xs text-gray-400">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                {/* Spinner */}
                <div className="relative w-20 h-20 mx-auto mb-8">
                  <div className="absolute inset-0 rounded-full border-2 border-gray-200" />
                  <div className="absolute inset-0 rounded-full border-2 border-gray-900 border-t-transparent animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-gray-700" />
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Analyzing Your LOI
                </h2>
                <p className="text-sm text-gray-500 mb-8">
                  Our AI is reviewing every clause and term
                </p>

                {/* Steps */}
                <div className="max-w-xs mx-auto text-left space-y-3">
                  {ANALYSIS_STEPS.map((step, i) => {
                    const isCompleted = completedSteps.includes(i);
                    const isCurrent = currentStep === i && !isCompleted;
                    return (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`flex items-center gap-3 text-sm transition-colors duration-300 ${
                          isCompleted
                            ? "text-emerald-600"
                            : isCurrent
                              ? "text-gray-900 font-medium"
                              : "text-gray-300"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        ) : isCurrent ? (
                          <div className="w-4 h-4 rounded-full border-2 border-gray-900 border-t-transparent animate-spin flex-shrink-0" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-gray-200 flex-shrink-0" />
                        )}
                        {step}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
