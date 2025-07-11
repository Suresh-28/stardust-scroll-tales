
import React from 'react';
import { Mic, Play, Sparkles } from 'lucide-react';

interface AnimatedHeroProps {
  isDark: boolean;
  scrollY: number;
  setCursorIcon: (icon: React.ElementType | null) => void;
}

export const AnimatedHero: React.FC<AnimatedHeroProps> = ({ isDark, scrollY, setCursorIcon }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0">
        {/* Layer 1 - Floating Shapes */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-20 animate-pulse ${
                isDark ? 'bg-purple-400' : 'bg-amber-400'
              }`}
              style={{
                width: `${20 + i * 10}px`,
                height: `${20 + i * 10}px`,
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
        
        {/* Layer 2 - Waves */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 opacity-30"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill={isDark ? '#4C1D95' : '#F59E0B'}
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Floating Title */}
        <div
          className="mb-8"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r ${
            isDark 
              ? 'from-amber-300 via-yellow-200 to-amber-300' 
              : 'from-purple-600 via-indigo-600 to-purple-600'
          } bg-clip-text text-transparent animate-pulse leading-tight`}>
            Chronicles
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className={`h-px flex-1 bg-gradient-to-r ${
              isDark ? 'from-transparent via-amber-300 to-transparent' : 'from-transparent via-purple-600 to-transparent'
            }`} />
            <Sparkles className={`w-6 h-6 ${isDark ? 'text-amber-300' : 'text-purple-600'} animate-spin`} />
            <div className={`h-px flex-1 bg-gradient-to-r ${
              isDark ? 'from-transparent via-amber-300 to-transparent' : 'from-transparent via-purple-600 to-transparent'
            }`} />
          </div>
        </div>

        <p className="text-xl md:text-2xl mb-12 opacity-80 leading-relaxed">
          Where stories come alive through immersive multimedia experiences
        </p>

        {/* Interactive CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* 3D Orb CTA */}
          <button
            className={`group relative px-8 py-4 rounded-full font-semibold transition-all duration-700 transform hover:scale-110 ${
              isDark 
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-500/50' 
                : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white shadow-amber-400/50'
            } shadow-lg hover:shadow-2xl`}
            onMouseEnter={() => setCursorIcon(Play)}
            onMouseLeave={() => setCursorIcon(null)}
          >
            <span className="relative z-10">Begin Journey</span>
            
            {/* Rotating Border Effect */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${
              isDark ? 'from-purple-400 to-indigo-400' : 'from-amber-400 to-orange-400'
            } opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin blur-sm`} />
          </button>

          {/* Voice Trigger */}
          <button
            className={`group flex items-center space-x-3 px-6 py-4 rounded-full border transition-all duration-500 hover:scale-105 ${
              isDark 
                ? 'border-white/30 hover:border-white/50 text-amber-300 hover:bg-white/10' 
                : 'border-black/30 hover:border-black/50 text-purple-600 hover:bg-black/10'
            }`}
            onMouseEnter={() => setCursorIcon(Mic)}
            onMouseLeave={() => setCursorIcon(null)}
          >
            <Mic className="w-5 h-5 group-hover:animate-pulse" />
            <span>Say "Start"</span>
            
            {/* Audio Wave Animation */}
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 bg-current rounded-full animate-pulse ${
                    i === 0 ? 'h-2' : i === 1 ? 'h-4' : 'h-2'
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </button>
        </div>

        {/* Floating Story Snippets */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { text: "AI Revolution", x: "20%", y: "30%" },
            { text: "Art & Soul", x: "80%", y: "25%" },
            { text: "Future Cities", x: "15%", y: "70%" },
            { text: "Space Tales", x: "85%", y: "75%" }
          ].map((snippet, i) => (
            <div
              key={i}
              className={`absolute opacity-60 text-sm font-medium animate-bounce ${
                isDark ? 'text-purple-300' : 'text-amber-600'
              }`}
              style={{
                left: snippet.x,
                top: snippet.y,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {snippet.text}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className={`w-6 h-10 border-2 rounded-full ${
          isDark ? 'border-amber-300' : 'border-purple-600'
        } flex justify-center`}>
          <div className={`w-1 h-3 ${
            isDark ? 'bg-amber-300' : 'bg-purple-600'
          } rounded-full mt-2 animate-bounce`} />
        </div>
      </div>
    </section>
  );
};
