import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../../i18n';
import FridgeDoor from '../../components/fridge/TheWholeAppliance';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Components/Fridge/FridgeDoor',
  component: FridgeDoor,
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
} satisfies Meta<typeof FridgeDoor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setLocale: () => {},
    onDarkModeToggle: () => {},
    isDarkMode: false,
    isFreezerOpen: false,
    onFreezerToggle: () => {},
    handleNoteTaking: () => {},
    isFormOpen: false,
    isFridgeOpen: false,
    onFridgeToggle: () => {},
    onThemeChange: () => {},
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

export const FreezerOpen: Story = {
  args: {
    ...Default.args,
    isFreezerOpen: true,
  },
  globals: {
    theme: 'light',
  },
};

export const FridgeOpen: Story = {
  args: {
    ...Default.args,
    isFridgeOpen: true,
  },
  globals: {
    theme: 'light',
  },
};
