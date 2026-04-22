# Базовый образ
FROM node:20-alpine

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --include=dev

# Копируем остальные файлы
COPY . .

# Аргументы для Vite (опционально)
ARG VITE_HOST
ARG VITE_TG_BOT_NAME
ARG VITE_API_URL

# ENV переменные (чтобы Vite их видел)
ENV VITE_HOST=$VITE_HOST
ENV VITE_TG_BOT_NAME=$VITE_TG_BOT_NAME
ENV VITE_API_URL=$VITE_API_URL

# Порт для Vite dev server
EXPOSE 5278

RUN npm run build

# Запуск dev-сервера на всех интерфейсах, чтобы был доступ из контейнера
CMD ["npm", "run", "preview:prod", "--", "--host", "0.0.0.0", "--port", "5278"]

