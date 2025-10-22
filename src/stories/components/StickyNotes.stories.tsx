import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '../../i18n';
import StickyNotesWrapper from '../../components/fridge/StickyNotesWrapper';
import { ThemeProvider } from '../ThemeProvider';

const meta = {
  title: 'Components/Fridge/StickyNotes',
  component: StickyNotesWrapper,
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
} satisfies Meta<typeof StickyNotesWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithNotes: Story = {
  args: {
    isDarkMode: false,
    notes: [
      {
        id: 1,
        name: 'Alice',
        title: 'Great work!',
        message: 'Love the interactive fridge. The sticky notes are a nice touch!',
        created_at: '2024-01-15T10:30:00Z',
      },
      {
        id: 2,
        name: 'Bob',
        title: 'Feedback',
        message: 'The sound effects are really fun. Keep up the good work!',
        created_at: '2024-01-16T14:20:00Z',
      },
      {
        id: 3,
        name: 'Charlie',
        title: 'Suggestion',
        message: 'Maybe add more fridge magnet colors?',
        created_at: '2024-01-17T09:15:00Z',
      },
    ],
  },
  globals: {
    theme: 'light',
  },
};

export const SingleNote: Story = {
  args: {
    isDarkMode: false,
    notes: [
      {
        id: 1,
        name: 'Alice',
        title: 'Great work!',
        message: 'Love the interactive fridge. The sticky notes are a nice touch!',
        created_at: '2024-01-15T10:30:00Z',
      },
    ],
  },
  globals: {
    theme: 'light',
  },
};

export const DarkMode: Story = {
  args: {
    ...WithNotes.args,
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
