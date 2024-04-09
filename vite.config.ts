// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import svgr from 'vite-plugin-svgr'

// export default defineConfig({
//   base: "/",
//   plugins: [
//     react(),
//     svgr({svgrOptions: {
//         }
//       })
//     ],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    svgr({svgrOptions: {
        }
      })
    ],
    build: {
      rollupOptions: {
        output: {
          entryFileNames: '[name]-[hash].js',
          chunkFileNames: '[name]-[hash].js',
          assetFileNames: '[name]-[hash].[ext]'
        }
      }
    },
    resolve: {
      alias: {
        // Поддержка псевдонимов для импортов
      },
      extensions: ['.js', '.jsx'], // Устанавливаем MIME-тип для JavaScript файлов
      mainFields: ['module', 'main'] // Определяем основные поля для разрешения модулей
    }
})