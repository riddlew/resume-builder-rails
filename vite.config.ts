import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import path from 'path'

export default defineConfig({
  plugins: [
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
