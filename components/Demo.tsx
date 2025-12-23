
import React from 'react';
import { Camera, ExternalLink, Layout, Calendar, Clock, Smartphone } from 'lucide-react';

interface DemoProps {
  isDarkMode: boolean;
}

export const Demo: React.FC<DemoProps> = ({ isDarkMode }) => {
  const screenshots = [
    { url: "https://coffe.ethioall.com/wp-content/uploads/2025/12/screenshot-1.png", title: "Shortcode Generator", desc: "Easily generate custom calendar components." },
    { url: "https://coffe.ethioall.com/wp-content/uploads/2025/12/screenshot-2.png", title: "Live Frontend Clock", desc: "Native Ethiopian time display for your users." },
    { url: "https://coffe.ethioall.com/wp-content/uploads/2025/12/screenshot-3.png", title: "Template Engine", desc: "Design your own date formats with ease." },
    { url: "https://coffe.ethioall.com/wp-content/uploads/2025/12/screenshot-4.png", title: "Admin Widget", desc: "Stay updated directly from your dashboard." },
  ];

  return (
    <section id="showcase" className={`py-24 transition-colors duration-300 ${isDarkMode ? 'bg-slate-900/50' : 'bg-slate-100/50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Product Showcase</h2>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto`}>
            The plugin is currently under review by WordPress.org. Here is a preview of the interface and frontend outputs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className={`p-8 rounded-3xl border transition-all ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'} shadow-2xl relative overflow-hidden`}>
              <div className="absolute top-0 right-0 p-4">
                 <span className="bg-yellow-500/10 text-yellow-500 text-[10px] font-bold px-2 py-1 rounded">OUTPUT PREVIEW</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-col">
                  <span className="text-4xl md:text-6xl font-black font-ethiopic text-yellow-500">
                    ታኅሣሥ 5, 2018
                  </span>
                  {/* Updated line as requested: Day Date/Month/Year */}
                  <span className="text-xl md:text-2xl font-ethiopic text-slate-500 mt-2">
                    እሑድ 5/4/2018
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-800/20">
                  <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
                    <span className="text-slate-500 block mb-1 uppercase tracking-widest text-[10px]">Shortcode Output</span>
                    <code className="text-xs font-bold text-yellow-500">[et-dt-shortcode slug="date"]</code>
                  </div>
                  <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
                    <span className="text-slate-500 block mb-1 uppercase tracking-widest text-[10px]">Real-time Status</span>
                    <span className="text-xs font-bold text-green-500 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> Localized Correctly
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               {screenshots.slice(0, 2).map((s, idx) => (
                 <div key={idx} className="group relative rounded-xl overflow-hidden border border-slate-800 bg-black">
                    <img src={s.url} alt={s.title} className="aspect-video object-cover transition-transform group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-4">
                       <p className="text-[10px] font-black text-white uppercase tracking-wider">{s.title}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:pl-8 space-y-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <Camera className="text-blue-500" /> Seamless WordPress Integration
              </h3>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed text-lg`}>
                Designed to feel like a core part of your WordPress dashboard. EthioTime provides a native experience for both site administrators and frontend visitors.
              </p>
            </div>

            <div className="space-y-4">
              {screenshots.map((s, idx) => (
                <div key={idx} className={`flex gap-5 p-5 rounded-2xl border transition-all ${isDarkMode ? 'bg-slate-900/50 border-slate-800 hover:bg-slate-900 hover:border-slate-700' : 'bg-white border-slate-200 hover:bg-slate-50 shadow-sm'}`}>
                  <div className="w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-slate-800/20">
                    <img src={s.url} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1">{s.title}</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href="https://github.com/ethioall/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold transition-all transform hover:-translate-y-0.5">
                Check Progress on GitHub <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
