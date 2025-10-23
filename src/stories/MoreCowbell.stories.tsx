import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MoreCowbellHome from '../pages/more-cowbell/Home';
import { ThemeProvider } from './ThemeProvider';

const meta = {
  title: 'Pages/More Cowbell',
  component: MoreCowbellHome,
  decorators: [
    (Story, context) => {
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
          'Landing page for the More Cowbell app, allowing users to enter a room name to join a collaborative sound board.',
      },
    },
  },
} satisfies Meta<typeof MoreCowbellHome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightMode: Story = {
  name: 'Light Mode',
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
