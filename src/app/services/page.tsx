"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { useState } from "react";

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  techHighlights: string[];
  pricingRange: string;
  sessionCount: string;
  recoveryTime: string;
  clinicalSpec: string;
  bgImage: string;
}

const TREATMENTS_DATA: ServiceItem[] = [
  {
    id: "root-canal",
    name: "Painless Root Canal Therapy",
    category: "Endodontics",
    icon: "medical_services",
    shortDesc: "Painless micro-endodontics utilizing 3D micro-CT root mapping and high-frequency disinfection lasers.",
    fullDesc: "Our root canal treatments challenge traditional dentistry by guaranteeing a completely pain-free, single-visit experience. Using advanced 3D micro-CT scanners, our endodontic specialists map the microscopic canals of your tooth. Our computer-guided files clean the canal with sub-millimeter precision, followed by high-frequency cold-laser sterilization that completely eliminates bacteria. The tooth is then sealed with biocompatible materials and restored with a CAD/CAM milled ceramic crown, designed and fitted in the same session.",
    techHighlights: [
      "AI-guided microscopic root mapping",
      "High-frequency cold-laser sterilization",
      "3D computerized canal cleaning files",
      "Biocompatible hermetic sealers"
    ],
    pricingRange: "£650 – £950",
    sessionCount: "1 Visit (60-90 mins)",
    recoveryTime: "Immediate (Zero downtime)",
    clinicalSpec: "For deep nerve pulpitis, severe toothaches, or root abscesses.",
    bgImage: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ai-braces",
    name: "AI Braces & Clear Aligners",
    category: "Orthodontics",
    icon: "align_items_stretch",
    shortDesc: "Sleek, transparent bio-compatible aligners with smart remote smartphone monitoring for 80% fewer visits.",
    fullDesc: "Achieve your perfect smile discreetly and comfortably. Utilizing proprietary orthodontic simulation software, we map your entire alignment journey beforehand. Our systems print set sequences of custom, medical-grade clear aligners that apply optimal pressure to target teeth. Patients receive a specialized smart-lens attachment for their mobile phone to capture weekly scans at home. Our neural tracking system verifies bone shifting against the plan, alerting your orthodontist of successful progression, allowing aligner changes without requiring weekly clinic checkups.",
    techHighlights: [
      "Predictive dynamic pressure profiling",
      "3D printed medical-grade transparent polymers",
      "AI smartphone scanning & tracking validation",
      "80% reduction in physical clinical appointments"
    ],
    pricingRange: "£1,800 – £3,500",
    sessionCount: "6 – 12 Month Treatment",
    recoveryTime: "Slight initial pressure (24-48 hrs)",
    clinicalSpec: "For diastemas, crowding, overbites, crossbites, and alignment modifications.",
    bgImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "precision-implants",
    name: "Robotic Precision Implants",
    category: "Implantology",
    icon: "biotech",
    shortDesc: "3D surgical navigation and robotic guidance for placing lifetime titanium restorations.",
    fullDesc: "Replacing missing teeth is key for jaw structure and facial aesthetics. We utilize state-of-the-art dental CBCT scans to render a 3D computerized replica of your jaw bone. Using dynamic robotic surgery guidance, Dr. Aris Vance positions the premium grade-5 titanium implant fixture into the optimal structural bone density. This guided approach prevents sinus or nerve impingement, reduces surgical incision size by 60%, and accelerates healing. Teeth are completed with customized translucent zirconia abutments and dental crowns.",
    techHighlights: [
      "Dynamic 3D surgical GPS guidance",
      "CBCT digital bone density mapping",
      "Premium Grade-5 biological titanium",
      "Monolithic zirconia CAD/CAM crowns"
    ],
    pricingRange: "£1,500 – £2,200 (per tooth)",
    sessionCount: "2 Main Visits (over 3 months)",
    recoveryTime: "3 – 5 Days mild healing",
    clinicalSpec: "For missing teeth, single or multi-tooth restoration, or complete jaw support.",
    bgImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "teeth-whitening",
    name: "Laser-Activated White Smile",
    category: "Cosmetics",
    icon: "brightness_high",
    shortDesc: "Computerized shade-matched bleaching utilizing photo-activated peroxide gel with zero sensitivity.",
    fullDesc: "Fast-acting cosmetic brightening that protects delicate tooth enamel. Our cosmetic dental experts begin by capturing your base enamel shade using computerized spectrophotometers. We apply a proprietary buffer gel containing calcium and potassium to completely eliminate tooth sensitivity, followed by our medical-grade hydrogen peroxide bleaching formula. The gel is activated using multi-wavelength laser beams, accelerating stain break-ups. You walk out with a smile up to 8 shades whiter in under an hour.",
    techHighlights: [
      "Computerized spectrophotometer shade matching",
      "Proprietary anti-sensitivity mineral buffers",
      "Laser photo-activated oxygenation",
      "Safe for enamel and existing dental bonding"
    ],
    pricingRange: "£300 – £450",
    sessionCount: "1 Visit (45 mins)",
    recoveryTime: "Immediate (No diet restrictions after 24h)",
    clinicalSpec: "For dietary, smoking, age-related, or fluorosis surface discoloration.",
    bgImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
  }
];

export default function ServicesPage() {
  const [selectedTreatment, setSelectedTreatment] = useState<ServiceItem | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      <main className="flex-grow pt-32 pb-section-gap px-container-padding max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest bg-primary-container/10 border border-primary-container/20 px-4 py-1.5 rounded-full inline-block">
            Clinical Disciplines
          </span>
          <h1 className="text-display-lg font-display-lg text-on-surface">Advanced Dental Services</h1>
          <p className="text-body-lg text-on-surface-variant">
            Explore our specialized treatments combining state-of-the-art diagnostic technology with expert human clinical craftsmanship.
          </p>
        </div>

        {/* Dynamic Action Banner - View Treatment Plan */}
        <div className="mb-16 bg-gradient-to-r from-primary via-primary-container to-secondary text-on-primary rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,227,253,0.3),transparent_60%)]"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                Digital Patient Portal
              </div>
              <h2 className="text-headline-lg text-[28px] md:text-[32px] leading-tight font-bold">
                Access Your Personalized Treatment Plan
              </h2>
              <p className="text-body-md opacity-90 text-sm md:text-base">
                Curious how these clinical treatments combine for your smile? View our sample Interactive Treatment Plan Dashboard showing step-by-step progress, digital dental maps, and timelines.
              </p>
            </div>
            <Link 
              href="/services/treatment-plan" 
              className="bg-white text-primary hover:bg-secondary-fixed text-center px-8 py-4 rounded-full font-label-md text-label-md font-bold shadow-xl shadow-black/10 hover:shadow-black/20 hover:scale-105 active:scale-95 transition-all self-start md:self-center flex items-center gap-2"
            >
              View Treatment Plan
              <span className="material-symbols-outlined text-[18px]">dashboard</span>
            </Link>
          </div>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {TREATMENTS_DATA.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-outline-variant/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image banner */}
              <div className="relative h-[200px] overflow-hidden bg-surface-container">
                <img 
                  src={item.bgImage} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 brightness-[0.85]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-fixed-dim bg-white/10 backdrop-blur-md px-2.5 py-1 rounded">
                      {item.category}
                    </span>
                    <h3 className="font-headline-md text-white text-[22px] leading-tight mt-2">
                      {item.name}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-body-md text-on-surface-variant text-sm leading-relaxed">
                    {item.shortDesc}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {item.techHighlights.slice(0, 2).map((tech, i) => (
                      <div key={i} className="flex items-center gap-2 text-[12px] text-on-surface font-semibold bg-surface-container-low/60 p-2 rounded-lg">
                        <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Metrics */}
                <div className="pt-4 border-t border-outline-variant/30 flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex gap-4">
                    <div>
                      <span className="text-[10px] font-bold text-outline uppercase block">Est. Cost</span>
                      <span className="text-label-md font-bold text-primary">{item.pricingRange}</span>
                    </div>
                    <div className="border-l border-outline-variant/30 pl-4">
                      <span className="text-[10px] font-bold text-outline uppercase block">Duration</span>
                      <span className="text-label-sm font-semibold text-on-surface">{item.sessionCount}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedTreatment(item)}
                    className="bg-primary hover:bg-primary-container text-on-primary text-label-sm font-bold py-2.5 px-5 rounded-full shadow-md shadow-primary/5 transition-all flex items-center gap-1.5"
                  >
                    Clinical Details
                    <span className="material-symbols-outlined text-[16px]">info</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Detail Modal */}
        {selectedTreatment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-md transition-opacity">
            <div 
              className="bg-white rounded-3xl overflow-hidden border border-outline-variant/30 shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[220px] overflow-hidden">
                <img src={selectedTreatment.bgImage} alt={selectedTreatment.name} className="w-full h-full object-cover brightness-[0.7]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <button 
                  onClick={() => setSelectedTreatment(null)}
                  className="absolute top-4 right-4 bg-black/55 hover:bg-black/80 text-white p-2 rounded-full shadow-lg transition-transform hover:scale-105"
                  aria-label="Close details"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
                <div className="absolute bottom-6 left-8 right-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-white/20 backdrop-blur-md px-2.5 py-1 rounded text-white">
                    {selectedTreatment.category}
                  </span>
                  <h2 className="font-headline-lg text-white text-[26px] md:text-[30px] leading-tight font-bold mt-2">
                    {selectedTreatment.name}
                  </h2>
                </div>
              </div>

              <div className="p-8 overflow-y-auto space-y-6 flex-1">
                <div className="space-y-2">
                  <h4 className="text-label-sm font-bold text-primary uppercase tracking-widest">Treatment Synopsis</h4>
                  <p className="text-body-md text-on-surface-variant leading-relaxed text-sm">
                    {selectedTreatment.fullDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-surface-container-low/60 p-4 rounded-2xl border border-outline-variant/20 space-y-3">
                    <h5 className="text-[11px] font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">biotech</span>
                      Advanced Medical Tech Used
                    </h5>
                    <ul className="space-y-2">
                      {selectedTreatment.techHighlights.map((tech, idx) => (
                        <li key={idx} className="text-xs text-on-surface font-semibold flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5"></span>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-surface-container-low/60 p-4 rounded-2xl border border-outline-variant/20 flex flex-col justify-between gap-4">
                    <div className="space-y-3">
                      <h5 className="text-[11px] font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">clinical_notes</span>
                        Clinical Indication
                      </h5>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        {selectedTreatment.clinicalSpec}
                      </p>
                    </div>

                    <div className="space-y-1.5 border-t border-outline-variant/30 pt-3">
                      <div className="flex justify-between text-xs text-on-surface">
                        <span className="text-outline font-semibold">Estimated Cost:</span>
                        <span className="font-bold text-primary">{selectedTreatment.pricingRange}</span>
                      </div>
                      <div className="flex justify-between text-xs text-on-surface">
                        <span className="text-outline font-semibold">Healing Period:</span>
                        <span className="font-bold">{selectedTreatment.recoveryTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-outline-variant/30 bg-surface-container-low flex gap-3">
                <button 
                  onClick={() => setSelectedTreatment(null)}
                  className="flex-1 bg-surface-container text-on-surface-variant hover:bg-surface-container-high py-3.5 rounded-xl font-label-md transition-colors"
                >
                  Close Details
                </button>
                <Link 
                  href="/booking"
                  className="flex-1 bg-primary text-on-primary hover:bg-primary-container py-3.5 rounded-xl font-label-md text-center transition-all shadow-md shadow-primary/10 flex items-center justify-center gap-1"
                >
                  Book Assessment
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
