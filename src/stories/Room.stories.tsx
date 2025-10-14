import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../i18n';
import RoomPage, { RoomPageProps } from '../pages/more-cowbell/room/RoomPage';
import { ThemeProvider } from './ThemeProvider';

const meta = {
  title: 'Pages/Room',
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
  },
} satisfies Meta<RoomPageProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightMode: Story = {
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
  },
};
