
import React, { useState } from 'react';
import { User, Mic, Play, Users } from 'lucide-react';

interface AuthorSpotlightProps {
  isDark: boolean;
  setCursorIcon: (icon: React.ElementType | null) => void;
}

export const AuthorSpotlight: React.FC<AuthorSpotlightProps> = ({ isDark, setCursorIcon }) => {
  const [activeAuthor, setActiveAuthor] = useState(0);

  const authors = [
    {
      name: "Dr. Elena Vasquez",
      specialty: "AI & Ethics",
      bio: "Exploring the intersection of artificial intelligence and human values",
      avatar: "from-blue-500 to-purple-500",
      followers: "12.4k",
      stories: 23
    },
    {
      name: "Marcus Chen",
      specialty: "Space Sciences",
      bio: "Bringing the cosmos closer to Earth through compelling narratives",
      avatar: "from-green-500 to-teal-500",
      followers: "8.7k",
      stories: 18
    },
    {
      name: "Aria Thompson",
      specialty: "Cultural Arts",
      bio: "Documenting the renaissance of digital and traditional art forms",
      avatar: "from-pink-500 to-rose-500",
      followers: "15.2k",
      stories: 31
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className={`w-full h-full opacity-5 ${
          isDark ? 'bg-gradient-to-br from-purple-500/20 to-indigo-500/20' : 'bg-gradient-to-br from-amber-300/20 to-orange-300/20'
        }`} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r ${
            isDark 
              ? 'from-amber-300 via-yellow-300 to-amber-300' 
              : 'from-purple-600 via-indigo-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            Mastermind Spotlight
          </h2>
          <p className="text-xl opacity-80">Meet the visionaries behind our stories</p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-96 flex items-center justify-center">
          
          {/* Author Cards */}
          <div className="relative w-full max-w-4xl">
            {authors.map((author, i) => (
              <div
                key={i}
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 cursor-pointer ${
                  i === activeAuthor 
                    ? 'scale-100 z-20 opacity-100' 
                    : i === (activeAuthor + 1) % authors.length || i === (activeAuthor - 1 + authors.length) % authors.length
                    ? 'scale-75 z-10 opacity-60'
                    : 'scale-50 z-0 opacity-30'
                }`}
                style={{
                  transform: `translate(-50%, -50%) scale(${
                    i === activeAuthor ? 1 : 0.75
                  }) translateX(${
                    i === activeAuthor ? '0px' : 
                    i === (activeAuthor + 1) % authors.length ? '200px' :
                    i === (activeAuthor - 1 + authors.length) % authors.length ? '-200px' : '0px'
                  })`,
                }}
                onClick={() => setActiveAuthor(i)}
                onMouseEnter={() => setCursorIcon(User)}
                onMouseLeave={() => setCursorIcon(null)}
              >
                {/* Author Card */}
                <div className={`w-80 p-8 rounded-3xl backdrop-blur-lg transition-all duration-500 ${
                  isDark 
                    ? 'bg-white/10 border border-white/20 hover:bg-white/20' 
                    : 'bg-black/10 border border-black/20 hover:bg-black/20'
                } shadow-2xl hover:shadow-3xl`}>
                  
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${author.avatar} flex items-center justify-center shadow-lg`}>
                      <User className="w-12 h-12 text-white" />
                    </div>
                    
                    {/* Voice Waveform Background */}
                    <div className="absolute -inset-4 flex items-center justify-center opacity-30">
                      {[...Array(8)].map((_, waveIndex) => (
                        <div
                          key={waveIndex}
                          className={`w-1 mx-1 rounded-full ${
                            isDark ? 'bg-amber-300' : 'bg-purple-600'
                          } animate-pulse`}
                          style={{
                            height: `${20 + Math.sin(waveIndex) * 10}px`,
                            animationDelay: `${waveIndex * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{author.name}</h3>
                    <p className={`text-sm mb-4 ${isDark ? 'text-amber-300' : 'text-purple-600'} font-medium`}>
                      {author.specialty}
                    </p>
                    <p className="text-sm opacity-80 mb-6 leading-relaxed">
                      {author.bio}
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center space-x-6 mb-6">
                      <div className="text-center">
                        <div className="text-xl font-bold">{author.followers}</div>
                        <div className="text-xs opacity-70">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold">{author.stories}</div>
                        <div className="text-xs opacity-70">Stories</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <button
                        className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                          isDark 
                            ? 'bg-amber-300 text-gray-900 hover:bg-amber-200' 
                            : 'bg-purple-600 text-white hover:bg-purple-500'
                        }`}
                        onMouseEnter={() => setCursorIcon(Users)}
                        onMouseLeave={() => setCursorIcon(null)}
                      >
                        Follow
                      </button>
                      <button
                        className={`p-2 rounded-full transition-all duration-300 ${
                          isDark 
                            ? 'bg-white/20 hover:bg-white/30 text-amber-300' 
                            : 'bg-black/20 hover:bg-black/30 text-purple-600'
                        }`}
                        onMouseEnter={() => setCursorIcon(Play)}
                        onMouseLeave={() => setCursorIcon(null)}
                      >
                        <Mic className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Confetti Effect (hidden, would trigger on follow) */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, confettiIndex) => (
                      <div
                        key={confettiIndex}
                        className={`absolute w-2 h-2 ${
                          isDark ? 'bg-amber-300' : 'bg-purple-600'
                        } rounded-full opacity-0`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {authors.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveAuthor(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeAuthor 
                    ? isDark ? 'bg-amber-300' : 'bg-purple-600'
                    : isDark ? 'bg-white/30' : 'bg-black/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
