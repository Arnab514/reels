import React, { createContext, useContext, useState } from 'react';

interface SoundContextType {
  globalMuted: boolean;
  setGlobalMuted: (muted: boolean) => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [globalMuted, setGlobalMuted] = useState(true);

  return (
    <SoundContext.Provider value={{ globalMuted, setGlobalMuted }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
}