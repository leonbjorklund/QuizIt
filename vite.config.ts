import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/hej': {
        target: 'http://localhost:3001/hej',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/hej/, ''),
      },
      '/test': {
        target: 'http://localhost:3001/test',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/test/, ''),
      },
    },
  },
});
