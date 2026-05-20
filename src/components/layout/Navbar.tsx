"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const getLinkClass = (path: string, isMobile = false) => {
    if (isMobile) {
      return pathname === path
        ? "text-display-sm text-primary font-bold px-4 py-3 rounded-xl bg-primary-container/10 flex items-center gap-3 transition-all"
        : "text-headline-md text-on-surface-variant hover:text-primary px-4 py-3 rounded-xl hover:bg-surface-container-low flex items-center gap-3 transition-all";
    }
    return pathname === path
      ? "text-label-md text-primary font-bold border-b-2 border-primary pb-1 transition-colors duration-200"
      : "text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200";
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-white/20 shadow-[0px_10px_30px_rgba(0,82,204,0.08)]">
        <div className="flex justify-between items-center w-full px-container-padding py-4 max-w-7xl mx-auto">
          <Link href="/" className="text-headline-md font-bold text-primary flex items-center gap-2 hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            Dentech AI
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-stack-lg">
            <Link href="/services" className={getLinkClass('/services')}>Treatments</Link>
            <Link href="/ai-assistant" className={getLinkClass('/ai-assistant')}>AI Diagnostics</Link>
            <Link href="/gallery" className={getLinkClass('/gallery')}>Gallery</Link>
            <Link href="/testimonials" className={getLinkClass('/testimonials')}>Testimonials</Link>
          </div>

          <div className="flex items-center gap-stack-md">
            <button className="material-symbols-outlined p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-all">
              notifications
            </button>
            <Link href="/booking" className="hidden sm:inline-block bg-primary text-on-primary px-6 py-2 rounded-full text-label-md hover:scale-105 hover:shadow-lg hover:shadow-primary/10 active:scale-95 transition-all">
              Book Appointment
            </Link>
            
            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center p-2 text-on-surface hover:bg-surface-container-high rounded-full transition-all focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[28px]">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-inverse-surface/20 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed top-[72px] right-0 bottom-0 z-45 w-full sm:w-[380px] bg-surface-container-lowest/95 backdrop-blur-2xl border-l border-outline-variant/30 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-350 ease-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-6 pt-4">
          <p className="text-label-sm text-outline uppercase tracking-wider font-bold border-b border-outline-variant/30 pb-2">Menu Navigation</p>
          <div className="flex flex-col gap-2">
            <Link href="/" className={getLinkClass('/', true)}>
              <span className="material-symbols-outlined text-[22px]">home</span>
              Home
            </Link>
            <Link href="/services" className={getLinkClass('/services', true)}>
              <span className="material-symbols-outlined text-[22px]">medical_services</span>
              Treatments
            </Link>
            <Link href="/ai-assistant" className={getLinkClass('/ai-assistant', true)}>
              <span className="material-symbols-outlined text-[22px]">smart_toy</span>
              AI Diagnostics
            </Link>
            <Link href="/gallery" className={getLinkClass('/gallery', true)}>
              <span className="material-symbols-outlined text-[22px]">photo_library</span>
              Gallery
            </Link>
            <Link href="/testimonials" className={getLinkClass('/testimonials', true)}>
              <span className="material-symbols-outlined text-[22px]">forum</span>
              Patient Stories
            </Link>
          </div>
        </div>

        <div className="space-y-4 pb-12">
          <Link 
            href="/booking" 
            className="block text-center bg-primary text-on-primary py-4 rounded-xl font-bold hover:opacity-95 active:scale-98 transition-all shadow-lg shadow-primary/10"
          >
            Book Appointment
          </Link>
          <div className="flex justify-center gap-4 text-on-surface-variant/60 text-label-sm">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              24/7 AI Diagnostic Active
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
