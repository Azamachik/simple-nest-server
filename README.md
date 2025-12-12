# 🚀 NestJS Auth
**Production-ready REST API with JWT authentication, role-based access control (RBAC), Swagger docs, and Docker support**

## Запуск через docker-контейнер:

```bash
git clone git@github.com:Azamachik/simple-nest-server.git
cd simple-nest-server

# Запустите базу данных и API в фоне
docker-compose up --build -d
```

Через ~15 секунд сервис будет готов:

- **API**: `http://localhost:3000/api`
- **Swagger UI (документация)**: `http://localhost:3000/api/docs`


## Установка и запуск (локально)
```bash
git clone git@github.com:Azamachik/simple-nest-server.git
cd nestjs-rbac-api
npm install
# Заменить в .dev.env переменную окружения POSTGRES_HOST на localhost
npm run start:dev
```

