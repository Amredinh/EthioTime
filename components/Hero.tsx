
import React from 'react';
import { ArrowRight, CheckCircle, Clock, Layout, Calendar, Github } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className={`absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 ${isDarkMode ? 'bg-yellow-500' : 'bg-yellow-200'}`} />
        <div className={`absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 ${isDarkMode ? 'bg-green-500' : 'bg-green-200'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Under Review by WordPress.org
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Modern Ethiopian Calendar <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-green-600">
            for your WordPress Site
          </span>
        </h1>

        <p className={`max-w-2xl mx-auto text-lg md:text-xl mb-10 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Bridge the gap between Gregorian and Ethiopian (Ge'ez) time. EthioTime provides robust date conversion, live clocks, and custom templates seamlessly integrated into your workflow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://github.com/ethioall/" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-black text-white font-bold rounded-xl shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <Github size={20} /> View on GitHub
          </a>
          <a href="#showcase" className={`w-full sm:w-auto px-8 py-4 font-bold rounded-xl border transition-all ${isDarkMode ? 'border-slate-800 hover:bg-slate-900 text-white' : 'border-slate-200 hover:bg-slate-100 text-slate-900'}`}>
            Explore Preview
          </a>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-red-500 to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <img 
              src="https://coffe.ethioall.com/wp-content/uploads/2025/12/banner-772x250-1.png" 
              alt="EthioTime Banner" 
              className="relative rounded-2xl shadow-2xl w-full object-cover border border-slate-800"
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-slate-800/20 pt-10">
          {[
            { label: 'Real-time Clock', icon: <Clock className="w-5 h-5 text-green-500" /> },
            { label: 'Shortcode Builder', icon: <Layout className="w-5 h-5 text-yellow-500" /> },
            { label: 'Exact Conversion', icon: <CheckCircle className="w-5 h-5 text-red-500" /> },
            { label: 'WP Dashboard', icon: <Calendar className="w-5 h-5 text-blue-500" /> },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
                {item.icon}
              </div>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
