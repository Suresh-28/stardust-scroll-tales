
import React from 'react';

interface LivingCursorProps {
  position: { x: number; y: number };
  icon: React.ElementType | null;
  isDark: boolean;
}

export const LivingCursor: React.FC<LivingCursorProps> = ({ position, icon: Icon, isDark }) => {
  return (
    <>
      {/* Cursor Trail Particles */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-100"
        style={{
          left: position.x - 4,
          top: position.y - 4,
        }}
      >
        <div className={`w-2 h-2 rounded-full ${
          isDark ? 'bg-amber-300' : 'bg-purple-500'
        } opacity-60 animate-ping`} />
      </div>
      
      {/* Icon Display */}
      {Icon && (
        <div
          className="fixed pointer-events-none z-50 transition-all duration-300 animate-in fade-in zoom-in"
          style={{
            left: position.x + 20,
            top: position.y - 20,
          }}
        >
          <div className={`p-2 rounded-lg backdrop-blur-md ${
            isDark 
              ? 'bg-white/20 text-amber-300 border border-white/30' 
              : 'bg-black/20 text-purple-600 border border-black/30'
          } shadow-lg`}>
            <Icon className="w-4 h-4" />
          </div>
        </div>
      )}
      
      {/* Floating Particles */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="fixed pointer-events-none z-40 animate-pulse"
          style={{
            left: position.x + (i - 1) * 8,
            top: position.y + (i - 1) * 8,
          }}
        >
          <div className={`w-1 h-1 rounded-full ${
            isDark ? 'bg-purple-400' : 'bg-amber-400'
          } opacity-40`} />
        </div>
      ))}
    </>
  );
};
