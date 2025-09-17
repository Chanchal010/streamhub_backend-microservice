# Authentication Service

## Overview
Handles user authentication, JWT token management, OAuth integration, and security features.

## Features
- JWT authentication with refresh tokens
- Social media OAuth (Google, GitHub)
- Rate limiting for auth endpoints
- Password hashing with bcrypt
- User session management

## API Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/refresh` - Refresh JWT token
- `POST /api/auth/logout` - User logout
- `GET /api/auth/oauth/google` - Google OAuth
- `GET /api/auth/profile` - Get user profile

## Environment Variables
```env
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_secret
MONGODB_URI=mongodb://localhost:27017/auth_db
REDIS_URL=redis://localhost:6379
```

## Development
```bash
pnpm install
pnpm run dev
```

## Testing
```bash
pnpm test
```