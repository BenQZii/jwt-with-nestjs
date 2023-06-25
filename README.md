# jwt-with-nestjs #
Basic jwt with nestjs

## API Endpoint
```
- [POST] http://localhost:3000/auth/login
  Body: {
    email: string,
    password: string,
  }

 ** you can see user lists in path: src\module\users\users.service.ts
- [GET] http://localhost:3000/auth/profile
  Header: Bearer Token
```

## Installation
```
1. git clone https://github.com/andreaharris-go/react-tailwind-datepick.git
2. cd jwt-with-nestjs
3. npm install
4. npm run build
5. npm run start:dev
```

Dev URL. http://localhost:3000
