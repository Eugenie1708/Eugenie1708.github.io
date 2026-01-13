import React from 'react';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
//import { GenAIStudio } from './components/GenAIStudio';
import { Github, Linkedin} from 'lucide-react';
import { profileData } from './data/portfolioData';

const App: React.FC = () => {
  return (
   <div className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))] font-sans selection:bg-[rgb(var(--primary))]/25">

      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FBF7F3] backdrop-blur-md border-b border-[#E6DED6]">
  <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

    {/* Brand / Name */}
    <div className="text-lg font-semibold tracking-tight flex items-center gap-3 text-[#733F34]">
      <span className="w-9 h-9 rounded-full bg-[#D99441] flex items-center justify-center text-sm font-bold text-white">
        EL
      </span>
      <span>Eugenie (I Chia) Lai</span>
    </div>

    {/* Navigation */}
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8B6B5E]">
      <a href="#" className="hover:text-[#733F34] transition-colors">Home</a>
      <a href="#portfolio" className="hover:text-[#733F34] transition-colors">Projects</a>
      <a href={profileData.social.linkedin} target="_blank" rel="noreferrer"
     className="hover:text-[#733F34] transition-colors">
    LinkedIn
  </a>
  <a href={profileData.social.github} target="_blank" rel="noreferrer"
     className="hover:text-[#733F34] transition-colors">
    GitHub
  </a>
    </div>

  </div>
</nav>


      <main>
        <Hero />
        <Portfolio />
        
        {/* Transition Divider */}
        <div className="py-12 flex justify-center items-center">
           <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
           <span className="px-4 text-slate-600 text-sm tracking-widest uppercase">Innovation</span>
           <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        </div>

        {/* <GenAIStudio /> */}

      </main>

      <footer id="contact" className="bg-[#FBF7F3] pt-16 pb-10 border-t border-[#BF9F93]/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#733F34] mb-4">
          Let’s Tell Stories with Data
          </h2>

          <p className="text-[#733F34]/70 mb-8 max-w-xl mx-auto leading-relaxed">
      Currently looking for internship opportunities. I bring technical rigor, thoughtful visualization,
      and product-minded analytics to the table.
          </p>

        <div className="flex justify-center gap-4 mb-10">
          <a
            href={profileData.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white border border-[#BF9F93]/40 text-[#733F34]/70 hover:text-[#733F34] hover:border-[#D99441]/50 hover:shadow-md transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={profileData.social.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white border border-[#BF9F93]/40 text-[#733F34]/70 hover:text-[#733F34] hover:border-[#819FA6]/50 hover:shadow-md transition-all"
            aria-label="GitHub"
          >
          <Github className="w-5 h-5" />
          </a>
        </div>

        <p className="text-[#733F34]/45 text-sm">
        © {new Date().getFullYear()} {profileData.name}. All rights reserved.
        </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
