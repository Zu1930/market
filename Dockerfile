# Используем официальный образ Node.js 20.10.0
FROM node:20.10.0

# Устанавливаем рабочую директорию
WORKDIR /app

# Устанавливаем переменные окружения
ENV DATABASE_URL=postgresql://postgres:o11Q85oT1qSnIbes@db.ejvmmldfakyyqsnykjla.supabase.co:5432/postgres
ENV ACCESS_TOKEN_SECRET=secretA
ENV REFRESH_TOKEN_SECRET=secretR

# Копируем обе части приложения (клиентскую и серверную) в контейнер
COPY . .

# Установка зависимостей и сборка клиентской части
RUN cd client && npm install && npm run build

# Установка зависимостей для серверной части
RUN cd server && npm install

# Определяем порт, который будет прослушивать сервер
EXPOSE 4000

# Запускаем сервер при запуске контейнера
CMD [ "node", "server/app.js" ]