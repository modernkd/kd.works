import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../../i18n';
import DarkModeToggle from '../../components/ui/DarkModeToggle';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Components/UI/DarkModeToggle',
  component: DarkModeToggle,
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
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
} satisfies Meta<typeof DarkModeToggle>;

export default meta;
type Story = StoryObj<typeof DarkModeToggle>;

export const LightMode: Story = {
  args: {
    isDarkMode: false,
    onToggle: () => {},
  },
  globals: {
    theme: 'light',
  },
};

export const DarkMode: Story = {
  args: {
    ...LightMode.args,
    isDarkMode: true,
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
