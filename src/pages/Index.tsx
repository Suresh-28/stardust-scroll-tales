
import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Mic, Play, ArrowUp, Star, Camera, Edit3, Heart, Sparkles } from 'lucide-react';
import { AnimatedHero } from '../components/AnimatedHero';
import { CategoryConstellation } from '../components/CategoryConstellation';
import { StoryMosaic } from '../components/StoryMosaic';
import { AuthorSpotlight } from '../components/AuthorSpotlight';
import { SubscribeWidget } from '../components/SubscribeWidget';
import { LivingCursor } from '../components/LivingCursor';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [cursorIcon, setCursorIcon] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-all duration-1000 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900 text-amber-50' 
        : 'bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 text-gray-900'
    }`}>
      
      {/* Living Cursor */}
      <LivingCursor position={cursorPos} icon={cursorIcon} isDark={isDark} />

      {/* Morphing Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleTheme}
          className={`relative w-16 h-8 rounded-full p-1 transition-all duration-700 transform hover:scale-110 ${
            isDark 
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 shadow-purple-500/50' 
              : 'bg-gradient-to-r from-amber-400 to-orange-400 shadow-amber-400/50'
          } shadow-lg hover:shadow-xl`}
          onMouseEnter={() => setCursorIcon(isDark ? Sun : Moon)}
          onMouseLeave={() => setCursorIcon(null)}
        >
          <div className={`w-6 h-6 bg-white rounded-full transition-all duration-700 transform flex items-center justify-center ${
            isDark ? 'translate-x-8' : 'translate-x-0'
          }`}>
            {isDark ? (
              <Moon className="w-4 h-4 text-purple-600 animate-pulse" />
            ) : (
              <Sun className="w-4 h-4 text-amber-600 animate-spin" />
            )}
          </div>
          
          {/* Stardust Trail Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-full">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping opacity-70`}
                style={{
                  left: `${30 + i * 15}%`,
                  top: `${40 + i * 10}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Animated Hero Section */}
      <AnimatedHero isDark={isDark} scrollY={scrollY} setCursorIcon={setCursorIcon} />

      {/* Chronicles Carousel */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className={`w-full h-full ${isDark ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20' : 'bg-gradient-to-r from-amber-300/20 to-orange-300/20'}`} />
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className={`text-4xl md:text-6xl font-bold mb-16 bg-gradient-to-r ${
            isDark 
              ? 'from-amber-300 via-yellow-300 to-amber-300' 
              : 'from-purple-600 via-indigo-600 to-purple-600'
          } bg-clip-text text-transparent animate-pulse`}>
            Featured Chronicles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "The Future of AI", type: "Tech Deep Dive", color: "from-blue-500 to-cyan-500" },
              { title: "Art Renaissance", type: "Cultural Story", color: "from-purple-500 to-pink-500" },
              { title: "Space Mysteries", type: "Science Feature", color: "from-green-500 to-emerald-500" }
            ].map((story, i) => (
              <div
                key={i}
                className={`group relative p-8 rounded-2xl backdrop-blur-lg transform hover:scale-105 transition-all duration-500 cursor-pointer ${
                  isDark 
                    ? 'bg-white/10 hover:bg-white/20 border border-white/20' 
                    : 'bg-black/10 hover:bg-black/20 border border-black/20'
                } hover:shadow-2xl`}
                onMouseEnter={() => setCursorIcon(Camera)}
                onMouseLeave={() => setCursorIcon(null)}
              >
                <div className={`w-full h-32 bg-gradient-to-r ${story.color} rounded-lg mb-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute bottom-2 right-2">
                    <Play className="w-6 h-6 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                <p className={`text-sm opacity-70 mb-4`}>{story.type}</p>
                
                <div className={`inline-flex items-center text-sm font-medium ${
                  isDark ? 'text-amber-300' : 'text-purple-600'
                } group-hover:translate-x-2 transition-transform duration-300`}>
                  Explore Story
                  <span className="ml-2">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Constellation */}
      <CategoryConstellation isDark={isDark} setCursorIcon={setCursorIcon} />

      {/* Story Mosaic Gallery */}
      <StoryMosaic isDark={isDark} setCursorIcon={setCursorIcon} />

      {/* Author Spotlight */}
      <AuthorSpotlight isDark={isDark} setCursorIcon={setCursorIcon} />

      {/* Subscribe Widget */}
      <SubscribeWidget isDark={isDark} setCursorIcon={setCursorIcon} />

      {/* Footer */}
      <footer className={`py-16 px-4 relative overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-t from-purple-950/50 to-transparent' 
          : 'bg-gradient-to-t from-orange-100/50 to-transparent'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-8">
            {[
              { icon: Star, label: "Stories" },
              { icon: Heart, label: "Community" },
              { icon: Sparkles, label: "Magic" }
            ].map(({ icon: Icon, label }, i) => (
              <button
                key={i}
                className={`p-4 rounded-full transition-all duration-500 hover:scale-110 ${
                  isDark 
                    ? 'bg-white/10 hover:bg-white/20 text-amber-300' 
                    : 'bg-black/10 hover:bg-black/20 text-purple-600'
                } hover:shadow-lg`}
                onMouseEnter={() => setCursorIcon(Icon)}
                onMouseLeave={() => setCursorIcon(null)}
              >
                <Icon className="w-6 h-6" />
              </button>
            ))}
          </div>
          
          <p className={`text-lg mb-8 opacity-80`}>
            Where every story becomes an adventure
          </p>
          
          <div className={`h-px w-32 mx-auto mb-8 bg-gradient-to-r ${
            isDark ? 'from-transparent via-amber-300 to-transparent' : 'from-transparent via-purple-600 to-transparent'
          }`} />
          
          <p className="text-sm opacity-60">
            © 2024 Chronicles Portal. Crafted with ✨ and endless curiosity.
          </p>
        </div>
      </footer>

      {/* Rocket Back to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 rounded-full transition-all duration-500 transform hover:scale-110 z-40 ${
          scrollY > 400 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        } ${
          isDark 
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500' 
            : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400'
        } text-white shadow-lg hover:shadow-xl`}
        onMouseEnter={() => setCursorIcon(ArrowUp)}
        onMouseLeave={() => setCursorIcon(null)}
      >
        <ArrowUp className="w-6 h-6 animate-bounce" />
      </button>
    </div>
  );
};

export default Index;
