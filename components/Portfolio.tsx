import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { portfolioProjects } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { X, ExternalLink, Github, BarChart, FileText } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', ...Object.values(ProjectCategory).filter(c => c !== ProjectCategory.GEN_AI)];

  const filteredProjects = activeCategory === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Selected Works</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={setSelectedProject}
          />
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div 
            className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-slate-800 rounded-full text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="h-64 sm:h-80 w-full relative">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-600 text-white rounded-full mb-3">
                    {selectedProject.category}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white">{selectedProject.title}</h3>
              </div>
            </div>

            <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                   <h4 className="text-xl font-semibold text-white mb-2">Project Overview</h4>
                   <p className="text-slate-300 leading-relaxed text-lg">{selectedProject.description}</p>
                </div>
                
                {selectedProject.longDescription && (
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">The Details</h4>
                    <p className="text-slate-400 leading-relaxed">{selectedProject.longDescription}</p>
                  </div>
                )}
                
                {selectedProject.impact && (
                  <div className="bg-primary-900/20 border border-primary-500/20 p-4 rounded-lg">
                    <h4 className="text-primary-400 font-semibold mb-1 flex items-center gap-2">
                       <BarChart className="w-4 h-4" /> Business Impact
                    </h4>
                    <p className="text-slate-200">{selectedProject.impact}</p>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                 <div>
                    <h5 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Tech Stack</h5>
                    <div className="flex flex-wrap gap-2">
                       {selectedProject.technologies.map(t => (
                         <span key={t} className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md text-slate-300 text-sm">
                           {t}
                         </span>
                       ))}
                    </div>
                 </div>

                 {/* Render Multiple Resources if available */}
                 {(selectedProject.resources && selectedProject.resources.length > 0) ? (
                   <div className="pt-6 border-t border-slate-800 space-y-3">
                     <h5 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Resources</h5>
                     {selectedProject.resources.map((res, idx) => (
                       <a 
                         key={idx}
                         href={res.url}
                         target="_blank"
                         rel="noreferrer"
                         className={`flex items-center justify-center w-full py-3 font-bold rounded-lg transition-colors ${idx === 0 ? 'bg-white text-slate-900 hover:bg-slate-200' : 'bg-transparent border border-slate-600 text-white hover:bg-slate-800'}`}
                       >
                         {res.label.toLowerCase().includes('github') || res.label.toLowerCase().includes('code') ? <Github className="w-4 h-4 mr-2" /> : 
                          res.label.toLowerCase().includes('report') || res.label.toLowerCase().includes('doc') ? <FileText className="w-4 h-4 mr-2" /> :
                          <ExternalLink className="w-4 h-4 mr-2" />}
                         {res.label}
                       </a>
                     ))}
                   </div>
                 ) : selectedProject.link ? (
                   // Fallback for deprecated link field
                   <div className="pt-6 border-t border-slate-800">
                     <a 
                       href={selectedProject.link}
                       target="_blank"
                       rel="noreferrer"
                       className="flex items-center justify-center w-full py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors"
                     >
                       <ExternalLink className="w-4 h-4 mr-2" />
                       View Project
                     </a>
                   </div>
                 ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
