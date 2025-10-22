import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../../i18n';
import ConnectingScreen from '../../components/modals/ConnectingScreen';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Components/Modals/ConnectingScreen',
  component: ConnectingScreen,
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
} satisfies Meta<typeof ConnectingScreen>;

export default meta;
type Story = StoryObj<typeof ConnectingScreen>;

export const Default: Story = {
  args: {
    room: 'test-room',
    nickname: 'TestUser',
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
