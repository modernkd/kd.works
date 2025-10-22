import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@chromatic-com/storybook'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    // Exclude vitest and related modules from Storybook build to prevent conflicts
    config.optimizeDeps = {
      ...config.optimizeDeps,
      exclude: ['strip-literal', 'js-tokens'],
    };
    return config;
  },
  env: (config) => ({
    ...config,
    VITE_SUPABASE_URL: 'https://mock-supabase-url.supabase.co',
    VITE_SUPABASE_ANON_KEY: 'mock-anon-key',
  }),
};
export default config;
