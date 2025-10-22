import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import RoomPage, { RoomPageProps } from '../pages/more-cowbell/room/RoomPage';
import { ThemeProvider } from './ThemeProvider';

// Mock hooks and dependencies to avoid network calls and external dependencies

const meta = {
  title: 'Pages/More-Cowbell/Room',
  component: RoomPage,
  decorators: [
    (Story, context) => {
      // Get the theme for this story
      const storyTheme = context.parameters?.theme || context.globals?.theme || 'light';
      return (
        <ThemeProvider initialTheme={storyTheme}>
          <HelmetProvider>
            <BrowserRouter>
              <Story />
            </BrowserRouter>
          </HelmetProvider>
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Real-time collaborative emoji sound board room where users can play sounds and manage custom sounds.',
      },
    },
  },
  argTypes: {
    roomOverride: {
      control: 'text',
      description: 'Override the room name for Storybook testing',
    },
    onSocketMessage: {
      action: 'socketMessage',
      description: 'Callback for socket messages',
    },
    onSocketSend: {
      action: 'socketSend',
      description: 'Callback for socket sends',
    },
  },
} satisfies Meta<RoomPageProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightMode: Story = {
  name: 'Light Mode',
  args: {
    roomOverride: 'storybook-room',
  },
  globals: {
    theme: 'light',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
    theme: 'light',
  },
};

export const DarkMode: Story = {
  name: 'Dark Mode',
  args: {
    roomOverride: 'storybook-room',
  },
  globals: {
    theme: 'dark',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    theme: 'dark',
  },
};
