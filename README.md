# Auth Project

Full-stack authentication starter project with FastAPI backend and Next.js frontend.

## Repository Layout

- `backend/`: FastAPI API server, SQLite user storage, JWT auth.
- `frontend/`: Next.js React app (App Router), pages for register/login/dashboard/contact.

---

## Backend (FastAPI)

### 1. Prerequisites
- Python 3.10+ (here 3.13)
- pip

### 2. Install

```bash
cd backend
pip install -r requirements.txt
```

### 3. Run server

```bash
cd backend
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

### 4. API Endpoints

- `GET /` - health check
- `POST /register` - create user
  - Body: `{ "username": "user", "email": "user@example.com", "password": "pass" }`
  - Success: `200 { "message": "User registered successfully" }`
  - Error: `400 Email already registered`
- `POST /login` - user login
  - Body: `{ "email": "user@example.com", "password": "pass" }`
  - Success: `200 { "access_token": "<jwt>", "token_type": "bearer" }`
  - Error: `401 Invalid credentials`
- `GET /me` - protected route
  - Header: `Authorization: Bearer <token>`
  - Success: user profile (id/username/email)
  - Error: `401 Could not validate credentials`

### 5. JWT Settings
- `SECRET_KEY` in `main.py`: change before production.
- `ALGORITHM=HS256`
- `ACCESS_TOKEN_EXPIRE_MINUTES=30`

### 6. Database
- `users.db` (SQLite) created automatically by `init_db()`.
- Table: `users(id, username, email unique, hashed_password)`.

---

## Frontend (Next.js)

### 1. Prerequisites
- Node.js 18+ (or LTS)
- npm/yarn

### 2. Install

```bash
cd frontend
npm install
```

### 3. Run app

```bash
cd frontend
npm run dev
```

- App starts at `http://localhost:3000`
- It calls backend at `http://localhost:8000` (CORS enabled on backend for localhost:3000)

### 4. Pages
- `/register` - register form
- `/login` - login form
- `/dashboard` - protected dashboard (should require token)
- `/contact` - sample contact page

### 5. Workflow
1. Register user.
2. Login to receive JWT.
3. Store `access_token` in localStorage/session local state.
4. Call protected `GET /me` using the Authorization header `Bearer <token>`.

---

## Troubleshooting

### 401 on /login
- Ensure user exists in `users.db`.
- Ensure passwords match; hashed password is checked by `passlib`.
- Use exact email/password from registration.

### 401 on /me
- Verify token from `/login` is sent exactly.
- Check in browser devtools network header `Authorization: Bearer <token>`.
- If token expired, re-login.

### Dependency errors
- If `passlib` or `python-jose` missing, run:

```bash
pip install -r backend/requirements.txt
```

---

## Security notes
- Do not use hardcoded `SECRET_KEY` in production.
- Use HTTPS for auth token transport.
- Add persistent DB migrations and index. 
