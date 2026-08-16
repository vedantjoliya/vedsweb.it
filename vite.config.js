import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  envPrefix: ['VITE_', 'NEXT_PUBLIC_', 'SUPABASE_'],

  build: {
    // Use oxc (Rolldown's built-in minifier, Vite 8 default) — no separate install needed
    minify: 'oxc',
    // Minify CSS output
    cssMinify: true,
    // Don't generate sourcemaps in production (smaller deploy size)
    sourcemap: false,
    // Inline assets smaller than 4KB as base64 (saves HTTP requests)
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Manual chunk splitting for optimal long-term browser caching.
        // Vendor chunks only change when deps are updated — not on every deploy.
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-core';
          }
          if (id.includes('node_modules/react-router') || id.includes('node_modules/react-router-dom')) {
            return 'router';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons';
          }
          if (id.includes('node_modules/')) {
            return 'vendor';
          }
        },
      },
    },
  },
})

