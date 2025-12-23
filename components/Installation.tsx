
import React from 'react';

interface InstallationProps {
  isDarkMode: boolean;
}

export const Installation: React.FC<InstallationProps> = ({ isDarkMode }) => {
  const steps = [
    {
      title: "Download & Install",
      description: "Search for 'EthioTime' in the WP plugin directory or upload the ZIP file manually via the Plugins menu."
    },
    {
      title: "Activate",
      description: "Once uploaded, click 'Activate' to enable the calendar logic and conversion engine on your site."
    },
    {
      title: "Configure",
      description: "Head to 'Settings > EthioTime' to set up your preferred date formats and template tokens."
    },
    {
      title: "Deploy",
      description: "Copy your generated shortcodes and paste them into pages, posts, or sidebar widgets."
    }
  ];

  return (
    <section id="installation" className={`py-24 ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Get Started in Minutes</h2>
            <p className={`text-lg mb-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Designed with a developer-first approach, EthioTime is incredibly easy to set up and customize. Whether you need a simple clock or a complex multi-date template, we've got you covered.
            </p>
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-slate-950 ${isDarkMode ? 'bg-yellow-500' : 'bg-yellow-400'}`}>
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{step.title}</h4>
                    <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className={`rounded-3xl border shadow-2xl overflow-hidden ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
               <div className="bg-slate-800/50 p-3 border-b border-slate-800 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">WordPress Admin Dashboard</span>
               </div>
               <div className="p-6 space-y-6">
                 <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                    <div className="w-12 h-12 rounded bg-slate-800"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-slate-800 rounded w-1/2"></div>
                      <div className="h-3 bg-slate-800 rounded w-1/4 opacity-50"></div>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                   <div className="h-32 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-500 flex-col gap-2">
                     <span className="text-xs uppercase font-bold opacity-70">Shortcodes</span>
                     <span className="text-2xl font-black">12 Active</span>
                   </div>
                   <div className="h-32 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center text-green-500 flex-col gap-2">
                     <span className="text-xs uppercase font-bold opacity-70">Live Clock</span>
                     <span className="text-2xl font-black italic">ON</span>
                   </div>
                 </div>
                 <div className="h-40 bg-slate-800/30 rounded-xl p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                       <span className="text-xs font-bold text-slate-500">Custom Template Builder</span>
                       <div className="px-2 py-1 bg-blue-500 text-[10px] rounded font-bold">PRO</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-slate-700 rounded w-full"></div>
                      <div className="h-2 bg-slate-700 rounded w-full"></div>
                      <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                    </div>
                    <button className="w-full py-2 bg-slate-700 hover:bg-slate-600 transition-colors rounded text-xs font-bold">Save Settings</button>
                 </div>
               </div>
            </div>
            {/* Visual Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500/20 blur-3xl rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-500/20 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
