import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    open: '/index.html',
    watch: {
      ignored: ['**/node_modules/**']
    }
  }
});
