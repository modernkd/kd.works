import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Only apply manual chunks for client builds, not SSR
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react';
            if (id.includes('react-router')) return 'router';
            if (id.includes('i18next')) return 'i18n';
            if (id.includes('howler')) return 'sounds';
            if (id.includes('partysocket')) return 'partykit';
            if (id.includes('@emailjs')) return 'email';
            if (id.includes('emoji-picker')) return 'emoji';
          }
        },
      },
    },
  },
  ssr: {
    noExternal: ['react-router-dom'],
  },
});
