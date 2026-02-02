import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages deployment to drastetter.github.io
// If deploying to a project page (e.g., drastetter.github.io/project-name),
// change base to '/project-name/'
export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' for user/org pages (drastetter.github.io)
})