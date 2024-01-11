import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/sendToGPT': {
        target: 'http://localhost:3001/sendToGPT',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sendToGPT/, ''),
      },
    },
  },
});
