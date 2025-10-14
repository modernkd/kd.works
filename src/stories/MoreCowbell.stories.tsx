import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../i18n';
import MoreCowbellHome from '../pages/more-cowbell/Home';
import { ThemeProvider } from './ThemeProvider';

const meta = {
  title: 'Pages/More Cowbell',
  component: MoreCowbellHome,
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
} satisfies Meta<typeof MoreCowbellHome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightMode: Story = {
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
  globals: {
    theme: 'dark',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
