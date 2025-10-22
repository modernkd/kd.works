import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../../i18n';
import ManageCustomSoundsModal from '../../components/modals/ManageCustomSoundsModal';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Components/Modals/ManageCustomSoundsModal',
  component: ManageCustomSoundsModal,
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
} satisfies Meta<typeof ManageCustomSoundsModal>;

export default meta;
type Story = StoryObj<typeof ManageCustomSoundsModal>;

export const WithSounds: Story = {
  args: {
    isOpen: true,
    customSounds: {
      '🎵': 'data:audio/wav;base64,mock-data',
      '🎸': 'data:audio/wav;base64,mock-data-2',
      '🥁': 'data:audio/wav;base64,mock-data-3',
    },
    onClose: () => {},
    onAddClick: () => {},
    onEdit: () => {},
    onDelete: () => {},
  },
  globals: {
    theme: 'light',
  },
};

export const Empty: Story = {
  args: {
    ...WithSounds.args,
    customSounds: {},
  },
  globals: {
    theme: 'light',
  },
};

export const DarkMode: Story = {
  args: {
    ...WithSounds.args,
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
