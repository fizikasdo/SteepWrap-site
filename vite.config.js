import { defineConfig } from 'vite';
import { resolve } from 'path';

// ============================================================================
// Конфигурация локального сервера и сборщика Vite
// Vite используется для:
// 1. Быстрого запуска сайта на компьютере во время разработки (npm run dev)
// 2. Сборки готовых файлов для загрузки на хостинг (npm run build)
// ============================================================================

export default defineConfig({
  // Настройки локального сервера для предпросмотра
  server: {
    port: 3000,          // Запуск на порту 3000
    host: '0.0.0.0',     // Доступен для предпросмотра в системе
  },

  // Настройки сборки сайта в папку dist
  build: {
    rollupOptions: {
      // Перечисляем все HTML-страницы проекта, чтобы сборщик их не потерял
      input: {
        main: resolve(__dirname, 'index.html'),                // Главная страница (RU)
        enIndex: resolve(__dirname, 'en/index.html'),          // Главная страница (EN)
        enResearch: resolve(__dirname, 'en/research.html'),    // Исследование (EN)
        enTeam: resolve(__dirname, 'en/team.html'),            // Команда (EN)
        ruResearch: resolve(__dirname, 'ru/research.html'),    // Исследование (RU)
        ruTeam: resolve(__dirname, 'ru/team.html'),            // Команда (RU)
      },
    },
  },
});
