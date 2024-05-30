const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "aws-0-ap-southeast-1.pooler.supabase.com"),
      port: env("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "postgres"),
      user: env("DATABASE_USERNAME", "postgres.mldhskkhslqrrnldwxrt"),
      password: env("DATABASE_PASSWORD", "Pratyush19@"),
      ssl: env.bool("DATABASE_SSL", false)
    },
    useNullAsDefault: true
  }
});