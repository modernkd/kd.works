import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../../i18n';
import SignInForm from '../../components/modals/SignInForm';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Components/Modals/SignInForm',
  component: SignInForm,
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
} satisfies Meta<typeof SignInForm>;

export default meta;
type Story = StoryObj<typeof SignInForm>;

export const Default: Story = {
  args: {
    room: 'test-room',
    nickname: '',
    setNickname: () => {},
    onSignIn: () => {},
  },
  globals: {
    theme: 'light',
  },
};

export const WithNickname: Story = {
  args: {
    ...Default.args,
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
