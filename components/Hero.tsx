import React from 'react';
import { Database, BarChart3, BrainCircuit, Download } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-600 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
              Available for Internships
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              {profileData.tagline.split(' ').slice(0, 3).join(' ')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">{profileData.tagline.split(' ').slice(3).join(' ')}</span>
            </h1>
          </div>
          
          <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
            {profileData.about}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-primary-500/25 flex items-center">
              View My Work
              <BarChart3 className="ml-2 w-5 h-5" />
            </button>
            <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-semibold transition-all flex items-center">
              Download Resume
              <Download className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-8 pt-4 border-t border-slate-800/50">
            <div className="flex items-center gap-2 text-slate-400">
               <Database className="w-5 h-5 text-primary-400" />
               <span className="text-sm font-medium">Data Engineering</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
               <BarChart3 className="w-5 h-5 text-purple-400" />
               <span className="text-sm font-medium">Visualization</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
               <BrainCircuit className="w-5 h-5 text-green-400" />
               <span className="text-sm font-medium">Generative AI</span>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
           <div className="relative z-10 bg-slate-900 p-2 rounded-2xl border border-slate-800 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
              <img 
                src="https://picsum.photos/600/600?grayscale" 
                alt="Analyst Workspace" 
                className="rounded-xl w-full h-auto opacity-80"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 backdrop-blur-md p-4 rounded-lg border border-slate-800">
                 <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono text-primary-400">ANALYSIS_COMPLETE</span>
                    <span className="text-xs text-slate-500">Just now</span>
                 </div>
                 <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-500 w-[85%] animate-pulse"></div>
                 </div>
                 <div className="mt-2 flex justify-between text-xs text-slate-400">
                    <span>Model Accuracy</span>
                    <span className="text-white font-bold">98.4%</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
