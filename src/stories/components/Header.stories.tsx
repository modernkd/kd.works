import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../../i18n';
import Header from '../../components/ui/Header';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Components/UI/Header',
  component: Header,
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
    backgrounds: {
      default: 'light',
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    showDarkModeToggle: true,
    isDarkMode: false,
    onDarkModeToggle: () => {},
    locale: 'en',
    showBackLink: false,
  },
  globals: {
    theme: 'light',
  },
};

export const WithBackLink: Story = {
  args: {
    ...Default.args,
    showBackLink: true,
    linkTo: '/home',
    linkText: 'Home',
  },
  globals: {
    theme: 'light',
  },
};

export const WithSignOut: Story = {
  args: {
    ...Default.args,
    showSignOut: true,
    onSignOut: () => {},
  },
  globals: {
    theme: 'light',
  },
};

export const DarkMode: Story = {
  args: {
    ...Default.args,
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
