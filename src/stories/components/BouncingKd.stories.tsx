import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import BouncingKd from '../../components/fridge/BouncingKd';
import { useBouncingKdContext } from '../../contexts/BouncingKdContext';

const meta = {
  title: 'Components/Fridge/BouncingKd',
  component: BouncingKd,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    isBouncing: {
      control: 'boolean',
      description: 'Controls whether the KD is bouncing or static',
    },
    initialPosition: {
      control: 'object',
      description: 'Initial position of the KD (x, y coordinates)',
      properties: {
        x: {
          control: 'number',
          type: 'number',
        },
        y: {
          control: 'number',
          type: 'number',
        },
      },
    },
  },
} satisfies Meta<typeof BouncingKd>;

export default meta;
type Story = StoryObj<typeof BouncingKd>;

// Standalone KD with bouncing enabled
export const Bouncing: Story = {
  args: {
    isBouncing: true,
    initialPosition: { x: 50, y: 50 },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

// Standalone KD that's static
export const Static: Story = {
  args: {
    isBouncing: false,
    initialPosition: { x: 100, y: 100 },
  },
};

// KD with custom initial position
export const CustomPosition: Story = {
  args: {
    isBouncing: true,
    initialPosition: { x: 200, y: 150 },
  },
};

// Context-based usage story
export const WithProvider: Story = {
  render: () => {
    const { spawnBouncingKd, clearAllBouncingKds } = useBouncingKdContext();

    const handleSpawn = () => {
      spawnBouncingKd({
        x: Math.random() * 400,
        y: Math.random() * 300,
      });
    };

    return (
      <div
        style={{
          position: 'relative',
          width: '500px',
          height: '400px',
          backgroundColor: '#f0f0f0',
          border: '2px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            zIndex: 1000,
            display: 'flex',
            gap: '10px',
          }}
        >
          <button
            onClick={handleSpawn}
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Spawn Bouncing KD
          </button>
          <button
            onClick={clearAllBouncingKds}
            style={{
              padding: '8px 16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Clear All
          </button>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            color: '#666',
            fontSize: '12px',
          }}
        >
          Click "Spawn Bouncing KD" to add bouncing KDs. Press "Clear All" to remove them.
        </div>
      </div>
    );
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

// Multiple bouncing KDs
export const MultipleBouncing: Story = {
  render: () => {
    const { spawnBouncingKd, clearAllBouncingKds } = useBouncingKdContext();

    const handleSpawnMultiple = () => {
      for (let i = 0; i < 3; i++) {
        spawnBouncingKd({
          x: Math.random() * 400,
          y: Math.random() * 300,
        });
      }
    };

    React.useEffect(() => {
      // Spawn a few KDs automatically for this story
      const timer = setTimeout(() => {
        handleSpawnMultiple();
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    return (
      <div
        style={{
          position: 'relative',
          width: '500px',
          height: '400px',
          backgroundColor: '#e8f4f8',
          border: '2px solid #17a2b8',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            zIndex: 1000,
            display: 'flex',
            gap: '10px',
          }}
        >
          <button
            onClick={handleSpawnMultiple}
            style={{
              padding: '8px 16px',
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Spawn 3 KDs
          </button>
          <button
            onClick={clearAllBouncingKds}
            style={{
              padding: '8px 16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Clear All
          </button>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            color: '#666',
            fontSize: '12px',
          }}
        >
          This demo shows multiple bouncing KDs. They will auto-generate on load.
        </div>
      </div>
    );
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

// Story showing the escape key functionality
export const EscapeKeyDemo: Story = {
  render: () => {
    const { spawnBouncingKd, clearAllBouncingKds } = useBouncingKdContext();

    const handleSpawn = () => {
      spawnBouncingKd({
        x: Math.random() * 400,
        y: Math.random() * 300,
      });
    };

    React.useEffect(() => {
      // Spawn a KD automatically for this story
      const timer = setTimeout(() => {
        handleSpawn();
      }, 500);

      return () => clearTimeout(timer);
    }, []);

    return (
      <div
        style={{
          position: 'relative',
          width: '500px',
          height: '400px',
          backgroundColor: '#fff3cd',
          border: '2px solid #ffc107',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            zIndex: 1000,
            display: 'flex',
            gap: '10px',
          }}
        >
          <button
            onClick={handleSpawn}
            style={{
              padding: '8px 16px',
              backgroundColor: '#ffc107',
              color: '#212529',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Spawn KD
          </button>
          <button
            onClick={clearAllBouncingKds}
            style={{
              padding: '8px 16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Clear All
          </button>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            color: '#856404',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          🎯 Tip: Press the "Escape" key to clear all bouncing KDs!
        </div>
      </div>
    );
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};
