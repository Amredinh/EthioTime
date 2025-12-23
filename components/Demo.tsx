
import React from 'react';
import { Camera, ExternalLink } from 'lucide-react';

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
            A first look at the administrative interface and frontend outputs. Designed for seamless integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className={`p-8 rounded-3xl border transition-all ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'} shadow-2xl relative overflow-hidden`}>
              <div className="absolute top-0 right-0 p-4">
                 <span className="bg-yellow-500/10 text-yellow-500 text-[10px] font-bold px-2 py-1 rounded">UI PREVIEW</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-4xl md:text-6xl font-black font-ethiopic text-yellow-500">
                    ታኅሣሥ 5, 2018
                  </span>
                  <span className="text-xl md:text-2xl font-ethiopic text-slate-500 mt-2">
                    እሑድ 5/4/2018
                  </span>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-800/20">
                  <div className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm">
                    <span className="text-slate-500 block mb-1 uppercase tracking-widest text-[10px]">Formatted Example</span>
                    <span className="font-bold">Sunday 05/04/2018</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-slate-500 italic">"The format above shows the requested Day Date/Month/Year style available via our shortcode engine."</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               {screenshots.slice(0, 2).map((s, idx) => (
                 <div key={idx} className="group relative rounded-xl overflow-hidden border border-slate-800 cursor-zoom-in">
                    <img src={s.url} alt={s.title} className="aspect-video object-cover transition-transform group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                       <p className="text-[10px] font-bold text-white uppercase">{s.title}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:pl-12 space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                <Camera className="text-blue-500" /> Professional Admin UI
              </h3>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>
                Manage your shortcodes and templates with a clean, native-feeling WordPress interface. No complex coding required—just select, save, and paste.
              </p>
            </div>

            <div className="grid gap-6">
              {screenshots.map((s, idx) => (
                <div key={idx} className={`flex gap-4 p-4 rounded-2xl border transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-800 hover:bg-slate-800' : 'bg-white border-slate-200 hover:bg-slate-50'}`}>
                  <img src={s.url} alt={s.title} className="w-24 h-16 rounded-lg object-cover flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">{s.title}</h4>
                    <p className="text-xs text-slate-500">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a href="https://github.com/ethioall/" target="_blank" className="inline-flex items-center gap-2 text-yellow-500 font-bold hover:underline">
                Follow Development on GitHub <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
