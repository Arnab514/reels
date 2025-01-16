import React, { useState, useEffect } from 'react';

const gradients = [
  // Modern Deep Ocean
//   "bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-950",
  // Midnight Aurora
//   "bg-gradient-to-br from-slate-900 via-emerald-950 to-cyan-900",
  // Dark Cosmos
//   "bg-gradient-to-br from-zinc-900 via-fuchsia-950 to-purple-950",
  // Ember Night
  "bg-gradient-to-br from-neutral-900 via-rose-950 to-orange-950"
];

export const GradientBackground: React.FC = () => {
  const [currentGradient, setCurrentGradient] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length);
    }, 10000); // Change gradient every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] transition-all duration-1000">
      <div className={`absolute inset-0 ${gradients[currentGradient]} opacity-95 transition-all duration-1000`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.1),rgba(17,24,39,0.4))]" />
      <div className="absolute inset-0 backdrop-blur-[1px] mix-blend-overlay opacity-30" />
      {/* Subtle animated grain effect */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay animate-grain" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
             transform: 'translate3d(0, 0, 0)'
           }} 
      />
    </div>
  );
};