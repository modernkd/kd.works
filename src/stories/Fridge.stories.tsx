import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
    docs: {
      description: {
        component:
          'Interactive fridge-themed contact page with fridge and freezer doors that can be opened, and theme customization options.',
      },
    },
  },
  argTypes: {
    initialIsFridgeOpen: {
      control: 'boolean',
      description: 'Initial state of the fridge door',
    },
    initialIsFreezerOpen: {
      control: 'boolean',
      description: 'Initial state of the freezer door',
    },
  },
} satisfies Meta<typeof Fridge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Light mode stories
export const LightModeClosed: Story = {
  name: 'Light Mode - Closed',
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
  name: 'Light Mode - Fridge Open',
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
  name: 'Light Mode - Freezer Open',
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

// Dark mode stories
export const DarkModeClosed: Story = {
  name: 'Dark Mode - Closed',
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

export const DarkModeFridgeOpen: Story = {
  name: 'Dark Mode - Fridge Open',
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
    theme: 'dark',
  },
};

export const DarkModeFreezerOpen: Story = {
  name: 'Dark Mode - Freezer Open',
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
    theme: 'dark',
  },
};
