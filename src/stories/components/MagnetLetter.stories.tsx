import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../../i18n';
import MagnetLetter from '../../components/magnets/MagnetLetter';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Components/Magnets/MagnetLetter',
  component: MagnetLetter,
  decorators: [
    (Story, context) => {
      const storyTheme = context.parameters?.theme || context.globals?.theme || 'light';
      return (
        <ThemeProvider initialTheme={storyTheme}>
          <HelmetProvider>
            <BrowserRouter>
              <div style={{ fontSize: '4rem' }}>
                <Story />
              </div>
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
} satisfies Meta<typeof MagnetLetter>;

export default meta;
type Story = StoryObj<typeof MagnetLetter>;

export const Default: Story = {
  args: {
    letter: 'A',
    color: '#ff6b6b',
  },
  globals: {
    theme: 'light',
  },
};

export const DifferentColors: Story = {
  args: {
    letter: 'B',
    color: '#4ecdc4',
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
