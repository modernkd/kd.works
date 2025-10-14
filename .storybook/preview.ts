import type { Preview } from '@storybook/react-vite';
// @ts-expect-error: Importing CSS files is not recognized by TypeScript
import '../src/globals.css';
// @ts-expect-error: Importing CSS files is not recognized by TypeScript
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'Light mode' },
          { value: 'dark', icon: 'circle', title: 'Dark mode' },
        ],
        showName: true,
      },
    },
  },
};

export default preview;
