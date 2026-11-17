// import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react' 
//! import babel from '@rolldown/plugin-babel', { reactCompilerPreset } este ultimo reactCompiler va arriba se movio para la parte de los Test

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // babel({ presets: [reactCompilerPreset()] })
  ],
  test:{
    environment: 'jsdom',
    globals: true,
  }
})
