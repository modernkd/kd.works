import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../../i18n';
import ErrorBoundary from '../../components/ui/ErrorBoundary';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Components/UI/ErrorBoundary',
  component: ErrorBoundary,
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
} satisfies Meta<typeof ErrorBoundary>;

export default meta;
type Story = StoryObj<typeof ErrorBoundary>;

// Component that throws an error
const ErrorComponent = () => {
  throw new Error('Test error for ErrorBoundary');
};

export const WithError: Story = {
  args: {
    children: <ErrorComponent />,
  },
  globals: {
    theme: 'light',
  },
};

export const WithNormalContent: Story = {
  args: {
    children: <div style={{ padding: '2rem', textAlign: 'center' }}>Normal content - no error</div>,
  },
  globals: {
    theme: 'light',
  },
};

export const DarkMode: Story = {
  args: {
    ...WithError.args,
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
