"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import Link from "next/link";

interface PlanPhase {
  number: number;
  title: string;
  status: "completed" | "in-progress" | "scheduled";
  description: string;
  technique: string;
  date: string;
  cost: string;
  image?: string;
}

interface SelectedToothInfo {
  number: number;
  name: string;
  condition: string;
  treatment: string;
  status: string;
  image?: string;
}

const TREATMENT_PHASES: PlanPhase[] = [
  {
    number: 1,
    title: "AI 3D Diagnostic & Jaw Mapping",
    status: "completed",
    description: "Multi-angle intraoral camera scanning and CBCT bone-density imaging to generate a 3D tooth structural replica.",
    technique: "CBCT 3D Bone profiling & Neural Enamel Analyzer",
    date: "Completed on May 05, 2026",
    cost: "£250 (Covered by Promo)",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    number: 2,
    title: "Laser-Guided Root Canal Prep",
    status: "completed",
    description: "Treatment of inflamed dental pulp in Molar #24. High-frequency laser sterilization ensuring 100% bacterial removal prior to sealing.",
    technique: "Micro-endodontics & High-frequency photic laser",
    date: "Completed on May 08, 2026",
    cost: "£750",
    image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800"
  },
  {
    number: 3,
    title: "AI Orthodontic Aligners (Stages 1-14)",
    status: "in-progress",
    description: "Slight custom aligner pressure application to eliminate canine crowding. Currently at Aligner Stage 5 of 14.",
    technique: "Predictive dynamic force sequencing & AI remote smartphone scanning",
    date: "Est. completion October 2026",
    cost: "£2,200",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800"
  },
  {
    number: 4,
    title: "Precision CAD/CAM Crown Placement",
    status: "scheduled",
    description: "Robotic placement of custom milled monolithic zirconia crown over Molar #24 to guarantee lifetime structural durability.",
    technique: "Chairside CAD/CAM zirconia milling & robotic guide installation",
    date: "Scheduled for October 2026",
    cost: "£600",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800"
  }
];

const HIGHLIGHTED_TEETH: Record<number, SelectedToothInfo> = {
  11: {
    number: 11,
    name: "Upper Right Central Incisor",
    condition: "Surface fluorosis & dietary yellowing",
    treatment: "Laser-Activated White Smile (Cosmetics)",
    status: "Completed baseline spectrophotometer shade matching.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800"
  },
  14: {
    number: 14,
    name: "Upper Left Canine",
    condition: "Rotated / Crowding",
    treatment: "AI Clear Aligners (Orthodontics)",
    status: "Currently shifting (Aligner Stage 5/14)",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800"
  },
  18: {
    number: 18,
    name: "Upper Left Second Molar",
    condition: "Slight crossbite & spacing gaps",
    treatment: "Predictive Force AI Braces (Orthodontics)",
    status: "Active dynamic tracking via smartphone weekly scans.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
  },
  24: {
    number: 24,
    name: "Lower Right First Molar",
    condition: "Deep pulpitis (nerve inflammation)",
    treatment: "Root Canal + Monolithic Zirconia Crown",
    status: "Root canal complete. Awaiting permanent CAD/CAM zirconia crown placement.",
    image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800"
  }
};

export default function TreatmentPlanPage() {
  const [currentStage, setCurrentStage] = useState<number>(5);
  const [selectedTooth, setSelectedTooth] = useState<SelectedToothInfo | null>(HIGHLIGHTED_TEETH[24]);
  const [activePhase, setActivePhase] = useState<number>(3);

  // Compute crowding representation based on slider stage (1 to 14)
  const getCrowdingMetric = () => {
    const shiftPercent = ((currentStage - 1) / 13) * 100;
    return shiftPercent.toFixed(0);
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      <main className="flex-grow pt-32 pb-section-gap px-container-padding max-w-7xl mx-auto w-full">
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest bg-primary-container/10 border border-primary-container/20 px-4 py-1.5 rounded-full inline-block">
            Patient Portal
          </span>
          <h1 className="text-display-lg font-display-lg text-on-surface">Interactive Treatment Plan</h1>
          <p className="text-body-lg text-on-surface-variant">
            Explore Case Study #48102. Click highlighted teeth in the diagnostic chart or adjust the aligner progression slider to witness dental transformations.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          
          {/* LEFT COLUMN: Interactive Dental Chart (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-outline-variant/30 shadow-md p-6 space-y-6">
            <div className="space-y-1">
              <h3 className="font-headline-md text-[18px] text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">analytics</span>
                Interactive Diagnostic Dental Map
              </h3>
              <p className="text-xs text-on-surface-variant">
                Click glowing highlighted teeth to view diagnostics and active clinical therapies.
              </p>
            </div>

            {/* Dental Arch SVG Layout */}
            <div className="bg-surface-container-low/60 rounded-2xl border border-outline-variant/20 p-8 flex flex-col items-center justify-center relative overflow-hidden">
              <span className="text-[10px] text-outline font-bold uppercase tracking-wider mb-4">Maxillary Arch (Upper Jaw)</span>
              
              {/* Upper Teeth Quadrant Grid */}
              <div className="grid grid-cols-8 gap-3 mb-6 w-full max-w-sm justify-items-center">
                {[11, 12, 13, 14, 15, 16, 17, 18].map((tNum) => {
                  const isHighlighted = HIGHLIGHTED_TEETH[tNum];
                  return (
                    <button
                      key={tNum}
                      onClick={() => isHighlighted && setSelectedTooth(isHighlighted)}
                      className={`w-9 h-9 rounded-lg font-bold text-[11px] flex flex-col items-center justify-center border transition-all ${
                        isHighlighted
                          ? selectedTooth?.number === tNum
                            ? "bg-secondary text-white border-secondary scale-110 shadow-lg animate-pulse"
                            : "bg-secondary-container/20 text-secondary border-secondary-container hover:bg-secondary hover:text-white"
                          : "bg-white text-on-surface-variant/40 border-outline-variant/20 cursor-default"
                      }`}
                    >
                      <span>T</span>
                      <span>{tNum}</span>
                    </button>
                  );
                })}
              </div>

              {/* Lower Teeth Quadrant Grid */}
              <div className="grid grid-cols-8 gap-3 w-full max-w-sm justify-items-center">
                {[21, 22, 23, 24, 25, 26, 27, 28].map((tNum) => {
                  const isHighlighted = HIGHLIGHTED_TEETH[tNum];
                  return (
                    <button
                      key={tNum}
                      onClick={() => isHighlighted && setSelectedTooth(isHighlighted)}
                      className={`w-9 h-9 rounded-lg font-bold text-[11px] flex flex-col items-center justify-center border transition-all ${
                        isHighlighted
                          ? selectedTooth?.number === tNum
                            ? "bg-primary text-white border-primary scale-110 shadow-lg animate-pulse"
                            : "bg-primary-container/20 text-primary border-primary-container hover:bg-primary hover:text-white"
                          : "bg-white text-on-surface-variant/40 border-outline-variant/20 cursor-default"
                      }`}
                    >
                      <span>T</span>
                      <span>{tNum}</span>
                    </button>
                  );
                })}
              </div>
              <span className="text-[10px] text-outline font-bold uppercase tracking-wider mt-4">Mandibular Arch (Lower Jaw)</span>
            </div>

            {/* Tooth Information Detail Panel */}
            <div className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant/30 space-y-3 min-h-[160px] flex flex-col justify-center">
              {selectedTooth ? (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-primary uppercase">Tooth Index T{selectedTooth.number}</span>
                    <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded-full">Active Case</span>
                  </div>
                  {selectedTooth.image && (
                    <div className="relative h-32 w-full rounded-xl overflow-hidden bg-surface-container border border-outline-variant/20 mb-2 shadow-inner">
                      <img src={selectedTooth.image} alt={selectedTooth.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <span className="absolute bottom-2 left-3 text-[10px] text-white font-bold tracking-wider uppercase bg-primary/80 px-2 py-0.5 rounded shadow-sm">Intraoral Diagnostic Scan</span>
                    </div>
                  )}
                  <h4 className="font-headline-md text-on-surface text-[16px] font-bold leading-tight">
                    {selectedTooth.name} ({selectedTooth.condition})
                  </h4>
                  <div className="space-y-1 text-xs">
                    <p className="text-on-surface-variant leading-relaxed">
                      <strong className="text-on-surface">Prescription:</strong> {selectedTooth.treatment}
                    </p>
                    <p className="text-on-surface-variant leading-relaxed">
                      <strong className="text-on-surface">Status:</strong> {selectedTooth.status}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4 space-y-2">
                  <span className="material-symbols-outlined text-outline text-3xl">info</span>
                  <p className="text-xs text-on-surface-variant">Click an active tooth block above to load full diagnostic summary.</p>
                </div>
              )}
            </div>
          </div>

          {/* MIDDLE COLUMN: Interactive Aligner Tracker & Timeline (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Aligner Stage Interactive Slider Card */}
            <div className="bg-white rounded-3xl border border-outline-variant/30 shadow-md p-6 space-y-6">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <h3 className="font-headline-md text-[18px] text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">align_items_stretch</span>
                    AI Aligner Alignment Projection
                  </h3>
                  <p className="text-xs text-on-surface-variant">
                    Slide to change orthodontic set stages and simulate tooth progression.
                  </p>
                </div>
                <span className="bg-secondary-container/20 text-secondary text-label-sm font-bold px-3 py-1 rounded-full">
                  Aligner Stage {currentStage} / 14
                </span>
              </div>

              {/* Progress Slider Track */}
              <div className="space-y-3">
                <input 
                  type="range" 
                  min="1" 
                  max="14" 
                  value={currentStage} 
                  onChange={(e) => setCurrentStage(parseInt(e.target.value))}
                  className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between text-[10px] text-outline font-bold uppercase">
                  <span>Stage 1 (Initial)</span>
                  <span>Stage 7 (Mid-point)</span>
                  <span>Stage 14 (Aesthetic Target)</span>
                </div>
              </div>

              {/* Graphical teeth alignment visualizer */}
              <div className="grid grid-cols-2 gap-4 items-center p-4 bg-surface-container-low/60 rounded-2xl border border-outline-variant/20">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block">AI Smart Alignment Rating</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-display-sm text-[36px] font-bold text-secondary">{getCrowdingMetric()}%</span>
                    <span className="text-xs text-on-surface-variant font-medium">teeth correction met</span>
                  </div>
                </div>

                <div className="border-l border-outline-variant/30 pl-4 space-y-2">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">Remonitoring Scanning</span>
                  <div className="flex items-center gap-2 text-xs text-on-surface">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                    <span className="font-bold">Next scan in 3 days</span>
                  </div>
                  <p className="text-[10px] text-on-surface-variant">Done comfortably at home via smartphone adapter scan.</p>
                </div>
              </div>
            </div>

            {/* Comprehensive Journey Phases Timeline */}
            <div className="bg-white rounded-3xl border border-outline-variant/30 shadow-md p-6 space-y-6">
              <h3 className="font-headline-md text-[18px] text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">schedule</span>
                Personalized Treatment Pathway
              </h3>

              <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant/30">
                {TREATMENT_PHASES.map((phase) => {
                  const isPhaseActive = activePhase === phase.number;
                  return (
                    <div 
                      key={phase.number} 
                      onClick={() => setActivePhase(phase.number)}
                      className={`flex gap-4 relative cursor-pointer group transition-all rounded-2xl p-3 ${
                        isPhaseActive 
                          ? "bg-primary-container/5 border border-primary-container/10 shadow-sm" 
                          : "hover:bg-surface-container-low/30 border border-transparent"
                      }`}
                    >
                      {/* Timeline status indicator */}
                      <div className="relative z-10 flex-shrink-0">
                        {phase.status === "completed" ? (
                          <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center border-4 border-white shadow-md">
                            <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                          </div>
                        ) : phase.status === "in-progress" ? (
                          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white shadow-md animate-pulse">
                            <span className="material-symbols-outlined text-[16px] font-bold">pending</span>
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant/40 flex items-center justify-center border-4 border-white shadow">
                            <span className="material-symbols-outlined text-[16px]">schedule</span>
                          </div>
                        )}
                      </div>

                      {/* Phase Content */}
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap justify-between items-baseline gap-2">
                          <h4 className="font-label-md font-bold text-on-surface group-hover:text-primary transition-colors flex items-center gap-2">
                            Phase {phase.number}: {phase.title}
                          </h4>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                            phase.status === "completed"
                              ? "bg-emerald-500/10 text-emerald-600"
                              : phase.status === "in-progress"
                                ? "bg-primary-container/10 text-primary"
                                : "bg-surface-container text-on-surface-variant"
                          }`}>
                            {phase.status}
                          </span>
                        </div>

                        {/* Expandable phase summary */}
                        <div className={`space-y-3 overflow-hidden transition-all duration-300 ${
                          isPhaseActive ? "max-h-[380px] opacity-100 mt-2" : "max-h-0 opacity-0"
                        }`}>
                          {phase.image && (
                            <div className="relative h-28 w-full rounded-xl overflow-hidden border border-outline-variant/20 shadow-inner">
                              <img src={phase.image} alt={phase.title} className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <span className="absolute bottom-2 left-3 text-[10px] text-white font-bold tracking-wider uppercase bg-secondary/80 px-2 py-0.5 rounded shadow-sm">Phase Clinical Scan</span>
                            </div>
                          )}
                          <p className="text-xs text-on-surface-variant/90 leading-relaxed">
                            {phase.description}
                          </p>
                          <div className="flex flex-wrap gap-4 text-[11px] text-on-surface bg-white/70 p-3 rounded-xl border border-outline-variant/20">
                            <div>
                              <strong className="text-primary block uppercase text-[9px] tracking-widest">Surgical Spec</strong>
                              {phase.technique}
                            </div>
                            <div className="border-l border-outline-variant/30 pl-4">
                              <strong className="text-primary block uppercase text-[9px] tracking-widest">Date</strong>
                              {phase.date}
                            </div>
                            <div className="border-l border-outline-variant/30 pl-4">
                              <strong className="text-primary block uppercase text-[9px] tracking-widest">Pricing</strong>
                              <span className="font-bold text-primary">{phase.cost}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Total Billing Transparency Summary */}
              <div className="pt-6 border-t border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h4 className="text-label-sm font-bold text-outline uppercase tracking-wider block">Completed & Prescribed Billing</h4>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-headline-lg font-bold text-primary">£3,550</span>
                    <span className="text-xs text-on-surface-variant">total estimated cost</span>
                  </div>
                  <p className="text-[10px] text-on-surface-variant">Includes all future diagnostics, scans, and permanent zirconia crown structures.</p>
                </div>
                <Link
                  href="/booking"
                  className="bg-primary text-on-primary hover:bg-primary-container text-center px-8 py-3.5 rounded-xl font-label-md text-label-md font-bold shadow-lg shadow-primary/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Schedule Review Appointment
                </Link>
            </div>
          </div>
        </div>
      </div>

        {/* Active Treatments Diagnostic Grid */}
        <div className="mt-12 bg-white rounded-3xl border border-outline-variant/30 shadow-md p-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary-container/10 border border-primary-container/20 px-3 py-1 rounded-full inline-block">
                Active Treatments Overview
              </span>
              <h3 className="font-display-md text-[24px] text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>biotech</span>
                Active Clinical Diagnostics & Scans
              </h3>
              <p className="text-sm text-on-surface-variant">
                Direct view of all four active clinical disciplines, their associated tooth positions, and current diagnostic scan photography.
              </p>
            </div>
            <Link 
              href="/booking"
              className="bg-secondary text-white hover:bg-secondary/90 px-6 py-3 rounded-full text-label-sm font-bold shadow-md transition-all flex items-center gap-1.5"
            >
              Consult Clinical Board
              <span className="material-symbols-outlined text-[16px]">clinical_notes</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Treatment 1: Laser Whitening */}
            <div className="bg-surface-container-low/60 rounded-2xl border border-outline-variant/20 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="relative h-44 overflow-hidden bg-surface-container">
                <img 
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800" 
                  alt="Laser Whitening Diagnostic Scan" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <span className="absolute top-3 left-3 bg-secondary text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Tooth T11
                </span>
                <span className="absolute bottom-3 left-4 text-xs font-bold text-white uppercase tracking-wider">
                  Laser Whitening
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h4 className="font-bold text-[14px] text-on-surface leading-snug">
                    Laser-Activated White Smile
                  </h4>
                  <p className="text-[12px] text-on-surface-variant leading-relaxed">
                    <strong>Condition:</strong> Surface fluorosis & dietary yellowing.
                  </p>
                  <p className="text-[12px] text-on-surface-variant leading-relaxed">
                    <strong>Methodology:</strong> Multi-wavelength photo-activation and potassium-buffer shield.
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/20 flex justify-between items-center text-[11px]">
                  <span className="text-emerald-600 bg-emerald-500/10 font-bold px-2 py-0.5 rounded">
                    Baseline Set
                  </span>
                  <span className="font-semibold text-primary">£350</span>
                </div>
              </div>
            </div>

            {/* Treatment 2: AI Aligners */}
            <div className="bg-surface-container-low/60 rounded-2xl border border-outline-variant/20 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="relative h-44 overflow-hidden bg-surface-container">
                <img 
                  src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800" 
                  alt="Clear Aligners Diagnostic Scan" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <span className="absolute top-3 left-3 bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Tooth T14
                </span>
                <span className="absolute bottom-3 left-4 text-xs font-bold text-white uppercase tracking-wider">
                  Clear Aligners
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h4 className="font-bold text-[14px] text-on-surface leading-snug">
                    AI-Guided Clear Aligners
                  </h4>
                  <p className="text-[12px] text-on-surface-variant leading-relaxed">
                    <strong>Condition:</strong> Rotated Upper Left Canine & crowding.
                  </p>
                  <p className="text-[12px] text-on-surface-variant leading-relaxed">
                    <strong>Methodology:</strong> 3D transparent polymers and dynamic smart-lens scanning.
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/20 flex justify-between items-center text-[11px]">
                  <span className="text-primary bg-primary/10 font-bold px-2 py-0.5 rounded animate-pulse">
                    Stage 5 / 14
                  </span>
                  <span className="font-semibold text-primary">£2,200</span>
                </div>
              </div>
            </div>

            {/* Treatment 3: AI Braces */}
            <div className="bg-surface-container-low/60 rounded-2xl border border-outline-variant/20 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="relative h-44 overflow-hidden bg-surface-container">
                <img 
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800" 
                  alt="AI Braces Diagnostic Scan" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <span className="absolute top-3 left-3 bg-secondary text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Tooth T18
                </span>
                <span className="absolute bottom-3 left-4 text-xs font-bold text-white uppercase tracking-wider">
                  AI Braces
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h4 className="font-bold text-[14px] text-on-surface leading-snug">
                    Predictive Force Braces
                  </h4>
                  <p className="text-[12px] text-on-surface-variant leading-relaxed">
                    <strong>Condition:</strong> Slight crossbite & spacing gaps.
                  </p>
                  <p className="text-[12px] text-on-surface-variant leading-relaxed">
                    <strong>Methodology:</strong> Predictive force bracket calculations and shape memory alloy.
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/20 flex justify-between items-center text-[11px]">
                  <span className="text-secondary bg-secondary/10 font-bold px-2 py-0.5 rounded">
                    Active Tracking
                  </span>
                  <span className="font-semibold text-primary">£1,850</span>
                </div>
              </div>
            </div>

            {/* Treatment 4: Painless Root Canal */}
            <div className="bg-surface-container-low/60 rounded-2xl border border-outline-variant/20 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="relative h-44 overflow-hidden bg-surface-container">
                <img 
                  src="https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800" 
                  alt="Root Canal Diagnostic Scan" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <span className="absolute top-3 left-3 bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Tooth T24
                </span>
                <span className="absolute bottom-3 left-4 text-xs font-bold text-white uppercase tracking-wider">
                  Root Canal
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h4 className="font-bold text-[14px] text-on-surface leading-snug">
                    Painless Root Canal Therapy
                  </h4>
                  <p className="text-[12px] text-on-surface-variant leading-relaxed">
                    <strong>Condition:</strong> Deep pulpitis (nerve inflammation).
                  </p>
                  <p className="text-[12px] text-on-surface-variant leading-relaxed">
                    <strong>Methodology:</strong> Micro-CT mapping, cold-laser sterilization & zirconia crown.
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/20 flex justify-between items-center text-[11px]">
                  <span className="text-emerald-600 bg-emerald-500/10 font-bold px-2 py-0.5 rounded">
                    Canal Sealed
                  </span>
                  <span className="font-semibold text-primary">£750</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
