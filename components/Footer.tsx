
import React from 'react';
import { Github, Twitter, Heart } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`py-12 border-t transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img 
              src="https://coffe.ethioall.com/wp-content/uploads/2025/12/icon-256x256-1.png" 
              alt="EthioTime" 
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-xl font-bold">EthioTime</span>
          </div>

          <div className={`flex items-center gap-8 text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <a href="https://github.com/ethioall/" target="_blank" rel="noopener" className="hover:text-yellow-500 transition-colors">Documentation</a>
            <a href="https://github.com/ethioall/" target="_blank" rel="noopener" className="hover:text-yellow-500 transition-colors">Support</a>
            <a href="https://ethioall.com/donate_me" target="_blank" rel="noopener" className="hover:text-yellow-500 transition-colors">Donate</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-200'}`}>
              <Twitter size={20} />
            </a>
            <a href="https://github.com/ethioall/" target="_blank" className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-200'}`}>
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} EthioTime Plugin. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500 fill-current" /> by <a href="https://github.com/ethioall/" className="hover:text-yellow-500">ethioall</a>
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
