import type { Preview } from '@storybook/react-vite';
// @ts-expect-error: Importing CSS files is not recognized by TypeScript
import '../src/globals.css';
// @ts-expect-error: Importing CSS files is not recognized by TypeScript
import '../src/index.css';

// Initialize i18n for Storybook
import '../src/i18n';

// Mock global objects for Storybook
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    length: 0,
    key: () => null,
  },
  writable: true,
});

Object.defineProperty(window, 'navigator', {
  value: {
    ...window.navigator,
    onLine: true,
    userAgent: window.navigator?.userAgent || 'Mozilla/5.0 (compatible; Storybook)',
  },
  writable: true,
});

// Mock PartySocket globally for Storybook
Object.defineProperty(window, 'PartySocket', {
  value: class MockPartySocket {
    constructor() {
      return {
        addEventListener: () => {},
        send: () => {},
        close: () => {},
        removeEventListener: () => {},
      };
    }
  },
  writable: true,
});

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
