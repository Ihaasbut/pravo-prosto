# Право Просто

Фронтенд сайта юридической компании: услуги, команда, новости, контакты. Контент сейчас в mock-данных, бэкенда нет.

## Стек

React 19, TypeScript, Vite, React Router, CSS Modules, GSAP, Embla/Swiper, react-hook-form, Яндекс.Карты.

## Запуск

```bash
npm install
npm run dev
```

| Команда           | Что делает        |
| ----------------- | ----------------- |
| `npm run dev`     | локальный сервер  |
| `npm run build`   | production-сборка |
| `npm run preview` | просмотр сборки   |
| `npm run lint`    | ESLint            |

Нужны Node.js 20+ и npm.

## Роуты

Язык в URL: `ru` или `en`. Корень `/` редиректит на `/ru`.

| Путь                    | Страница                    |
| ----------------------- | --------------------------- |
| `/:lang`                | главная                     |
| `/:lang/services`       | услуги                      |
| `/:lang/services/:slug` | одна услуга                 |
| `/:lang/team`           | команда                     |
| `/:lang/news`           | новости                     |
| `/:lang/news/:slug`     | одна новость                |
| `/:lang/contacts`       | контакты                    |
| `/:lang/privacy-policy` | политика конфиденциальности |
| `/:lang/user-agreement` | пользовательское соглашение |

## Структура

```
src/
  pages/        страницы
  layouts/      шапка, подвал, меню, оболочка
  components/   секции и UI
  context/      язык, тема, меню, модалка заявки
  mockData/     общие mock-данные
  hooks/
  styles/
```

Тексты страниц — в `src/pages/*/mockData` и `src/mockData`, пары `.ru.ts` / `.en.ts`.

## Как устроено

- Язык задаёт `LanguageProvider`, тема — `ThemeProvider`, заявка — `ModalProvider`.
- Форма заявки проверяет поля и сбрасывается, на сервер ничего не уходит.
- Карта на контактах — Яндекс.Карты, ключ сейчас в `src/components/sections/yandexMap/YandexMap.tsx`.
- `telegram-webapp.ts` подгоняет viewport, если сайт открыт как Telegram Mini App.
