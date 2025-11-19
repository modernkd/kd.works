import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BouncingKdData {
  id: number;
  position?: { x: number; y: number };
}

interface BouncingKdContextType {
  bouncingKds: BouncingKdData[];
  spawnBouncingKd: (position?: { x: number; y: number }) => void;
  clearAllBouncingKds: () => void;
}

const BouncingKdContext = createContext<BouncingKdContextType | undefined>(undefined);

interface BouncingKdProviderProps {
  children: ReactNode;
}

export function BouncingKdProvider({ children }: BouncingKdProviderProps) {
  const [bouncingKds, setBouncingKds] = useState<BouncingKdData[]>([]);

  const spawnBouncingKd = (position?: { x: number; y: number }) => {
    const newId = Date.now();
    const newKd: BouncingKdData = { id: newId, position };
    setBouncingKds((prev) => [...prev, newKd]);
  };

  const clearAllBouncingKds = () => {
    setBouncingKds([]);
  };

  const value: BouncingKdContextType = {
    bouncingKds,
    spawnBouncingKd,
    clearAllBouncingKds,
  };

  return <BouncingKdContext.Provider value={value}>{children}</BouncingKdContext.Provider>;
}

export function useBouncingKdContext(): BouncingKdContextType {
  const context = useContext(BouncingKdContext);
  if (context === undefined) {
    throw new Error('useBouncingKdContext must be used within a BouncingKdProvider');
  }
  return context;
}
