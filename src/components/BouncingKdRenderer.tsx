import React from 'react';
import { useBouncingKdContext } from '../contexts/BouncingKdContext';
import BouncingKd from './fridge/BouncingKd';

/**
 * BouncingKdRenderer - Renders all bouncing KDs from the context
 *
 * This component is used both in the main application and in Storybook preview.
 * It provides the Escape key functionality to clear all bouncing KDs.
 */
export default function BouncingKdRenderer() {
  const { bouncingKds, clearAllBouncingKds } = useBouncingKdContext();

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        clearAllBouncingKds();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [clearAllBouncingKds]);

  return (
    <>
      {bouncingKds.map((kd) => (
        <BouncingKd key={kd.id} isBouncing={true} initialPosition={kd.position} />
      ))}
    </>
  );
}
