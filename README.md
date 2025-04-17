# Light Landing - Платформа для покупки самолетов

Платформа для поиска и покупки самолетов и вертолетов.

## Локальная разработка

1. Установите зависимости:
```bash
npm install
```

2. Запустите сервер разработки:
```bash
npm run dev
```

3. Откройте [http://localhost:3000](http://localhost:3000)

## Деплой на Vercel

1. Установите Vercel CLI:
```bash
npm i -g vercel
```

2. Войдите в Vercel:
```bash
vercel login
```

3. Деплой:
```bash
vercel
```

Или через веб-интерфейс:
1. Зайдите на [vercel.com](https://vercel.com)
2. Импортируйте репозиторий
3. Настройте проект:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `public`
   - Install Command: `npm install`

## Структура проекта

- `public/` - статические файлы
- `src/` - исходные файлы
- `server.js` - серверная часть
- `vercel.json` - конфигурация Vercel

## Технологии

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript
- Express.js
- Vercel 