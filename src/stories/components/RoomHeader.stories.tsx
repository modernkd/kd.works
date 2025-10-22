import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../../i18n';
import RoomHeader from '../../components/cowbell/RoomHeader';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Components/Cowbell/RoomHeader',
  component: RoomHeader,
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
} satisfies Meta<typeof RoomHeader>;

export default meta;
type Story = StoryObj<typeof RoomHeader>;

export const Default: Story = {
  args: {
    room: 'test-room',
    nickname: 'TestUser',
    users: [
      { id: '1', name: 'Alice' },
      { id: '2', name: 'Bob' },
      { id: '3', name: 'Charlie' },
    ],
    isOnline: true,
  },
  globals: {
    theme: 'light',
  },
};

export const SingleUser: Story = {
  args: {
    ...Default.args,
    users: [{ id: '1', name: 'Alice' }],
  },
  globals: {
    theme: 'light',
  },
};

export const Offline: Story = {
  args: {
    ...Default.args,
    isOnline: false,
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
