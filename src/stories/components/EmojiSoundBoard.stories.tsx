import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../../i18n';
import EmojiSoundBoard from '../../components/cowbell/EmojiSoundBoard';
import { ThemeProvider } from '../ThemeProvider';
import { emojis } from '../../lib/soundMap';

const meta = {
  title: 'Components/Cowbell/EmojiSoundBoard',
  component: EmojiSoundBoard,
  decorators: [
    (Story, context) => {
      const storyTheme = context.parameters?.theme || context.globals?.theme || 'light';
      return (
        <ThemeProvider initialTheme={storyTheme}>
          <HelmetProvider>
            <BrowserRouter>
              <div style={{ width: '40rem' }}>
                <Story />
              </div>
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
} satisfies Meta<typeof EmojiSoundBoard>;

export default meta;
type Story = StoryObj<typeof EmojiSoundBoard>;

export const Default: Story = {
  args: {
    emojis: emojis.concat(['🎵', '🎸']),
    customSounds: {},
    onEmojiClick: (emoji) => {
      console.log(`Clicked emoji: ${emoji}`);
    },
    onManageClick: () => {},
    filterFoodEmojis: false,
  },
  globals: {
    theme: 'light',
  },
};

export const WithCustomSounds: Story = {
  args: {
    ...Default.args,
    customSounds: {
      '🎵': 'data:audio/wav;base64,mock-data',
      '🎸': 'data:audio/wav;base64,mock-data-2',
    },
  },
  globals: {
    theme: 'light',
  },
};

export const FilterFoodEmojis: Story = {
  args: {
    ...Default.args,
    emojis,
    filterFoodEmojis: true,
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
