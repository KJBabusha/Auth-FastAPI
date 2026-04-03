# Frontend (Next.js) for Auth Project

This frontend works with the backend API at `http://localhost:8000` and offers registration, login, and a protected dashboard.

## Setup

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000`.

## Pages
- `/register` - register form posts to `POST http://localhost:8000/register`
- `/login` - login form posts to `POST http://localhost:8000/login`
- `/dashboard` - should display user data (calls `GET http://localhost:8000/me` with Bearer token)
- `/contact` - sample contact UI

## Token handling
- Store token after login (localStorage/session state)
- Send auth header for protected endpoints: `Authorization: Bearer <token>`

## Notes
- Ensure backend is running and CORS allows `http://localhost:3000`.
- For errors, inspect browser console + network details.
