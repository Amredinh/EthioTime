
import React from 'react';
import { Sun, Moon, Github } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${isDarkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://coffe.ethioall.com/wp-content/uploads/2025/12/icon-128x128-1.png" 
              alt="EthioTime Logo" 
              className="w-10 h-10 rounded-xl shadow-lg"
            />
            <span className="text-2xl font-bold tracking-tight">Ethio<span className="text-yellow-500">Time</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#features" className="hover:text-yellow-500 transition-colors">Features</a>
            <a href="#showcase" className="hover:text-yellow-500 transition-colors">Preview</a>
            <a href="#installation" className="hover:text-yellow-500 transition-colors">Setup</a>
            <a href="https://github.com/ethioall/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors flex items-center gap-1">
              <Github size={16} /> GitHub
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-slate-100 text-slate-600'}`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="https://ethioall.com/donate_me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-950 px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md active:scale-95"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
