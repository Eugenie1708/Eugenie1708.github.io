import React, { useState, useRef } from 'react';
import { Wand2, Image as ImageIcon, Upload, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { editImageWithGemini } from '../services/geminiService';

export const GenAIStudio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('image/jpeg');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError("Image size too large. Please upload an image under 5MB.");
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
        setMimeType(file.type);
        setGeneratedImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage || !prompt) return;

    setIsLoading(true);
    setError(null);

    try {
      // Extract base64 data strictly
      const base64Data = selectedImage.split(',')[1];
      const result = await editImageWithGemini(base64Data, mimeType, prompt);
      
      if (result) {
        setGeneratedImage(`data:${mimeType};base64,${result}`);
      } else {
        setError("The model didn't return an image. Try a different prompt.");
      }
    } catch (err) {
      setError("Failed to generate image. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-studio" className="py-20 px-6 bg-slate-900 border-y border-slate-800 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
           <div className="p-3 bg-purple-500/10 rounded-lg">
             <Wand2 className="w-8 h-8 text-purple-400" />
           </div>
           <div>
             <h2 className="text-3xl font-bold text-white">GenAI Creative Studio</h2>
             <p className="text-slate-400">Powered by Gemini 2.5 Flash Image. Modify charts, photos, or diagrams with natural language.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls Side */}
          <div className="space-y-6">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Upload className="w-4 h-4" /> 1. Upload Source
              </h3>
              
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-purple-500 hover:bg-slate-700/50 transition-colors cursor-pointer"
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/png, image/jpeg, image/webp"
                  onChange={handleImageUpload}
                />
                {selectedImage ? (
                  <div className="relative h-48 w-full">
                    <img src={selectedImage} alt="Source" className="w-full h-full object-contain rounded-md" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity rounded-md">
                      <span className="text-white font-medium">Click to Change</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3 text-slate-400">
                    <ImageIcon className="w-10 h-10" />
                    <span>Click to upload an image to edit</span>
                    <span className="text-xs text-slate-500">(PNG, JPEG, WEBP under 5MB)</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> 2. Describe Changes
              </h3>
              <div className="space-y-4">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="E.g., 'Turn this photo into a pencil sketch', 'Add a neon blue glow to the graph lines', 'Remove the background'"
                  className="w-full h-32 bg-slate-900 border border-slate-600 rounded-lg p-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
                
                {error && (
                  <div className="p-3 bg-red-900/20 border border-red-500/50 rounded-lg flex items-center gap-2 text-red-300 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {error}
                  </div>
                )}

                <button
                  onClick={handleGenerate}
                  disabled={!selectedImage || !prompt || isLoading}
                  className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                    !selectedImage || !prompt || isLoading
                      ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-primary-600 hover:from-purple-500 hover:to-primary-500 text-white shadow-lg shadow-purple-900/20'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5" />
                      Generate with Gemini
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Result Side */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 flex flex-col shadow-xl">
             <h3 className="text-lg font-semibold text-white mb-4">Output Result</h3>
             <div className="flex-1 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center min-h-[400px] overflow-hidden relative">
                {!generatedImage && !isLoading && (
                  <div className="text-center text-slate-500 p-8">
                    <Wand2 className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p>Your AI-generated masterpiece will appear here.</p>
                  </div>
                )}
                
                {isLoading && (
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-t-purple-500 rounded-full animate-spin"></div>
                    </div>
                    <p className="text-slate-400 animate-pulse">Consulting the neural network...</p>
                  </div>
                )}

                {generatedImage && !isLoading && (
                  <img 
                    src={generatedImage} 
                    alt="Generated Result" 
                    className="w-full h-full object-contain"
                  />
                )}
             </div>
             
             {generatedImage && (
               <div className="mt-4 flex justify-end">
                  <a 
                    href={generatedImage} 
                    download="gemini_edit.png"
                    className="text-sm text-slate-400 hover:text-white flex items-center gap-2 px-4 py-2 hover:bg-slate-700 rounded-md transition-colors"
                  >
                    <Upload className="w-4 h-4 rotate-180" /> Download
                  </a>
               </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};
