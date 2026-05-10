import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
    RubyPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@shared': path.resolve(__dirname, './app/javascript/shared'),
      '@components': path.resolve(__dirname, './app/javascript/components'),
    }
  },
})
