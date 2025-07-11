
import React, { useState } from 'react';
import { Brain, Palette, Rocket, Globe, Music, Camera } from 'lucide-react';

interface CategoryConstellationProps {
  isDark: boolean;
  setCursorIcon: (icon: React.ElementType | null) => void;
}

export const CategoryConstellation: React.FC<CategoryConstellationProps> = ({ isDark, setCursorIcon }) => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const categories = [
    { 
      icon: Brain, 
      label: "Technology", 
      color: "from-blue-500 to-cyan-500", 
      x: "20%", 
      y: "30%",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    { 
      icon: Palette, 
      label: "Arts & Culture", 
      color: "from-purple-500 to-pink-500", 
      x: "80%", 
      y: "20%",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop"
    },
    { 
      icon: Rocket, 
      label: "Science", 
      color: "from-green-500 to-emerald-500", 
      x: "70%", 
      y: "70%",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop"
    },
    { 
      icon: Globe, 
      label: "Society", 
      color: "from-orange-500 to-red-500", 
      x: "30%", 
      y: "80%",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
    },
    { 
      icon: Music, 
      label: "Entertainment", 
      color: "from-indigo-500 to-purple-500", 
      x: "15%", 
      y: "60%",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
    },
    { 
      icon: Camera, 
      label: "Lifestyle", 
      color: "from-pink-500 to-rose-500", 
      x: "85%", 
      y: "45%",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className={`w-full h-full opacity-5 ${
          isDark ? 'bg-gradient-radial from-purple-500/20 to-transparent' : 'bg-gradient-radial from-amber-500/20 to-transparent'
        }`} />
      </div>

      <div className="w-full max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r ${
            isDark 
              ? 'from-amber-300 via-yellow-300 to-amber-300' 
              : 'from-purple-600 via-indigo-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            Explore Categories
          </h2>
          <p className="text-xl opacity-80">Discover stories that spark your curiosity</p>
        </div>

        {/* Constellation Container */}
        <div className="relative h-96 w-full">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {categories.map((category, i) => (
              categories.slice(i + 1).map((nextCategory, j) => {
                const actualJ = i + j + 1;
                return (
                  <line
                    key={`${i}-${actualJ}`}
                    x1={category.x}
                    y1={category.y}
                    x2={nextCategory.x}
                    y2={nextCategory.y}
                    stroke={isDark ? '#9333EA' : '#F59E0B'}
                    strokeWidth="1"
                    opacity={activeNode === i || activeNode === actualJ ? "0.6" : "0.2"}
                    className="transition-opacity duration-500"
                  />
                );
              })
            ))}
          </svg>

          {/* Category Nodes */}
          {categories.map((category, i) => (
            <div
              key={i}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{
                left: category.x,
                top: category.y,
              }}
              onMouseEnter={() => {
                setActiveNode(i);
                setCursorIcon(category.icon);
              }}
              onMouseLeave={() => {
                setActiveNode(null);
                setCursorIcon(null);
              }}
            >
              {/* Node Circle with Background Image */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center transition-all duration-500 transform group-hover:scale-125 shadow-lg group-hover:shadow-2xl relative overflow-hidden`}>
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <category.icon className="w-8 h-8 text-white relative z-10" />
              </div>

              {/* Pulsing Ring */}
              <div className={`absolute inset-0 rounded-full border-2 ${
                activeNode === i ? 'animate-ping' : ''
              } ${isDark ? 'border-amber-300' : 'border-purple-600'} opacity-50`} />

              {/* Enhanced Label Tooltip with Image Preview */}
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0`}>
                <div className={`px-4 py-2 rounded-lg backdrop-blur-md text-sm font-medium whitespace-nowrap ${
                  isDark 
                    ? 'bg-white/20 text-amber-300 border border-white/30' 
                    : 'bg-black/20 text-purple-600 border border-black/30'
                }`}>
                  <div className="flex items-center space-x-2">
                    <img 
                      src={category.image} 
                      alt={category.label}
                      className="w-6 h-6 rounded object-cover"
                    />
                    <span>{category.label}</span>
                  </div>
                  <div className="text-xs opacity-70 mt-1 text-center">Dive In →</div>
                </div>
              </div>

              {/* Orbiting Keywords */}
              <div className="absolute inset-0 pointer-events-none">
                {['Trending', 'Featured', 'New'].map((keyword, keywordIndex) => (
                  <div
                    key={keywordIndex}
                    className={`absolute text-xs opacity-60 animate-pulse ${
                      isDark ? 'text-purple-300' : 'text-amber-600'
                    }`}
                    style={{
                      left: `${50 + Math.cos((keywordIndex * 120) * Math.PI / 180) * 40}px`,
                      top: `${50 + Math.sin((keywordIndex * 120) * Math.PI / 180) * 40}px`,
                      animationDelay: `${keywordIndex * 0.5}s`,
                    }}
                  >
                    {keyword}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Active Category Info with Image */}
        {activeNode !== null && (
          <div className="text-center mt-12 animate-in fade-in slide-in-from-bottom duration-500">
            <div className={`inline-block px-8 py-6 rounded-2xl backdrop-blur-md ${
              isDark 
                ? 'bg-white/10 border border-white/20' 
                : 'bg-black/10 border border-black/20'
            }`}>
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={categories[activeNode].image} 
                  alt={categories[activeNode].label}
                  className="w-16 h-16 rounded-lg object-cover shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2">{categories[activeNode].label}</h3>
                  <p className="opacity-80">Explore fascinating stories in this category</p>
                </div>
              </div>
              <button className={`mt-4 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isDark 
                  ? 'bg-amber-300 text-gray-900 hover:bg-amber-200' 
                  : 'bg-purple-600 text-white hover:bg-purple-500'
              }`}>
                View Stories
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
