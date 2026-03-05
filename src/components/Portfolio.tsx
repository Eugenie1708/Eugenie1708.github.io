import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { portfolioProjects } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { X, ExternalLink, Github, BarChart, FileText } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', ...Object.values(ProjectCategory).filter(c => c !== ProjectCategory.GEN_AI)];

  const filteredProjects =
    activeCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#733F34] mb-4">Selected Works</h2>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  'px-4 py-2 rounded-full text-sm font-semibold transition-all',
                  'border',
                  isActive
                    ? 'bg-[#D99441] text-white border-[#D99441] shadow-md shadow-[#D99441]/25'
                    : 'bg-[#FBF7F3] text-[#733F34]/80 border-[#BF9F93]/50 hover:border-[#D99441]/60 hover:bg-white',
                ].join(' ')}
              >
                {cat}
              </button>
            );
          })}
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#733F34]/55 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#FBF7F3] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#BF9F93]/60 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-white/70 hover:bg-white rounded-full text-[#733F34] transition-colors z-10 border border-[#BF9F93]/50"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="h-64 sm:h-80 w-full relative">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />

              {/* softer overlay to match beige theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#733F34]/65 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#FBF7F3]/95 text-[#733F34] border border-[#BF9F93]/60 rounded-full mb-3">
                  {selectedProject.category}
                </span>

                <h3 className="text-3xl sm:text-4xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-[#733F34] mb-2">Project Overview</h4>
                  <p className="text-[#733F34]/80 leading-relaxed text-lg">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.longDescription && (
                  <div>
                    <h4 className="text-xl font-bold text-[#733F34] mb-2">The Details</h4>
                    <p className="text-[#733F34]/70 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                )}

                {selectedProject.impact && (
                  <div className="bg-white/60 border border-[#D99441]/35 p-4 rounded-xl">
                    <h4 className="text-[#BF7636] font-bold mb-1 flex items-center gap-2">
                      <BarChart className="w-4 h-4" /> Business Impact
                    </h4>
                    <p className="text-[#733F34]/85">{selectedProject.impact}</p>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="text-sm font-bold text-[#733F34]/60 uppercase tracking-wider mb-3">
                    Tech Stack
                  </h5>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 bg-white/60 border border-[#BF9F93]/45 rounded-md text-[#733F34]/80 text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                {(selectedProject.resources && selectedProject.resources.length > 0) ? (
                  <div className="pt-6 border-t border-[#BF9F93]/45 space-y-3">
                    <h5 className="text-sm font-bold text-[#733F34]/60 uppercase tracking-wider">
                      Resources
                    </h5>

                    {selectedProject.resources.map((res, idx) => {
                      const isPrimary = idx === 0;

                      return (
                        <a
                          key={idx}
                          href={res.url}
                          target="_blank"
                          rel="noreferrer"
                          className={[
                            'flex items-center justify-center w-full py-3 font-bold rounded-lg transition-colors',
                            'border',
                            isPrimary
                              ? 'bg-[#D99441] text-white border-[#D99441] hover:bg-[#BF7636]'
                              : 'bg-white/60 text-[#733F34] border-[#BF9F93]/55 hover:bg-white',
                          ].join(' ')}
                        >
                          {res.label.toLowerCase().includes('github') || res.label.toLowerCase().includes('code') ? (
                            <Github className="w-4 h-4 mr-2" />
                          ) : res.label.toLowerCase().includes('report') || res.label.toLowerCase().includes('doc') ? (
                            <FileText className="w-4 h-4 mr-2" />
                          ) : (
                            <ExternalLink className="w-4 h-4 mr-2" />
                          )}
                          {res.label}
                        </a>
                      );
                    })}
                  </div>
                ) : selectedProject.link ? (
                  <div className="pt-6 border-t border-[#BF9F93]/45">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-full py-3 bg-[#D99441] text-white font-bold rounded-lg hover:bg-[#BF7636] transition-colors border border-[#D99441]"
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
