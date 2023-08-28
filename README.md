# GraphQL Demo Architecture

This code was made to accompany an informal presentation introducing GraphQL with an evolving real world application architecture.

To run this demo project locally:

1. Clone the repo and create a `.env` file in the root of the directory. Paste the following into the `.env` file and save it.

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/graphql-demo?schema=public"
```

2. Run `docker-compose up` to start the PostgresDB.

3. Run `npx prisma migrate reset` to seed the database with sample data.

4. Run `npx nx run api-server:serve` to start the GraphQL server.

5. Run `npx nx run graphql-demo:serve` to start the Web App server.

6. Navigate to [http://localhost:4200](http://localhost:4200) to view the app home page or [http://localhost:4200/sandbox](http://localhost:4200/sandbox) to view the Apollo GraphQL sandbox.
