module.exports = {
  port: 5000,
  consoleLog: process.env.CONSOLE_LOGGING,
  api_info: "/api/v1",
  db: {
    client: "postgres",
    logging: process.env.SEQUELIZE_LOGGING,
    connection: {
      development: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        charset: "UTF8"
      }
    },
    define: {
      timestamps: true,
      underscored: false,
      freezeTableName: true,
      paranoid: false
    }
  },
  session: {
    secret: process.env.SECRET,
    key: process.env.SECRET_KEY,
    resave: true,
    rolling: true,
    saveUninitialized: false,
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 86400000,
      secure: false
    }
  }
};
