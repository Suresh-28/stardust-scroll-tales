
import React, { useState } from 'react';
import { Eye, Heart, Share, BookOpen } from 'lucide-react';

interface StoryMosaicProps {
  isDark: boolean;
  setCursorIcon: (icon: React.ElementType | null) => void;
}

export const StoryMosaic: React.FC<StoryMosaicProps> = ({ isDark, setCursorIcon }) => {
  const [hoveredStory, setHoveredStory] = useState<number | null>(null);

  const stories = [
    {
      title: "The AI That Painted Dreams",
      category: "Technology",
      image: "from-blue-500 to-purple-500",
      tags: ["AI", "Art", "Innovation"],
      readTime: "5 min read"
    },
    {
      title: "Cities in the Sky",
      category: "Future",
      image: "from-cyan-500 to-blue-500",
      tags: ["Architecture", "Future", "Urban"],
      readTime: "8 min read"
    },
    {
      title: "The Last Bookbinder",
      category: "Culture",
      image: "from-amber-500 to-orange-500",
      tags: ["Craft", "History", "Art"],
      readTime: "6 min read"
    },
    {
      title: "Ocean's Symphony",
      category: "Science",
      image: "from-teal-500 to-green-500",
      tags: ["Marine", "Music", "Discovery"],
      readTime: "7 min read"
    },
    {
      title: "Digital Nomad's Tale",
      category: "Lifestyle",
      image: "from-pink-500 to-rose-500",
      tags: ["Travel", "Remote", "Freedom"],
      readTime: "4 min read"
    },
    {
      title: "Quantum Leap",
      category: "Science",
      image: "from-indigo-500 to-purple-500",
      tags: ["Physics", "Future", "Tech"],
      readTime: "10 min read"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r ${
            isDark 
              ? 'from-amber-300 via-yellow-300 to-amber-300' 
              : 'from-purple-600 via-indigo-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            Story Mosaic
          </h2>
          <p className="text-xl opacity-80">Immerse yourself in our collection of narratives</p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max">
          {stories.map((story, i) => (
            <div
              key={i}
              className={`group relative cursor-pointer transition-all duration-700 transform hover:scale-105 ${
                i === 0 || i === 3 ? 'md:col-span-2 md:row-span-2' : ''
              } ${i === 1 ? 'md:col-start-3' : ''}`}
              onMouseEnter={() => {
                setHoveredStory(i);
                setCursorIcon(BookOpen);
              }}
              onMouseLeave={() => {
                setHoveredStory(null);
                setCursorIcon(null);
              }}
            >
              {/* Story Card */}
              <div className={`relative h-64 ${
                i === 0 || i === 3 ? 'md:h-80' : ''
              } rounded-2xl overflow-hidden backdrop-blur-lg ${
                isDark 
                  ? 'bg-white/10 border border-white/20' 
                  : 'bg-black/10 border border-black/20'
              }`}>
                
                {/* Background Image Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${story.image} opacity-80`}>
                  {/* Liquid Ripple Effect */}
                  <div className={`absolute inset-0 ${
                    hoveredStory === i ? 'animate-pulse' : ''
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform scale-110 transition-transform duration-1000 group-hover:scale-100" />
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 flex flex-col justify-end">
                  
                  {/* Floating Tags */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {story.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 text-xs rounded-full backdrop-blur-md transition-all duration-500 ${
                          isDark 
                            ? 'bg-white/20 text-amber-200' 
                            : 'bg-black/20 text-white'
                        }`}
                        style={{
                          animationDelay: `${tagIndex * 0.1}s`,
                          transform: hoveredStory === i ? `translateY(-${tagIndex * 2}px)` : 'translateY(0)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Story Info */}
                  <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                    <div className="flex items-center justify-between text-white/80">
                      <span className="text-sm">{story.category}</span>
                      <span className="text-sm">{story.readTime}</span>
                    </div>
                  </div>

                  {/* Interaction Bar */}
                  <div className={`flex items-center space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0`}>
                    {[
                      { icon: Eye, count: '2.1k' },
                      { icon: Heart, count: '156' },
                      { icon: Share, count: '42' }
                    ].map(({ icon: Icon, count }, actionIndex) => (
                      <button
                        key={actionIndex}
                        className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-xs">{count}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${
                  isDark ? 'from-amber-300/20' : 'from-purple-600/20'
                } to-transparent`} />
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button
            className={`px-8 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 ${
              isDark 
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white' 
                : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white'
            } shadow-lg hover:shadow-xl`}
            onMouseEnter={() => setCursorIcon(Eye)}
            onMouseLeave={() => setCursorIcon(null)}
          >
            Discover More Stories
          </button>
        </div>
      </div>
    </section>
  );
};
