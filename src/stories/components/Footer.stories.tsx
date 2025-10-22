import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../../i18n';
import Footer from '../../components/ui/Footer';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Components/UI/Footer',
  component: Footer,
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
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    locale: 'en',
    onLocaleChange: () => {},
  },
  globals: {
    theme: 'light',
  },
};

export const SwedishLocale: Story = {
  args: {
    ...Default.args,
    locale: 'sv',
  },
  globals: {
    theme: 'light',
  },
};

export const DarkMode: Story = {
  args: {
    ...Default.args,
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
