import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../../i18n';
import PageContainer from '../../components/ui/PageContainer';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Components/UI/PageContainer',
  component: PageContainer,
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
} satisfies Meta<typeof PageContainer>;

export default meta;
type Story = StoryObj<typeof PageContainer>;

export const Default: Story = {
  args: {
    children: <div style={{ padding: '2rem', textAlign: 'center' }}>Page Content</div>,
  },
  globals: {
    theme: 'light',
  },
};

export const WithComplexContent: Story = {
  args: {
    children: (
      <div style={{ padding: '2rem' }}>
        <h1>Sample Page</h1>
        <p>This is a sample page with various content elements.</p>
        <button>Sample Button</button>
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
