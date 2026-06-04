import React, { useState, useEffect } from 'react';

/**
 * 🇪🇺 EU AI Act Article 50 (Transparency) Compliant Banner Component
 * 
 * Under the EU AI Act (enforceable August 2, 2026), providers and deployers
 * of AI systems that interact directly with natural persons are legally 
 * required to disclose that the user is interacting with an AI system.
 * 
 * This component satisfies this disclosure requirement by showing a clean, 
 * non-intrusive banner to users. It uses local storage to ensure it only
 * displays once per user session to maintain a great UX.
 */
export default function ComplianceBanner({ 
  productName = "Our Assistant", 
  onAccept = () => {} 
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already acknowledged the AI interaction
    const hasAcknowledged = localStorage.getItem('eu_ai_disclosure_acknowledged');
    if (!hasAcknowledged) {
      setIsVisible(true);
    }
  }, []);

  const handleAcknowledge = () => {
    localStorage.setItem('eu_ai_disclosure_acknowledged', 'true');
    setIsVisible(false);
    onAccept();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm rounded-xl border border-gray-800 bg-black p-4 text-white shadow-2xl transition-all duration-300 ease-in-out hover:border-cyan-500/50">
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            AI Transparency Disclosure (EU AI Act)
          </p>
        </div>

        {/* Body Text */}
        <div className="text-xs text-gray-400 leading-relaxed">
          You are currently interacting with <strong className="text-white font-medium">{productName}</strong>, an AI-powered system designed to assist you. By continuing, you acknowledge that responses are generated automatically.
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-4 pt-1">
          <a 
            href="/privacy-policy#ai-data" 
            className="text-[11px] font-medium text-gray-500 underline transition-all hover:text-white"
          >
            How we use your data
          </a>
          <button
            onClick={handleAcknowledge}
            className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black transition-all hover:bg-gray-200"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
