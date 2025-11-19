import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../../i18n';
import MagnetText from '../../components/fridge/magnets/MagnetText';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Components/Magnets/MagnetText',
  component: MagnetText,
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
} satisfies Meta<typeof MagnetText>;

export default meta;
type Story = StoryObj<typeof MagnetText>;

export const Default: Story = {
  args: {
    text: 'HELLO',
    size: 'large',
  },
  globals: {
    theme: 'light',
  },
};

export const MediumSize: Story = {
  args: {
    ...Default.args,
    size: 'medium',
  },
  globals: {
    theme: 'light',
  },
};

export const WithClickHandler: Story = {
  args: {
    ...Default.args,
    onLetterClick: (letter) => console.log('Clicked:', letter),
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
