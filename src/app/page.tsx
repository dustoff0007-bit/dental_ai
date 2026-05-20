import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24 overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-container-padding py-section-gap max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="relative z-10 space-y-stack-lg">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <span className="text-label-sm font-label-sm">Next-Gen Dental Intelligence</span>
            </div>
            <h1 className="font-display-lg text-display-lg tracking-tight text-on-surface">
              Expert Human Dental Care for <span className="text-primary">Modern Patients</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Experience the future of dentistry. Our highly experienced human doctors use AI as an assistant to optimize scheduling and provide quick diagnostic insights, delivering remarkably comfortable treatments.
            </p>
            <div className="flex flex-wrap gap-stack-md pt-4">
              <Link href="/booking" className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                Book Appointment
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link href="/ai-assistant" className="bg-white/40 backdrop-blur-md border border-primary/20 text-primary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-white/60 active:scale-95 transition-all flex items-center gap-2">
                Chat with AI
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-container/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img className="w-full h-[600px] object-cover" alt="Modern dental clinic" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" />
              <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container"></div>
                  </div>
                  <div className="text-right">
                    <div className="font-label-md text-label-md text-primary">Join 5,000+ Patients</div>
                    <div className="text-label-sm text-on-surface-variant">Trusted AI Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Chatbot Section */}
        <section className="bg-surface-container-low/60 py-section-gap relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-container-padding grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-5 space-y-stack-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Meet Your <span className="text-secondary">Scheduling Assistant</span></h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Our AI assistant is available 24/7 to help provide quick diagnostic insights, instant cost estimates, and manage your scheduling with our expert human doctors.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-body-md font-body-md">Instant Symptom Analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-body-md font-body-md">Transparent Cost Breakdown</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-body-md font-body-md">Seamless Multi-step Scheduling</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-outline-variant/30 max-w-2xl ml-auto">
                <div className="bg-primary p-4 flex items-center justify-between text-on-primary">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="material-symbols-outlined">smart_toy</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md">Dentech AI Concierge</p>
                      <p className="text-[10px] opacity-80 uppercase tracking-widest">Active Now</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined">more_vert</span>
                </div>
                <div className="p-6 h-[400px] overflow-y-auto space-y-6 bg-surface-bright">
                  <div className="flex gap-3 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex-shrink-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">smart_toy</span>
                    </div>
                    <div className="bg-surface-container-high p-4 rounded-lg rounded-tl-none">
                      <p className="text-body-md font-body-md text-on-surface">Hello! I'm your AI dental assistant. How can I help you today?</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-end ml-auto max-w-[80%]">
                    <div className="bg-primary p-4 rounded-lg rounded-tr-none text-on-primary">
                      <p className="text-body-md font-body-md">I have a sharp pain in my upper left molar. What could it be?</p>
                    </div>
                  </div>
                  <div className="flex gap-3 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex-shrink-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">smart_toy</span>
                    </div>
                    <div className="bg-surface-container-high p-4 rounded-lg rounded-tl-none">
                      <p className="text-body-md font-body-md text-on-surface">Based on your description, this could be dental sensitivity or a minor cavity. I recommend an AI-guided scan to be sure. Would you like to see available appointment times for tomorrow?</p>
                      <div className="mt-4 flex gap-2">
                        <Link href="/booking" className="px-4 py-1.5 rounded-full border border-primary text-primary text-label-sm hover:bg-primary hover:text-white transition-all">Yes, show times</Link>
                        <button className="px-4 py-1.5 rounded-full border border-primary text-primary text-label-sm hover:bg-primary hover:text-white transition-all">Check costs first</button>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/ai-assistant" className="block p-4 border-t border-outline-variant/30 hover:bg-surface-container-low/30 transition-colors">
                  <div className="flex gap-2">
                    <div className="flex-1 bg-surface-container-low rounded-full px-4 py-2 text-body-md text-on-surface-variant/70 flex items-center cursor-pointer">
                      Click to start chatting with Dr. Dentech...
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 cursor-pointer">
                      <span className="material-symbols-outlined">send</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="py-section-gap max-w-7xl mx-auto px-container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Premium Services</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">Explore our range of advanced treatments performed by expert doctors, using AI for maximum precision and minimal recovery time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-gutter h-auto md:h-[600px]">
            {/* Teeth Whitening */}
            <div className="md:col-span-2 md:row-span-1 glass-card rounded-lg p-8 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all relative overflow-hidden">
              <img className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-110 transition-transform duration-700" alt="Teeth Whitening" src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent"></div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">brightness_high</span>
                <h3 className="font-headline-md text-headline-md mb-2 text-white">Computerized Shade Laser Whitening</h3>
                <p className="text-body-md font-body-md text-white/80">Laser-activated whitening for instant, sensitivity-free results.</p>
              </div>
              <Link href="/services" className="text-primary font-label-md flex items-center gap-2 mt-4 group-hover:gap-4 transition-all relative z-10">Learn More <span className="material-symbols-outlined">arrow_right_alt</span></Link>
            </div>
            {/* Implants */}
            <div className="md:col-span-2 md:row-span-2 bg-primary-container text-on-primary-container rounded-lg p-8 flex flex-col justify-end relative overflow-hidden group hover:shadow-2xl transition-all">
              <img className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-110 transition-transform duration-700" alt="Implant procedure" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="font-headline-lg text-headline-lg mb-4 text-white">Precision Implants</h3>
                <p className="text-body-lg font-body-lg mb-6 max-w-xs text-white/90">3D-mapped robotic surgery for perfect alignment and lifelong durability.</p>
                <Link href="/services/treatment-plan" className="bg-white text-primary px-6 py-3 rounded-full font-label-md shadow-lg inline-block text-center hover:scale-105 transition-all">View Treatment Plan</Link>
              </div>
            </div>
            {/* Root Canal */}
            <Link href="/services" className="md:col-span-1 md:row-span-1 bg-secondary text-on-secondary rounded-lg p-6 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:shadow-xl transition-all">
              <img className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-110 transition-transform duration-700" alt="Root Canal" src="https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent"></div>
              <div className="relative z-10 flex flex-col items-center">
                <span className="material-symbols-outlined text-3xl mb-3 text-secondary-fixed">medical_services</span>
                <h3 className="font-label-md text-label-md font-bold mb-1 text-white">Root Canal</h3>
                <p className="text-label-sm text-white/90">Painless micro-endodontics.</p>
              </div>
            </Link>
            {/* Braces */}
            <Link href="/services" className="md:col-span-1 md:row-span-1 bg-primary text-on-primary rounded-lg p-6 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:shadow-xl transition-all">
              <img className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-110 transition-transform duration-700" alt="AI Braces" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent"></div>
              <div className="relative z-10 flex flex-col items-center">
                <span className="material-symbols-outlined text-3xl mb-3 text-primary-fixed">align_items_stretch</span>
                <h3 className="font-label-md text-label-md font-bold mb-1 text-white">AI Braces</h3>
                <p className="text-label-sm text-white/90">Predictive orthodontic force.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Before & After Slider Showcase */}
        <section className="bg-inverse-surface py-section-gap">
          <div className="max-w-7xl mx-auto px-container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
              <div className="text-inverse-on-surface space-y-stack-lg">
                <h2 className="font-headline-lg text-headline-lg">Transformative <span className="text-secondary-fixed-dim">Results</span></h2>
                <p className="font-body-md text-body-md opacity-80">Our AI-assisted cosmetic procedures deliver results that are both naturally beautiful and structurally sound. Experience the 'Dentech Smile'.</p>
                <div className="grid grid-cols-2 gap-gutter pt-8">
                  <div>
                    <p className="text-display-lg font-display-lg text-secondary-fixed-dim">98%</p>
                    <p className="text-label-md font-label-md opacity-60 uppercase">Success Rate</p>
                  </div>
                  <div>
                    <p className="text-display-lg font-display-lg text-secondary-fixed-dim">1.2k</p>
                    <p className="text-label-md font-label-md opacity-60 uppercase">Smiles Created</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden group">
                <div className="flex">
                  <div className="w-1/2 relative border-r-2 border-secondary-fixed">
                    <img className="w-full h-[400px] object-cover grayscale-0 sepia-[65%] saturate-[150%] hue-rotate-[-10deg] brightness-[88%]" alt="Before treatment" src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800" />
                    <span className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-label-sm">Before</span>
                  </div>
                  <div className="w-1/2 relative">
                    <img className="w-full h-[400px] object-cover" alt="After treatment" src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800" />
                    <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-label-sm">After AI Whitening</span>
                  </div>
                </div>
                <div className="absolute inset-y-0 left-1/2 -ml-0.5 w-1 bg-secondary-fixed shadow-[0_0_15px_rgba(0,218,243,0.5)]">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center shadow-lg cursor-ew-resize">
                    <span className="material-symbols-outlined text-inverse-surface">unfold_more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-section-gap max-w-7xl mx-auto px-container-padding">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Patient Experiences</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Testimonial 1 */}
            <div className="glass-card p-8 rounded-lg space-y-4 flex flex-col">
              <div className="flex text-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant flex-1">"The AI-guided implant process was incredible. I saw a 3D simulation of my smile before we even started. Truly a world-class experience."</p>
              <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/20">
                <div className="w-12 h-12 rounded-full bg-primary-fixed"></div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">James Wilson</p>
                  <p className="text-label-sm text-on-surface-variant">Implants Patient</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-primary text-on-primary p-8 rounded-lg space-y-4 flex flex-col shadow-2xl">
              <div className="flex text-secondary-fixed">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-body-md text-body-md opacity-90 flex-1">"I've always had dental anxiety, but the environment here is so calming and the tech makes everything so fast. I didn't feel a thing during my root canal."</p>
              <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                <div className="w-12 h-12 rounded-full bg-white/20"></div>
                <div>
                  <p className="font-label-md text-label-md">Sarah Chen</p>
                  <p className="text-label-sm opacity-80">General Dentistry</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="glass-card p-8 rounded-lg space-y-4 flex flex-col">
              <div className="flex text-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant flex-1">"Fast, professional, and the automated reminders are so helpful. The most tech-forward clinic I have ever visited in London."</p>
              <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/20">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed"></div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Mark Thompson</p>
                  <p className="text-label-sm text-on-surface-variant">Whitening Patient</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Location */}
        <section className="py-section-gap bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap">
              <div className="space-y-stack-lg">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Visit Our Clinic</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Located in the heart of the digital district, our clinic is designed to be a sanctuary of health and technology.</p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary p-3 bg-white rounded-lg shadow-sm">location_on</span>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">Headquarters</p>
                      <p className="text-body-md text-on-surface-variant">124 Innovation Dr, Tech City, TC 90210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary p-3 bg-white rounded-lg shadow-sm">call</span>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">Phone Support</p>
                      <p className="text-body-md text-on-surface-variant">+1 (555) AI-DENTAL</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-[300px] border border-white/40">
                  <img className="w-full h-full object-cover" alt="Map Location" src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" />
                </div>
              </div>
              <div className="bg-white p-10 rounded-lg shadow-2xl border border-outline-variant/20">
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest">Step 1 of 3</span>
                    <span className="text-label-sm text-on-surface-variant">Patient Details</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-primary"></div>
                  </div>
                </div>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-label-sm font-label-sm text-on-surface-variant">First Name</label>
                      <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-body-md focus:ring-2 focus:ring-primary transition-all outline-none" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-label-sm font-label-sm text-on-surface-variant">Last Name</label>
                      <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-body-md focus:ring-2 focus:ring-primary transition-all outline-none" type="text" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-label-sm font-label-sm text-on-surface-variant">Email Address</label>
                    <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-body-md focus:ring-2 focus:ring-primary transition-all outline-none" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-label-sm font-label-sm text-on-surface-variant">Reason for Visit</label>
                    <select className="w-full bg-surface-container-low border-none rounded-lg p-3 text-body-md focus:ring-2 focus:ring-primary transition-all outline-none">
                      <option>Select a service</option>
                      <option>Consultation</option>
                      <option>Teeth Whitening</option>
                      <option>Dental Implants</option>
                      <option>Emergency Pain</option>
                    </select>
                  </div>
                  <button className="w-full bg-primary text-on-primary py-4 rounded-full font-label-md text-label-md shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all" type="submit">
                    Next: Choose Date & Time
                  </button>
                  <p className="text-center text-label-sm text-on-surface-variant">Secure & HIPAA Compliant Scheduling</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
