"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";

interface CaseItem {
  id: string;
  title: string;
  category: "cosmetic" | "implants" | "orthodontics" | "endodontics";
  description: string;
  clinicalDetails: string;
  duration: string;
  doctor: string;
  imageBefore: string;
  imageAfter: string;
  tags: string[];
  beforeClass?: string;
}

interface TourItem {
  id: string;
  title: string;
  description: string;
  spec: string;
  image: string;
}

const CASES_DATA: CaseItem[] = [
  {
    id: "case-01",
    title: "Diastema Closure & Porcelain Veneers",
    category: "cosmetic",
    description: "Reconstruction of the aesthetic zone utilizing ultra-thin lithium disilicate porcelain veneers.",
    clinicalDetails: "Aesthetic improvement of upper six teeth using minimal prep veneer architecture to eliminate midline spacing.",
    duration: "2 visits",
    doctor: "Dr. Catherine Thorne, DDS",
    imageBefore: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&q=80&w=800",
    imageAfter: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    tags: ["Porcelain Veneers", "Smile Makeover", "Minimal Prep"],
    beforeClass: "grayscale brightness-90"
  },
  {
    id: "case-02",
    title: "AI-Guided In-Office Clear Aligners",
    category: "orthodontics",
    description: "Correction of severe mandibular crowding using smart-monitored bio-compatible aligners.",
    clinicalDetails: "16-stage orthodontic therapy tracking real-time tooth movement with specialized mobile-app scans.",
    duration: "6 months",
    doctor: "Dr. Marcus Vance, Orthodontist",
    imageBefore: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&q=80&w=800",
    imageAfter: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=800",
    tags: ["Clear Aligners", "Orthodontics", "Remote Monitoring"],
    beforeClass: "grayscale brightness-90"
  },
  {
    id: "case-03",
    title: "Computerized Shade Laser Whitening",
    category: "cosmetic",
    description: "Elimination of tetracycline and dietary stains using laser-activated medical-grade whitening.",
    clinicalDetails: "Multi-wavelength photo-activation cycle resulting in an 8-shade brightening on the VITA scale.",
    duration: "45 minutes",
    doctor: "Dr. Catherine Thorne, DDS",
    imageBefore: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    imageAfter: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    tags: ["Laser Whitening", "Laser Teeth Bleaching", "Cosmetic"],
    beforeClass: "grayscale-0 sepia-[65%] saturate-[160%] hue-rotate-[-10deg] brightness-[88%]"
  },
  {
    id: "case-04",
    title: "Guided Single-Tooth Implant Integration",
    category: "implants",
    description: "Precision replacement of a fractured upper bicuspid using dynamic 3D surgical navigation.",
    clinicalDetails: "Robotic site preparation and immediate load temporary crown placement with ideal bone engagement.",
    duration: "3 months (inc. integration)",
    doctor: "Dr. Aris Vance, Implant Specialist",
    imageBefore: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800",
    imageAfter: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    tags: ["Implantology", "3D Surgical Guide", "Zirconia Abutment"],
    beforeClass: "grayscale brightness-90"
  },
  {
    id: "case-05",
    title: "Micro-CT Mapped Painless Endodontics",
    category: "endodontics",
    description: "Treatment of deep pulpal inflammation in a molar utilizing high-magnification micro-CT.",
    clinicalDetails: "Removal of infected pulp, high-frequency disinfection, and perfect obturation using biocompatible sealers.",
    duration: "1 visit",
    doctor: "Dr. Liam Kincaid, Endodontist",
    imageBefore: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800",
    imageAfter: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=800",
    tags: ["Root Canal", "Endodontic Therapy", "Micro-CT"],
    beforeClass: "grayscale brightness-90"
  },
  {
    id: "case-06",
    title: "Full Arch Robotic Rehabilitation",
    category: "implants",
    description: "Complete upper arch replacement with an implant-supported screw-retained ceramic bridge.",
    clinicalDetails: "A computerized four-implant protocol (All-on-4) utilizing custom 3D diagnostic guides.",
    duration: "2 visits",
    doctor: "Dr. Aris Vance, Implant Specialist",
    imageBefore: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800",
    imageAfter: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    tags: ["All-On-4", "Fixed Prosthesis", "Implant Reconstruct"],
    beforeClass: "grayscale brightness-90"
  },
  {
    id: "case-07",
    title: "Predictive Force AI Braces",
    category: "orthodontics",
    description: "Orthodontic transformation using high-precision smart-bracket system and predictive force scheduling.",
    clinicalDetails: "Rapid teeth alignment correcting severe crowding. Computer-guided bracket placement monitored via smartphone scans.",
    duration: "9 months",
    doctor: "Dr. Marcus Vance, Orthodontist",
    imageBefore: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&q=80&w=800",
    imageAfter: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    tags: ["AI Braces", "Orthodontics", "Malocclusion"],
    beforeClass: "grayscale brightness-90"
  }
];

const TOUR_DATA: TourItem[] = [
  {
    id: "tour-01",
    title: "Interactive AI Diagnostic Suite",
    description: "Our core facility where patients undergo initial digital assessments. Equipped with dual screen medical-grade computing interfaces to review real-time jaw mappings.",
    spec: "AI-aided bone density profiling, neural symptom checkers.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "tour-02",
    title: "3D CAD/CAM Milling Lab",
    description: "Where immediate restorations take physical shape. Utilizing ultra-precise milling machinery that carves patient crowns, overlays, and abutments directly from monolithic zirconia.",
    spec: "Accuracy within 5 microns, chair-side custom glazing.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "tour-03",
    title: "Micro-Endodontic Treatment Hub",
    description: "Built strictly for root canal therapies and structural preservation. Features surgical dental microscopes and cold-laser sterilization instruments for unparalleled comfort.",
    spec: "30x magnification optics, automated fiber-optic clean.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  }
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"cases" | "tour">("cases");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);

  const filteredCases = activeFilter === "all"
    ? CASES_DATA
    : CASES_DATA.filter(c => c.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      <main className="flex-grow pt-32 pb-section-gap px-container-padding max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest bg-primary-container/10 border border-primary-container/20 px-4 py-1.5 rounded-full inline-block">
            Clinical Portfolio
          </span>
          <h1 className="text-display-lg font-display-lg text-on-surface">Clinical Gallery & Tour</h1>
          <p className="text-body-lg text-on-surface-variant">
            Explore verified patient transformations and our next-generation clinical environments powered by AI diagnostic intelligence.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-surface-container p-1.5 rounded-full flex gap-1 border border-outline-variant/30">
            <button
              onClick={() => { setActiveTab("cases"); setSelectedCase(null); }}
              className={`px-6 py-2.5 rounded-full font-label-md transition-all flex items-center gap-2 ${
                activeTab === "cases"
                  ? "bg-primary text-on-primary shadow-md"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">photo_library</span>
              Smile Transformations
            </button>
            <button
              onClick={() => { setActiveTab("tour"); setSelectedCase(null); }}
              className={`px-6 py-2.5 rounded-full font-label-md transition-all flex items-center gap-2 ${
                activeTab === "tour"
                  ? "bg-primary text-on-primary shadow-md"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">domain</span>
              Clinic Facility Tour
            </button>
          </div>
        </div>

        {activeTab === "cases" ? (
          <>
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {["all", "cosmetic", "implants", "orthodontics", "endodontics"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-label-md capitalize border transition-all ${
                    activeFilter === filter
                      ? "bg-primary border-primary text-on-primary shadow-sm"
                      : "bg-white/50 border-outline-variant/40 text-on-surface-variant hover:bg-white hover:text-primary"
                  }`}
                >
                  {filter === "all" ? "All Cases" : filter === "implants" ? "Implants" : filter === "orthodontics" ? "AI Aligners" : filter === "endodontics" ? "Root Canal" : filter}
                </button>
              ))}
            </div>

            {/* Cases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {filteredCases.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-outline-variant/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Image Showcase */}
                  <div className="relative h-[240px] overflow-hidden bg-surface-container flex">
                    {/* Before Image */}
                    <div className="w-1/2 relative border-r border-white/50">
                      <img 
                        src={item.imageBefore} 
                        alt={`${item.title} before`} 
                        className={`w-full h-full object-cover ${item.beforeClass || "grayscale brightness-90"} group-hover:scale-[1.03] transition-transform duration-500`}
                      />
                      <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md text-[10px] text-white px-2 py-0.5 rounded uppercase tracking-wider font-bold">
                        Initial
                      </span>
                    </div>
                    {/* After Image */}
                    <div className="w-1/2 relative">
                      <img 
                        src={item.imageAfter} 
                        alt={`${item.title} after`} 
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                      />
                      <span className="absolute bottom-2 right-2 bg-primary/95 backdrop-blur-md text-[10px] text-white px-2 py-0.5 rounded uppercase tracking-wider font-bold">
                        Restored
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-secondary bg-secondary-container/10 px-2.5 py-1 rounded">
                          {item.category === "orthodontics" ? "AI Orthodontics" : item.category === "endodontics" ? "Root Canal" : item.category}
                        </span>
                        <span className="text-label-sm text-on-surface-variant flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          {item.duration}
                        </span>
                      </div>
                      <h3 className="font-headline-md text-[20px] text-on-surface leading-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-body-md text-on-surface-variant/80 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                      <span className="text-label-sm text-outline font-medium italic">
                        {item.doctor}
                      </span>
                      <button
                        onClick={() => setSelectedCase(item)}
                        className="text-primary hover:text-on-primary hover:bg-primary border border-primary/20 hover:border-primary p-2 px-4 rounded-full text-label-sm font-semibold transition-all flex items-center gap-1"
                      >
                        Details
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Facility Tour Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {TOUR_DATA.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-outline-variant/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-[240px] overflow-hidden bg-surface-container">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 right-6 font-headline-md text-white text-[20px] leading-tight">
                    {item.title}
                  </h3>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-4 border-t border-outline-variant/30 bg-surface-container-low/30 p-3.5 rounded-xl space-y-1">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">Core Tech Stack</span>
                    <span className="text-label-sm text-on-surface font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px] text-secondary">memory</span>
                      {item.spec}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox / Details Modal */}
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-md transition-opacity">
            <div 
              className="bg-white rounded-3xl overflow-hidden border border-outline-variant/30 shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Split Header */}
              <div className="relative h-[300px] flex">
                <div className="w-1/2 relative border-r-2 border-white">
                  <img src={selectedCase.imageBefore} alt="Before" className={`w-full h-full object-cover ${selectedCase.beforeClass || "grayscale"}`} />
                  <span className="absolute top-4 left-4 bg-black/60 text-white text-[11px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">Initial Condition</span>
                </div>
                <div className="w-1/2 relative">
                  <img src={selectedCase.imageAfter} alt="After" className="w-full h-full object-cover" />
                  <span className="absolute top-4 right-4 bg-primary text-white text-[11px] px-3 py-1 rounded-full uppercase tracking-wider font-bold">Successful Outcome</span>
                </div>
                <button 
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-white text-on-surface p-2 rounded-full shadow-lg transition-transform hover:scale-105"
                  aria-label="Close case details"
                >
                  <span className="material-symbols-outlined text-[24px]">close</span>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-8 overflow-y-auto space-y-6">
                <div className="flex flex-wrap gap-2 items-center justify-between">
                  <span className="text-label-sm font-bold uppercase tracking-wider text-secondary bg-secondary-container/10 px-3 py-1.5 rounded-lg">
                    {selectedCase.category === "orthodontics" ? "AI Orthodontics" : selectedCase.category === "endodontics" ? "Root Canal" : selectedCase.category}
                  </span>
                  <div className="flex gap-4 text-label-sm text-on-surface-variant">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> {selectedCase.duration}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">person</span> {selectedCase.doctor}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="font-headline-lg text-[24px] text-on-surface leading-tight">
                    {selectedCase.title}
                  </h2>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    {selectedCase.description}
                  </p>
                </div>

                <div className="space-y-3 bg-surface-container-low/60 p-5 rounded-2xl border border-outline-variant/20">
                  <h4 className="text-label-md font-bold text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">medical_services</span>
                    Clinical Methodology
                  </h4>
                  <p className="text-body-md text-sm text-on-surface leading-relaxed">
                    {selectedCase.clinicalDetails}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedCase.tags.map((tag, idx) => (
                    <span key={idx} className="bg-surface-container text-on-surface-variant/80 text-xs px-3 py-1 rounded-full font-medium border border-outline-variant/30">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-outline-variant/30">
                  <button 
                    onClick={() => setSelectedCase(null)}
                    className="flex-1 bg-surface-container text-on-surface-variant hover:bg-surface-container-high py-3.5 rounded-xl font-label-md text-center transition-colors"
                  >
                    Close Case File
                  </button>
                  <a 
                    href="/booking"
                    className="flex-1 bg-primary text-on-primary hover:bg-primary-container py-3.5 rounded-xl font-label-md text-center shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
                  >
                    Consult for Similar Plan
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
