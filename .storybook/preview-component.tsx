import React from 'react';
import { BouncingKdProvider } from '../src/contexts/BouncingKdContext';
import BouncingKdRenderer from '../src/components/BouncingKdRenderer';

interface PreviewWrapperProps {
  children: React.ReactNode;
}

export function PreviewWrapper({ children }: PreviewWrapperProps) {
  return (
    <BouncingKdProvider>
      {children}
      <BouncingKdRenderer />
    </BouncingKdProvider>
  );
}
