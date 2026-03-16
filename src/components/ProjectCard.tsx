import React from 'react';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="
        group relative
        bg-[#FBF7F3] dark:bg-gray-800
        rounded-2xl overflow-hidden
        border border-[#BF9F93]/45 dark:border-gray-600
        hover:border-[#D99441]/60
        transition-all duration-300 cursor-pointer
        shadow-sm hover:shadow-lg
        flex flex-col h-full
      "
    >
      {/* Image */}
      <div className="h-48 overflow-hidden relative">
        {/* Softer overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#733F34]/45 to-transparent opacity-60 z-10" />

        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category pill */}
        <div className="absolute top-3 left-3 z-20">
          <span className="px-3 py-1 text-xs font-semibold tracking-wide bg-[#FBF7F3]/95 dark:bg-gray-700 text-[#733F34] dark:text-[#F5EEE8] rounded-full border border-[#BF9F93]/50 dark:border-gray-600 backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-[#733F34] dark:text-[#F5EEE8] mb-2 group-hover:text-[#BF7636] transition-colors">
          {project.title}
        </h3>

        {project.completedDate && (
          <p className="text-sm font-semibold text-[#BF7636] dark:text-[#F2B77A] mb-3">
            {project.completedDate}
          </p>
        )}

        <p className="text-[#733F34]/70 dark:text-[#F5EEE8]/70 text-sm mb-4 line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs text-[#733F34]/75 dark:text-[#F5EEE8]/75 bg-white/60 dark:bg-gray-700 px-2 py-1 rounded border border-[#BF9F93]/40 dark:border-gray-600"
            >
              {tech}
            </span>
          ))}

          {project.technologies.length > 3 && (
            <span className="text-xs text-[#733F34]/75 dark:text-[#F5EEE8]/75 bg-white/60 dark:bg-gray-700 px-2 py-1 rounded border border-[#BF9F93]/40 dark:border-gray-600">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center text-[#D99441] text-sm font-semibold mt-auto group-hover:translate-x-1 transition-transform">
          View Details <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};
