import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../../i18n';
import CustomSoundModal from '../../components/modals/CustomSoundModal';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Components/Modals/CustomSoundModal',
  component: CustomSoundModal,
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
} satisfies Meta<typeof CustomSoundModal>;

export default meta;
type Story = StoryObj<typeof CustomSoundModal>;

export const AddMode: Story = {
  args: {
    isOpen: true,
    isEditing: false,
    selectedEmoji: '',
    selectedFile: null,
    onClose: () => {},
    onEmojiSelect: () => {},
    onFileChange: () => {},
    onSubmit: () => {},
  },
  globals: {
    theme: 'light',
  },
};

export const EditMode: Story = {
  args: {
    ...AddMode.args,
    isEditing: true,
    selectedEmoji: '🎵',
  },
  globals: {
    theme: 'light',
  },
};

export const DarkMode: Story = {
  args: {
    ...AddMode.args,
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
