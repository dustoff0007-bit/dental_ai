"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";

export default function AIAssistantPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm Dr. Dentech, your digital clinical assistant. How can I assist with your dental health today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { 
      role: "user", 
      content: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages.map(m => ({ role: m.role, content: m.content })) }),
      });

      const data = await response.json();
      
      if (data.reply) {
        setMessages((prev) => [
          ...prev, 
          { 
            role: "assistant", 
            content: data.reply.content,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container overflow-hidden h-screen flex flex-col">
      <Navbar />
      
      <main className="pt-24 flex-1 max-w-7xl mx-auto px-container-padding flex gap-gutter w-full overflow-hidden">
        {/* Sidebar: Information & FAQs */}
        <aside className="hidden lg:flex flex-col w-80 shrink-0 gap-stack-lg pb-container-padding overflow-y-auto">
          {/* Clinic Status Card */}
          <div className="glass-card rounded-lg p-stack-lg shadow-sm">
            <div className="flex items-center gap-stack-sm mb-stack-md">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
              <h3 className="font-headline-md text-body-md text-on-surface font-semibold">Clinic Hours</h3>
            </div>
            <ul className="space-y-stack-sm text-label-md text-on-surface-variant">
              <li className="flex justify-between"><span>Mon - Fri</span><span className="font-bold text-secondary">08:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>09:00 - 16:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="text-error">Closed</span></li>
            </ul>
          </div>
          {/* FAQ Section */}
          <div className="glass-card rounded-lg p-stack-lg shadow-sm flex-1">
            <div className="flex items-center gap-stack-sm mb-stack-md">
              <span className="material-symbols-outlined text-primary">clinical_notes</span>
              <h3 className="font-headline-md text-body-md text-on-surface font-semibold">Recent Patient FAQs</h3>
            </div>
            <div className="space-y-stack-md">
              <div className="p-stack-sm rounded-DEFAULT bg-surface-container-low/50 hover:bg-white/60 transition-colors cursor-pointer group">
                <p className="text-label-md font-semibold text-on-surface group-hover:text-primary">How long do veneers last?</p>
                <p className="text-label-sm text-on-surface-variant/80 mt-1">Typical lifespan is 10-15 years with proper care.</p>
              </div>
              <div className="p-stack-sm rounded-DEFAULT bg-surface-container-low/50 hover:bg-white/60 transition-colors cursor-pointer group">
                <p className="text-label-md font-semibold text-on-surface group-hover:text-primary">Is AI whitening safe?</p>
                <p className="text-label-sm text-on-surface-variant/80 mt-1">Our AI monitors sensitivity in real-time for zero pain.</p>
              </div>
              <div className="p-stack-sm rounded-DEFAULT bg-surface-container-low/50 hover:bg-white/60 transition-colors cursor-pointer group">
                <p className="text-label-md font-semibold text-on-surface group-hover:text-primary">Emergency procedures?</p>
                <p className="text-label-sm text-on-surface-variant/80 mt-1">Contact the bot for immediate triage instructions.</p>
              </div>
            </div>
          </div>
          {/* Promo Card */}
          <div className="relative rounded-lg overflow-hidden h-40 group shrink-0">
            <img className="w-full h-full object-cover" alt="New: 3D AI Dental Scanning" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=300" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
              <p className="text-on-primary font-label-md font-bold">New: 3D AI Dental Scanning</p>
            </div>
          </div>
        </aside>

        {/* Main Chat Interface */}
        <section className="flex-1 flex flex-col glass-card rounded-t-lg shadow-lg relative border-b-0 overflow-hidden mb-16">
          {/* Chat Header */}
          <div className="px-stack-lg py-stack-md border-b border-outline-variant flex items-center justify-between bg-white/40">
            <div className="flex items-center gap-stack-md">
              <div className="relative w-12 h-12">
                <img className="w-full h-full object-cover rounded-full border-2 border-primary-container" alt="Dr. Dentech AI" src="https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=150" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h2 className="font-headline-md text-body-md font-bold text-on-surface">Dr. Dentech AI</h2>
                <div className="flex items-center gap-1">
                  <span className="text-label-sm text-secondary font-bold">Online</span>
                  <span className="text-label-sm text-on-surface-variant/60">• AI Clinical Assistant</span>
                </div>
              </div>
            </div>
            <div className="flex gap-stack-sm">
              <button className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-surface-container rounded-full">search</button>
              <button className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-surface-container rounded-full">more_vert</button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-stack-lg py-stack-lg flex flex-col gap-stack-md">
            {messages.map((msg, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={idx} 
                className={`flex gap-stack-md max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}
              >
                {msg.role === 'assistant' ? (
                  <div className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary text-[20px]">person</span>
                  </div>
                )}
                
                <div className={`space-y-stack-sm ${msg.role === 'user' ? 'text-right' : ''}`}>
                  <div className={`${
                    msg.role === 'assistant' 
                    ? 'bg-white text-on-surface rounded-tr-lg rounded-b-lg border border-outline-variant/30' 
                    : 'bg-primary-container text-on-primary-container rounded-tl-lg rounded-b-lg'
                  } p-stack-md shadow-sm`}>
                    <p className="text-body-md whitespace-pre-wrap">{msg.content}</p>
                  </div>
                  <span className={`text-label-sm text-on-surface-variant ${msg.role === 'user' ? 'mr-1' : 'ml-1'}`}>{msg.time}</span>
                </div>
              </motion.div>
            ))}

            {/* AI Typing / Analysis */}
            {isLoading && (
              <div className="flex gap-stack-md max-w-[85%] self-start">
                <div className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                </div>
                <div className="bg-surface-container-low/80 p-stack-md rounded-tr-lg rounded-b-lg border border-primary/10">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                  <p className="text-label-sm text-primary mt-2 font-semibold">Analyzing description...</p>
                </div>
              </div>
            )}
          </div>

          {/* Quick Action Chips */}
          <div className="px-stack-lg py-2 flex gap-stack-sm overflow-x-auto no-scrollbar shrink-0">
            <button 
              onClick={() => setInput("Can you check the treatment costs?")}
              className="shrink-0 px-4 py-2 bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container transition-all rounded-full text-label-md text-on-surface-variant border border-outline-variant/30"
            >
              Check Treatment Costs
            </button>
            <button 
              onClick={() => setInput("I would like to describe my pain.")}
              className="shrink-0 px-4 py-2 bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container transition-all rounded-full text-label-md text-on-surface-variant border border-outline-variant/30"
            >
              Describe Pain
            </button>
            <button 
              onClick={() => setInput("I need emergency care.")}
              className="shrink-0 px-4 py-2 bg-error-container/20 text-error hover:bg-error hover:text-on-error transition-all rounded-full text-label-md border border-error/20"
            >
              Emergency Care
            </button>
            <button 
               onClick={() => setInput("I want to book a cleaning.")}
              className="shrink-0 px-4 py-2 bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container transition-all rounded-full text-label-md text-on-surface-variant border border-outline-variant/30"
            >
              Book Cleaning
            </button>
          </div>

          {/* Chat Input */}
          <div className="p-stack-lg bg-white/40 border-t border-outline-variant shrink-0">
            <div className="relative flex items-center gap-stack-md">
              <div className="flex-1 relative">
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  className="w-full bg-white border-2 border-outline-variant focus:border-primary focus:ring-0 outline-none rounded-lg py-4 pl-12 pr-4 text-body-md transition-all shadow-sm" 
                  placeholder="Type your symptoms or questions..." 
                  type="text" 
                />
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">attachment</span>
              </div>
              <button 
                onClick={sendMessage}
                disabled={isLoading}
                className="bg-primary text-on-primary w-14 h-14 rounded-lg flex items-center justify-center hover:shadow-[0px_0px_15px_rgba(0,82,204,0.3)] active:scale-95 transition-all disabled:opacity-50"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
              </button>
            </div>
            <p className="text-center text-label-sm text-on-surface-variant/60 mt-stack-md italic">AI advice is for guidance only. Always consult with a licensed professional for diagnosis.</p>
          </div>
        </section>

        {/* Right Side: Secondary Actions/Profile */}
        <aside className="hidden xl:flex flex-col w-72 shrink-0 gap-stack-lg pb-container-padding overflow-y-auto mb-16">
          <div className="glass-card rounded-lg p-stack-lg shadow-sm">
            <h3 className="font-headline-md text-body-md text-on-surface font-semibold mb-stack-md">Your Records</h3>
            <div className="space-y-stack-md">
              <div className="flex items-center gap-stack-sm">
                <div className="w-10 h-10 rounded-full bg-secondary-container/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">radiology</span>
                </div>
                <div>
                  <p className="text-label-md font-bold">Last X-Ray</p>
                  <p className="text-label-sm text-on-surface-variant">June 12, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-stack-sm">
                <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                </div>
                <div>
                  <p className="text-label-md font-bold">Insurance Status</p>
                  <p className="text-label-sm text-secondary">Verified & Active</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-stack-lg py-2 border-2 border-primary text-primary font-label-md rounded-full hover:bg-primary-container/5 transition-all">View All History</button>
          </div>
          {/* AI Diagnosis Tool */}
          <div className="bg-inverse-surface text-inverse-on-surface rounded-lg p-stack-lg shadow-lg">
            <span className="material-symbols-outlined text-secondary-fixed mb-stack-sm">add_a_photo</span>
            <h4 className="font-headline-md text-body-md font-bold mb-2">Visual Diagnostic</h4>
            <p className="text-label-sm text-inverse-on-surface/70 mb-stack-lg">Upload a clear photo of the affected area for immediate AI screening.</p>
            <button className="w-full bg-secondary-container text-on-secondary-container py-3 rounded-lg font-label-md font-bold hover:brightness-110 active:scale-95 transition-all">Start Scan</button>
          </div>
        </aside>
      </main>

      {/* Reduced Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-surface-container-highest/90 backdrop-blur-md border-t border-outline-variant z-40">
        <div className="max-w-7xl mx-auto px-container-padding py-4 flex flex-col md:flex-row justify-between items-center gap-gutter">
          <p className="text-label-sm text-on-surface-variant">© 2024 Dentech AI. Developed by Zaryab.</p>
          <div className="flex gap-stack-lg">
            <a className="text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
