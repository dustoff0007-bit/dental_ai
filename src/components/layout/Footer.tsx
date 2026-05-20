import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-highest dark:bg-surface-container">
      <div className="w-full px-container-padding py-section-gap grid grid-cols-1 md:grid-cols-3 gap-gutter max-w-7xl mx-auto">
        <div className="space-y-4">
          <span className="text-headline-md font-bold text-primary">Dentech AI</span>
          <p className="text-body-md text-on-surface-variant pr-8">
            The pinnacle of elite dental care, powered by human expertise and artificial intelligence. Dedicated to your long-term oral health.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <p className="text-label-md font-bold text-primary">Explore</p>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">Treatments</Link></li>
              <li><Link href="/ai-assistant" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">AI Diagnostics</Link></li>
              <li><Link href="/locations" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">Clinic Locations</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-label-md font-bold text-primary">Legal</p>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-label-md font-bold text-primary">Newsletter</p>
          <div className="flex gap-2">
            <input className="flex-1 bg-surface-container border-none rounded-full px-4 text-label-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Email address" type="email" />
            <button className="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
          <div className="flex gap-4 pt-4">
            <a className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-sm">rss_feed</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-container-padding py-6 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-label-sm text-on-surface-variant/70">
          © 2024 Dentech AI. Premium Digital Healthcare. <br/>
          <strong>Developed by Zaryab</strong>
        </p>
        <div className="flex gap-6">
          <span className="flex items-center gap-1 text-label-sm text-on-surface-variant/70">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Systems Operational
          </span>
        </div>
      </div>
    </footer>
  );
}
