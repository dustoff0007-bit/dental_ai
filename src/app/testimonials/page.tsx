"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  treatment: string;
  rating: number;
  date: string;
  quote: string;
  narrative: string;
  verified: boolean;
  avatarColor: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "review-01",
    name: "Sarah Chen",
    role: "Digital Interface Designer",
    treatment: "Root Canal & Zirconia Crown",
    rating: 5,
    date: "May 12, 2026",
    quote: "I literally felt absolutely zero pain during my root canal. The technology here is amazing.",
    narrative: "I've had severe dental phobia since childhood. When Dr. Liam Kincaid told me I needed an emergency root canal, I was terrified. However, he showed me a 3D scan of my molar's root structure, explaining how the AI-guided mapping finds canals that traditional X-rays miss. The treatment itself was incredibly gentle, using micro-endodontic tools and a high-frequency sterilization laser. I didn't feel a single pinch, and the custom crown was milled right in their lab within the same visit!",
    verified: true,
    avatarColor: "bg-primary/10 text-primary"
  },
  {
    id: "review-02",
    name: "Elena Rostova",
    role: "Senior Systems Architect",
    treatment: "AI Orthodontics (Clear Aligners)",
    rating: 5,
    date: "April 28, 2026",
    quote: "Only had to visit the clinic twice! The AI mobile scanning tracking was perfect for my travel schedule.",
    narrative: "Traditional braces were a dealbreaker for me due to frequent international travel. Dentech's AI Braces program was the perfect fit. Using their predictive alignment software, they designed a custom 3D aligner sequence. The best part? I performed weekly tracking scans at home using my smartphone and their custom adapter. The AI verified optimal progress, and my clinical visits were cut by 80%. After 6 months, my dental crowding is completely resolved.",
    verified: true,
    avatarColor: "bg-secondary/10 text-secondary"
  },
  {
    id: "review-03",
    name: "James Wilson",
    role: "Financial Risk Consultant",
    treatment: "Precision Front-Tooth Implant",
    rating: 5,
    date: "March 15, 2026",
    quote: "Losing a front tooth was devestating, but the robotic 3D guide restoration looks and feels perfectly natural.",
    narrative: "Following a cycling accident, I lost my upper left central incisor. Dr. Aris Vance utilized a dynamic 3D surgical navigation setup to plan the titanium implant at the ideal bone angle. The surgery was guided by real-time computerized tracking, ensuring perfect alignment. My custom zirconia crown was color-matched with digital spectrophotometers. The result is seamless—nobody can tell it is an implant, and it feels completely solid.",
    verified: true,
    avatarColor: "bg-tertiary/10 text-tertiary"
  },
  {
    id: "review-04",
    name: "Michael Patel",
    role: "Restaurateur & Executive Chef",
    treatment: "Laser Whitening & Premium Veneers",
    rating: 5,
    date: "February 20, 2026",
    quote: "My teeth were brightened by 8 full shades, and the upper veneers look completely organic.",
    narrative: "Working in hospitality, a welcoming smile is everything. Years of tasting espresso and red wine left heavy stains. Dentech's computerized shade scanner analyzed my teeth, and a single 45-minute laser-activated whitening session yielded outstanding results. I also received 4 minimal-prep lithium disilicate veneers on my upper teeth to correct a slight overlap. The ceramic reflects light exactly like natural enamel. The clinic looks like a modern gallery and feels highly exclusive.",
    verified: true,
    avatarColor: "bg-emerald-500/10 text-emerald-600"
  },
  {
    id: "review-05",
    name: "Clara Moreau",
    role: "Design Director & Architect",
    treatment: "Comprehensive Smart Assessment",
    rating: 5,
    date: "January 10, 2026",
    quote: "The diagnostic suite feels like entering the future. Complete transparency in treatment costs.",
    narrative: "Normally, dental offices try to hide their diagnostic findings. Here, they loaded my high-definition oral scan on a huge screen and the Dentech AI highlighted areas of enamel demineralization before any symptoms even started. It gave me a clear, color-coded dashboard of my mouth and calculated transparent treatment prices. No surprises, no hidden fees, just pure clinical precision.",
    verified: true,
    avatarColor: "bg-amber-500/10 text-amber-600"
  },
  {
    id: "review-06",
    name: "David Brody",
    role: "Retired Professor of Engineering",
    treatment: "All-on-4 Fixed Jaw Restoration",
    rating: 5,
    date: "November 08, 2025",
    quote: "My loose dentures are gone. I can eat, speak, and smile with absolute confidence again.",
    narrative: "For 8 years, loose dentures caused constant gum sores and restricted what I could eat. The surgical team at Dentech performed a full-arch rehabilitation, anchoring a rigid hybrid bridge onto four dental implants. Because of their 3D surgical planning software, the implants were placed with incredible precision, and they attached my permanent teeth in a single afternoon. I can eat apples and steak again with zero pain. This treatment is worth every single penny.",
    verified: true,
    avatarColor: "bg-indigo-500/10 text-indigo-600"
  }
];

export default function TestimonialsPage() {
  const [selectedReview, setSelectedReview] = useState<Testimonial | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      <main className="flex-grow pt-32 pb-section-gap px-container-padding max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest bg-primary-container/10 border border-primary-container/20 px-4 py-1.5 rounded-full inline-block">
            Verified Experiences
          </span>
          <h1 className="text-display-lg font-display-lg text-on-surface">Patient Journeys & Stories</h1>
          <p className="text-body-lg text-on-surface-variant">
            Read comprehensive, detailed accounts of how our advanced diagnostics and expert clinical specialists have transformed lives.
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {TESTIMONIALS_DATA.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl border border-outline-variant/30 shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Rating & Verified */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  {item.verified && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      <span className="material-symbols-outlined text-sm font-bold">verified</span>
                      Verified Care
                    </span>
                  )}
                </div>

                {/* Short Quote */}
                <h3 className="font-headline-md text-[18px] text-on-surface leading-snug group-hover:text-primary transition-colors">
                  "{item.quote}"
                </h3>

                {/* Long Narrative Preview */}
                <p className="text-body-md text-sm text-on-surface-variant/90 leading-relaxed line-clamp-4">
                  {item.narrative}
                </p>
              </div>

              {/* Patient Footer */}
              <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar Circle with Initials */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${item.avatarColor}`}>
                    {item.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="font-label-md text-on-surface leading-tight font-bold">{item.name}</h4>
                    <p className="text-[11px] text-on-surface-variant/70">{item.role}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-[11px] font-bold text-secondary">{item.treatment}</span>
                  <button 
                    onClick={() => setSelectedReview(item)}
                    className="text-primary hover:underline text-[11px] font-bold mt-1 flex items-center gap-0.5"
                  >
                    Read Journey
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Review Submission */}
        <div className="mt-16 bg-gradient-to-r from-primary-container/5 to-secondary-container/5 border border-primary-container/10 p-10 rounded-3xl text-center space-y-6 max-w-4xl mx-auto">
          <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>rate_review</span>
          <h2 className="font-headline-lg text-[24px] text-on-surface">Are You a Dentech Patient?</h2>
          <p className="text-body-md text-on-surface-variant max-w-lg mx-auto">
            We are dedicated to combining clinical excellence with next-generation comfort. Share your diagnostic or treatment experience to help others choose advanced oral care.
          </p>
          <button className="bg-primary text-on-primary hover:bg-primary-container px-8 py-3.5 rounded-full font-label-md shadow-lg shadow-primary/10 transition-all hover:scale-[1.02] active:scale-[0.98]">
            Submit Your Clinical Story
          </button>
        </div>

        {/* Testimonial Detail Modal */}
        {selectedReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-md transition-opacity">
            <div 
              className="bg-white rounded-3xl overflow-hidden border border-outline-variant/30 shadow-2xl max-w-xl w-full max-h-[90vh] flex flex-col transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low">
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full">
                  <span className="material-symbols-outlined text-sm font-bold">verified</span>
                  Verified Medical Review
                </span>
                <button 
                  onClick={() => setSelectedReview(null)}
                  className="bg-surface-variant/40 hover:bg-surface-variant text-on-surface p-1.5 rounded-full transition-transform hover:scale-105"
                  aria-label="Close review"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              <div className="p-8 overflow-y-auto space-y-6 flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(selectedReview.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <span className="text-label-sm text-on-surface-variant">{selectedReview.date}</span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-headline-lg text-[22px] text-on-surface leading-snug italic">
                    "{selectedReview.quote}"
                  </h3>
                  <div className="p-4 bg-primary-container/5 rounded-2xl border border-primary-container/10">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">Prescribed Clinical Treatment</span>
                    <span className="text-label-md font-bold text-on-surface">{selectedReview.treatment}</span>
                  </div>
                  <p className="text-body-md text-on-surface-variant leading-relaxed text-sm">
                    {selectedReview.narrative}
                  </p>
                </div>

                {/* Patient Profile */}
                <div className="pt-6 border-t border-outline-variant/30 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${selectedReview.avatarColor}`}>
                    {selectedReview.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="font-label-md text-on-surface font-bold text-[16px] leading-tight">{selectedReview.name}</h4>
                    <p className="text-label-sm text-on-surface-variant">{selectedReview.role}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-outline-variant/30 bg-surface-container-low flex gap-3">
                <button 
                  onClick={() => setSelectedReview(null)}
                  className="flex-1 bg-surface-container text-on-surface-variant hover:bg-surface-container-high py-3.5 rounded-xl font-label-md transition-colors"
                >
                  Close Story
                </button>
                <a 
                  href="/booking"
                  className="flex-1 bg-primary text-on-primary hover:bg-primary-container py-3.5 rounded-xl font-label-md text-center transition-all shadow-md shadow-primary/10 flex items-center justify-center gap-1"
                >
                  Schedule Consultation
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
