
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQProps {
  isDarkMode: boolean;
}

export const FAQ: React.FC<FAQProps> = ({ isDarkMode }) => {
  const faqs = [
    {
      question: "What does the EthioTime plugin do?",
      answer: "EthioTime adds functionality for displaying and converting to the Ethiopian calendar system within WordPress, using shortcodes, a live clock, and a dashboard widget."
    },
    {
      question: "Can I display both Gregorian and Ethiopian dates together?",
      answer: "Yes. You can create custom templates that show both calendar systems side by side using the template tokens available in the plugin like [Month Amharic]."
    },
    {
      question: "Does EthioTime support leap years?",
      answer: "Absolutely. The plugin correctly handles Ethiopian leap years (Pagume 6) according to the precise astronomical calculations of the Ge'ez calendar."
    },
    {
      question: "Can I use EthioTime in widgets?",
      answer: "Yes. Any shortcode created with EthioTime can be used in WordPress text widgets, posts, pages, or theme files directly via PHP."
    },
    {
        question: "Is it compatible with PHP 8+?",
        answer: "Yes, EthioTime is tested and optimized for PHP 7.4 through 8.2+ environments for maximum performance."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-800/10 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {openIndex === idx ? <Minus className="text-yellow-500 flex-shrink-0" /> : <Plus className="text-yellow-500 flex-shrink-0" />}
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className={`p-6 pt-0 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
