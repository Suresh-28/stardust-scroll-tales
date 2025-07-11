
import React, { useState } from 'react';
import { Mail, Sparkles, Check } from 'lucide-react';

interface SubscribeWidgetProps {
  isDark: boolean;
  setCursorIcon: (icon: React.ElementType | null) => void;
}

export const SubscribeWidget: React.FC<SubscribeWidgetProps> = ({ isDark, setCursorIcon }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsSubscribed(true);
        setIsAnimating(false);
      }, 1000);
    }
  };

  if (isSubscribed) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className={`p-8 rounded-3xl backdrop-blur-lg ${
            isDark 
              ? 'bg-green-900/20 border border-green-500/30' 
              : 'bg-green-100/50 border border-green-500/30'
          }`}>
            <div className="animate-bounce mb-4">
              <Check className={`w-16 h-16 mx-auto ${isDark ? 'text-green-400' : 'text-green-600'}`} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Welcome to Chronicles!</h3>
            <p className="opacity-80 animate-pulse">Ready for your first story adventure?</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className={`w-full h-full opacity-10 ${
          isDark ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20' : 'bg-gradient-to-r from-amber-300/20 to-orange-300/20'
        }`} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${
            isDark 
              ? 'from-amber-300 via-yellow-300 to-amber-300' 
              : 'from-purple-600 via-indigo-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            Enlighten & Subscribe
          </h2>
          <p className="text-xl opacity-80">Join our community of story enthusiasts</p>
        </div>

        {/* Floating Lantern Widget */}
        <div className={`relative mx-auto max-w-md p-8 rounded-3xl backdrop-blur-lg transition-all duration-700 ${
          isDark 
            ? 'bg-white/10 border border-white/20 shadow-purple-500/20' 
            : 'bg-black/10 border border-black/20 shadow-amber-400/20'
        } shadow-2xl hover:shadow-3xl transform hover:scale-105`}>
          
          {/* Lantern Glow Effect */}
          <div className={`absolute -inset-4 rounded-3xl ${
            isDark 
              ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20' 
              : 'bg-gradient-to-r from-amber-400/20 to-orange-400/20'
          } blur-xl animate-pulse`} />

          <form onSubmit={handleSubmit} className="relative z-10">
            {/* Email Input with Neon Label */}
            <div className="relative mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`w-full px-6 py-4 rounded-2xl bg-transparent border-2 transition-all duration-500 focus:outline-none ${
                  isDark 
                    ? 'border-amber-300/30 focus:border-amber-300 text-amber-50 placeholder-amber-300/50' 
                    : 'border-purple-600/30 focus:border-purple-600 text-gray-900 placeholder-purple-600/50'
                } text-lg`}
                onMouseEnter={() => setCursorIcon(Mail)}
                onMouseLeave={() => setCursorIcon(null)}
                required
              />
              
              {/* Animated Label */}
              <label className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                email ? '-top-3 text-sm' : 'top-4 text-lg'
              } ${isDark ? 'text-amber-300' : 'text-purple-600'}`}>
                {email ? 'Email Address' : ''}
              </label>
            </div>

            {/* Submit Button with Electric Effect */}
            <button
              type="submit"
              disabled={isAnimating}
              className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 relative overflow-hidden ${
                isDark 
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white' 
                  : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white'
              } shadow-lg hover:shadow-2xl`}
              onMouseEnter={() => setCursorIcon(Sparkles)}
              onMouseLeave={() => setCursorIcon(null)}
            >
              <span className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                Join the Journey
              </span>
              
              {/* Loading Animation */}
              {isAnimating && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Electric Spark Effect */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping"
                    style={{
                      left: `${25 + i * 15}%`,
                      top: `${30 + (i % 2) * 40}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </button>
          </form>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 ${
                  isDark ? 'bg-purple-400' : 'bg-amber-400'
                } rounded-full animate-pulse opacity-60`}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + (i % 3) * 30}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* AI Greeting Preview */}
        <div className="mt-8 opacity-60">
          <p className="text-sm italic">
            "Welcome, [Name]! Ready for your first story?" - AI Personalization
          </p>
        </div>
      </div>
    </section>
  );
};
