import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../i18n';
import Fridge from '../pages/Fridge';
import { ThemeProvider } from './ThemeProvider';

const meta = {
  title: 'Pages/Fridge',
  component: Fridge,
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
} satisfies Meta<typeof Fridge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightModeClosed: Story = {
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

export const LightModeFridgeOpen: Story = {
  args: {
    initialIsFridgeOpen: true,
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

export const LightModeFreezerOpen: Story = {
  args: {
    initialIsFreezerOpen: true,
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

export const DarkModeClosed: Story = {
  globals: {
    theme: 'dark',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const DarkModeFridgeOpen: Story = {
  args: {
    initialIsFridgeOpen: true,
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

export const DarkModeFreezerOpen: Story = {
  args: {
    initialIsFreezerOpen: true,
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
