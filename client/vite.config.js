import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import html2canvas from 'html2canvas';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },build: {
    rollupOptions: {
      external: [html2canvas],
    },
  },

  plugins: [react()],
});
