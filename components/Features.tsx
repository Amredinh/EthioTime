
import React from 'react';
import { Calendar, Repeat, Zap, Edit3, Grid, Code } from 'lucide-react';

interface FeaturesProps {
  isDarkMode: boolean;
}

export const Features: React.FC<FeaturesProps> = ({ isDarkMode }) => {
  const features = [
    {
      title: "Calendar Conversion",
      description: "Seamlessly convert dates between Gregorian and Ethiopian (Ge'ez) systems with pinpoint accuracy.",
      icon: <Repeat className="w-8 h-8 text-yellow-500" />,
      color: "bg-yellow-500/10"
    },
    {
      title: "Shortcode Generator",
      description: "Manage custom display strings from your admin dashboard and drop them anywhere with simple shortcodes.",
      icon: <Grid className="w-8 h-8 text-blue-500" />,
      color: "bg-blue-500/10"
    },
    {
      title: "Live Clock",
      description: "Real-time updating Ethiopian clock for your frontend, giving users immediate local context.",
      icon: <Zap className="w-8 h-8 text-green-500" />,
      color: "bg-green-500/10"
    },
    {
      title: "Custom Templates",
      description: "Design outputs using tokens like [Month Amharic] or [Day Amharic] for perfect branding integration.",
      icon: <Edit3 className="w-8 h-8 text-red-500" />,
      color: "bg-red-500/10"
    },
    {
      title: "Dashboard Widget",
      description: "Keep track of Ethiopian dates right from your WordPress admin landing page.",
      icon: <Calendar className="w-8 h-8 text-purple-500" />,
      color: "bg-purple-500/10"
    },
    {
      title: "Custom CSS",
      description: "Granular control over styling. Add CSS that only loads when your Ethiopian date elements are present.",
      icon: <Code className="w-8 h-8 text-orange-500" />,
      color: "bg-orange-500/10"
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto`}>
            Everything you need to integrate the Ethiopian calendar system into your modern WordPress workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${isDarkMode ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300'}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
