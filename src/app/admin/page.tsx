export default function AdminPage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body-md min-h-screen flex overflow-hidden w-full">
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col h-full w-64 bg-surface-container-low/60 backdrop-blur-2xl border-r border-white/10 shadow-lg py-8 gap-stack-lg z-50">
        <div className="px-6 mb-8">
          <h1 className="text-headline-md font-headline-md font-bold text-primary">Admin Portal</h1>
          <p className="text-label-sm font-label-sm text-on-surface-variant/80 uppercase tracking-wider">Elite Dental Suite</p>
        </div>
        <nav className="flex-1 flex flex-col">
          <a className="flex items-center gap-4 px-6 py-3 transition-all font-semibold text-primary border-r-4 border-primary bg-primary-container/5 translate-x-1 duration-200" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
            <span className="text-label-md font-label-md">Dashboard</span>
          </a>
          <a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant/80 hover:bg-primary-container/10 transition-all" href="#">
            <span className="material-symbols-outlined">clinical_notes</span>
            <span className="text-label-md font-label-md">Patient Records</span>
          </a>
          <a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant/80 hover:bg-primary-container/10 transition-all" href="#">
            <span className="material-symbols-outlined">psychology</span>
            <span className="text-label-md font-label-md">AI Analysis</span>
          </a>
          <a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant/80 hover:bg-primary-container/10 transition-all" href="#">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-label-md font-label-md">Schedule</span>
          </a>
          <a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant/80 hover:bg-primary-container/10 transition-all" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-label-md font-label-md">Settings</span>
          </a>
          <div className="mt-8 px-6">
            <button className="w-full py-3 bg-primary-container text-white rounded-DEFAULT font-label-md shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">add</span>
              New Scan
            </button>
          </div>
        </nav>
        <div className="px-6 py-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
              <img alt="Clinic Admin" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150" />
            </div>
            <div>
              <p className="text-label-md font-label-md text-primary">Dr. Sarah Miller</p>
              <p className="text-label-sm font-label-sm text-on-surface-variant/60">Clinic Director</p>
            </div>
          </div>
          <a className="flex items-center gap-4 py-2 text-on-surface-variant/80 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined">help</span>
            <span className="text-label-md font-label-md">Support</span>
          </a>
          <a className="flex items-center gap-4 py-2 text-on-surface-variant/80 hover:text-error transition-colors" href="#">
            <span className="material-symbols-outlined">logout</span>
            <span className="text-label-md font-label-md">Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 overflow-y-auto bg-surface-container-lowest flex flex-col h-screen">
        {/* TopAppBar */}
        <header className="sticky top-0 z-40 bg-surface/40 backdrop-blur-xl border-b border-white/20 shadow-sm px-container-padding py-4 flex justify-between items-center">
          <div className="flex items-center gap-gutter">
            <h2 className="text-headline-md font-headline-md font-bold text-primary">Clinic Dashboard</h2>
            <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/30">
              <span className="material-symbols-outlined text-outline text-xl">search</span>
              <input className="bg-transparent border-none focus:ring-0 outline-none text-body-md placeholder:text-outline w-64" placeholder="Search patient ID or scan..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-stack-lg">
            <button className="p-2 text-on-surface-variant hover:bg-surface-variant rounded-full transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <div className="h-8 w-[1px] bg-outline-variant/50"></div>
            <button className="bg-primary-container text-white px-6 py-2.5 rounded-full font-label-md active:scale-95 transition-transform">
              Book Appointment
            </button>
          </div>
        </header>
        
        <div className="p-container-padding max-w-7xl mx-auto space-y-gutter w-full">
          {/* KPI Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="glass-card p-stack-lg rounded-lg shadow-[0px_10px_30px_rgba(0,82,204,0.08)]">
              <div className="flex justify-between items-start mb-2">
                <div className="p-2 bg-primary-fixed rounded-md">
                  <span className="material-symbols-outlined text-primary">calendar_today</span>
                </div>
                <span className="text-secondary font-label-sm bg-secondary-fixed/20 px-2 py-0.5 rounded-full">+12%</span>
              </div>
              <p className="text-on-surface-variant text-label-sm">Total Appointments</p>
              <h3 className="text-headline-md font-headline-md font-bold text-primary">1,284</h3>
            </div>
            <div className="glass-card p-stack-lg rounded-lg shadow-[0px_10px_30px_rgba(0,82,204,0.08)]">
              <div className="flex justify-between items-start mb-2">
                <div className="p-2 bg-secondary-fixed rounded-md">
                  <span className="material-symbols-outlined text-on-secondary-container">person_add</span>
                </div>
                <span className="text-secondary font-label-sm bg-secondary-fixed/20 px-2 py-0.5 rounded-full">+5.4%</span>
              </div>
              <p className="text-on-surface-variant text-label-sm">New Patients</p>
              <h3 className="text-headline-md font-headline-md font-bold text-primary">482</h3>
            </div>
            <div className="glass-card p-stack-lg rounded-lg shadow-[0px_10px_30px_rgba(0,82,204,0.08)]">
              <div className="flex justify-between items-start mb-2">
                <div className="p-2 bg-tertiary-fixed rounded-md">
                  <span className="material-symbols-outlined text-tertiary">auto_awesome</span>
                </div>
                <span className="text-secondary font-label-sm bg-secondary-fixed/20 px-2 py-0.5 rounded-full">+22%</span>
              </div>
              <p className="text-on-surface-variant text-label-sm">AI Conversions</p>
              <h3 className="text-headline-md font-headline-md font-bold text-primary">89.4%</h3>
            </div>
            <div className="glass-card p-stack-lg rounded-lg shadow-[0px_10px_30px_rgba(0,82,204,0.08)]">
              <div className="flex justify-between items-start mb-2">
                <div className="p-2 bg-primary-container/10 rounded-md">
                  <span className="material-symbols-outlined text-primary">payments</span>
                </div>
                <span className="text-secondary font-label-sm bg-secondary-fixed/20 px-2 py-0.5 rounded-full">+8.1%</span>
              </div>
              <p className="text-on-surface-variant text-label-sm">Monthly Revenue</p>
              <h3 className="text-headline-md font-headline-md font-bold text-primary">$142k</h3>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            {/* Charts Section */}
            <div className="lg:col-span-2 space-y-gutter">
              {/* Area Chart Placeholder */}
              <div className="glass-card p-stack-lg rounded-lg">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="text-label-md font-label-md font-bold text-primary uppercase tracking-wide">Appointment Trends</h4>
                    <p className="text-on-surface-variant text-label-sm">Booking volume over the last 30 days</p>
                  </div>
                  <select className="bg-surface-container text-label-sm border-none rounded-full px-4 py-2 outline-none focus:ring-1 ring-primary-container cursor-pointer">
                    <option>Last 30 Days</option>
                    <option>Last Quarter</option>
                  </select>
                </div>
                <div className="h-64 flex items-end justify-between gap-2 px-2">
                  <div className="w-full bg-primary-container/10 rounded-t-sm relative group h-1/2">
                    <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-3/4 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="w-full bg-primary-container/10 rounded-t-sm relative group h-2/3">
                    <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-1/2 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="w-full bg-primary-container/10 rounded-t-sm relative group h-3/4">
                    <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-4/5 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="w-full bg-primary-container/10 rounded-t-sm relative group h-1/2">
                    <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-2/3 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="w-full bg-primary-container/10 rounded-t-sm relative group h-2/3">
                    <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-3/4 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="w-full bg-primary-container/10 rounded-t-sm relative group h-full">
                    <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-5/6 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="w-full bg-primary-container/10 rounded-t-sm relative group h-3/4">
                    <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-2/3 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-4 text-label-sm text-outline px-2">
                  <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
                </div>
              </div>

              {/* AI Conversations Table */}
              <div className="glass-card rounded-lg overflow-hidden">
                <div className="p-stack-lg border-b border-outline-variant/30 flex justify-between items-center">
                  <h4 className="text-label-md font-label-md font-bold text-primary uppercase tracking-wide">Recent AI Diagnostics</h4>
                  <button className="text-primary text-label-sm font-label-sm hover:underline">View All Analysis</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-surface-container-high/40 text-on-surface-variant text-label-sm">
                      <tr>
                        <th className="px-stack-lg py-3 font-semibold">Patient</th>
                        <th className="px-stack-lg py-3 font-semibold">Diagnosis Type</th>
                        <th className="px-stack-lg py-3 font-semibold">AI Confidence</th>
                        <th className="px-stack-lg py-3 font-semibold">Sentiment</th>
                        <th className="px-stack-lg py-3 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20">
                      <tr className="hover:bg-primary-container/5 transition-colors">
                        <td className="px-stack-lg py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary text-xs font-bold">JD</div>
                            <span className="text-body-md font-medium">Jane Doe</span>
                          </div>
                        </td>
                        <td className="px-stack-lg py-4 text-body-md">Molar Cavity Detection</td>
                        <td className="px-stack-lg py-4">
                          <div className="w-full bg-surface-container rounded-full h-1.5 max-w-[80px]">
                            <div className="bg-secondary h-1.5 rounded-full" style={{ width: "98%" }}></div>
                          </div>
                        </td>
                        <td className="px-stack-lg py-4">
                          <span className="px-2 py-1 bg-secondary-fixed/20 text-secondary text-label-sm rounded-full">Positive</span>
                        </td>
                        <td className="px-stack-lg py-4">
                          <span className="flex items-center gap-1.5 text-label-sm text-secondary">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            Verified
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-primary-container/5 transition-colors">
                        <td className="px-stack-lg py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary text-xs font-bold">MS</div>
                            <span className="text-body-md font-medium">Michael Smith</span>
                          </div>
                        </td>
                        <td className="px-stack-lg py-4 text-body-md">Gum Recession Scan</td>
                        <td className="px-stack-lg py-4">
                          <div className="w-full bg-surface-container rounded-full h-1.5 max-w-[80px]">
                            <div className="bg-secondary h-1.5 rounded-full" style={{ width: "82%" }}></div>
                          </div>
                        </td>
                        <td className="px-stack-lg py-4">
                          <span className="px-2 py-1 bg-outline-variant/20 text-on-surface-variant text-label-sm rounded-full">Neutral</span>
                        </td>
                        <td className="px-stack-lg py-4">
                          <span className="flex items-center gap-1.5 text-label-sm text-primary">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            Reviewing
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Schedule & Demographics */}
            <div className="space-y-gutter">
              {/* Donut Chart Placeholder */}
              <div className="glass-card p-stack-lg rounded-lg">
                <h4 className="text-label-md font-label-md font-bold text-primary uppercase tracking-wide mb-6">Patient Demographics</h4>
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full border-[12px] border-primary/10"></div>
                  <div className="absolute inset-0 rounded-full border-[12px] border-primary border-t-transparent border-l-transparent" style={{ transform: "rotate(45deg)" }}></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-headline-md font-bold text-primary">64%</span>
                    <span className="text-label-sm text-on-surface-variant">Active</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-label-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span>Age 18-35</span>
                    </div>
                    <span className="font-bold">42%</span>
                  </div>
                  <div className="flex justify-between items-center text-label-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-secondary"></span>
                      <span>Age 36-55</span>
                    </div>
                    <span className="font-bold">38%</span>
                  </div>
                  <div className="flex justify-between items-center text-label-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                      <span>Age 55+</span>
                    </div>
                    <span className="font-bold">20%</span>
                  </div>
                </div>
              </div>

              {/* Upcoming Schedule */}
              <div className="glass-card p-stack-lg rounded-lg">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-label-md font-label-md font-bold text-primary uppercase tracking-wide">Today's Schedule</h4>
                  <span className="text-label-sm text-outline">Nov 14</span>
                </div>
                <div className="space-y-4">
                  {/* Schedule Item */}
                  <div className="flex gap-4 items-start p-3 hover:bg-white/40 rounded-DEFAULT transition-colors cursor-pointer group">
                    <div className="text-label-sm text-on-surface-variant font-bold w-12 pt-1">
                      09:00
                    </div>
                    <div className="flex-1 border-l-2 border-primary-container pl-4">
                      <p className="text-body-md font-semibold text-primary group-hover:text-primary-container transition-colors">Robert Wilson</p>
                      <p className="text-label-sm text-on-surface-variant/70">Orthodontic Checkup</p>
                      <div className="flex gap-2 mt-2">
                        <span className="px-2 py-0.5 bg-primary-fixed text-on-primary-fixed text-[10px] font-bold rounded-full">SCAN READY</span>
                      </div>
                    </div>
                  </div>
                  {/* Schedule Item */}
                  <div className="flex gap-4 items-start p-3 hover:bg-white/40 rounded-DEFAULT transition-colors cursor-pointer group">
                    <div className="text-label-sm text-on-surface-variant font-bold w-12 pt-1">
                      10:30
                    </div>
                    <div className="flex-1 border-l-2 border-secondary pl-4">
                      <p className="text-body-md font-semibold text-primary group-hover:text-primary-container transition-colors">Emily Zhang</p>
                      <p className="text-label-sm text-on-surface-variant/70">Root Canal Consult</p>
                      <div className="flex gap-2 mt-2">
                        <span className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold rounded-full">HIGH PRIORITY</span>
                      </div>
                    </div>
                  </div>
                  {/* Schedule Item */}
                  <div className="flex gap-4 items-start p-3 hover:bg-white/40 rounded-DEFAULT transition-colors cursor-pointer group">
                    <div className="text-label-sm text-on-surface-variant font-bold w-12 pt-1">
                      11:15
                    </div>
                    <div className="flex-1 border-l-2 border-outline-variant pl-4">
                      <p className="text-body-md font-semibold text-primary group-hover:text-primary-container transition-colors">Arthur P.</p>
                      <p className="text-label-sm text-on-surface-variant/70">Cleaning & Polish</p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 py-2 border border-outline-variant rounded-full text-label-sm font-semibold hover:bg-surface-container transition-colors">
                  View Full Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="w-full px-container-padding py-12 grid grid-cols-1 md:grid-cols-3 gap-gutter bg-surface-container-highest border-t border-outline-variant mt-auto">
          <div className="space-y-4">
            <h3 className="text-headline-md font-headline-md font-bold text-primary">Dentech AI</h3>
            <p className="text-body-md text-on-surface-variant max-w-xs">Revolutionizing dental care through clinical precision and artificial intelligence.</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-label-sm font-bold text-primary uppercase tracking-widest mb-2">Platform</p>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Clinic Locations</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Newsletter</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Terms of Service</a>
          </div>
          <div className="space-y-6">
            <p className="text-label-sm font-bold text-primary uppercase tracking-widest">Connect</p>
            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary cursor-pointer hover:bg-primary-container hover:text-white transition-all">
                <span className="material-symbols-outlined">share</span>
              </span>
              <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary cursor-pointer hover:bg-primary-container hover:text-white transition-all">
                <span className="material-symbols-outlined">mail</span>
              </span>
            </div>
            <p className="text-label-sm text-on-surface-variant/70">© 2024 Dentech AI. Developed by Zaryab.</p>
          </div>
        </footer>
      </main>

      {/* Mobile Navigation Shell */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/80 backdrop-blur-xl border-t border-white/20 flex justify-around py-4 z-50">
        <a className="flex flex-col items-center gap-1 text-primary" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          <span className="text-[10px] font-bold">Home</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
          <span className="material-symbols-outlined">clinical_notes</span>
          <span className="text-[10px]">Records</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
          <span className="material-symbols-outlined">calendar_month</span>
          <span className="text-[10px]">Schedule</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px]">Settings</span>
        </a>
      </nav>
    </div>
  );
}
