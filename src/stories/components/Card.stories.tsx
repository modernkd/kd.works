import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../../i18n';
import Card from '../../components/modals/Card';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Components/Modals/Card',
  component: Card,
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
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <div style={{ padding: '1rem', textAlign: 'center' }}>Card content</div>,
  },
  globals: {
    theme: 'light',
  },
};

export const WithComplexContent: Story = {
  args: {
    children: (
      <div style={{ padding: '1rem' }}>
        <h3>Card Title</h3>
        <p>This is a card with more complex content including multiple elements.</p>
        <button>Action Button</button>
      </div>
    ),
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
