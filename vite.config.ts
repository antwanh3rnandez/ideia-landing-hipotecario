import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import fonts from 'vite-plugin-fonts'; // Importa fonts
import dotenv from 'dotenv';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {}
  },
  plugins: [
    react(),
    reactRefresh(),
    fonts.default({
      google: {
        families: [
          'Bebas Neue',
          'Rubik',
          'Roboto',
          'Poppins'
          // Agrega otras fuentes si lo deseas
        ]
      }
    })
  ],
})
