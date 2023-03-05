const env = require("../../utilities/env")

module.exports = {
    development: {
        username: env("DB_USERNAME", "root"),
        password: env("DB_PASSWORD", ""),
        database: env("DB_NAME", env("APP_NAME")),
        host: env("DB_HOST", "localhost"),
        dialect: env("DB_DRIVER", "mysql"),
        logging: false
    },
    test: {
        username: env("DB_USERNAME", "root"),
        password: env("DB_PASSWORD", ""),
        database: env("DB_NAME", env("APP_NAME")),
        host: env("DB_HOST", "localhost"),
        dialect: env("DB_DRIVER", "mysql"),
        logging: true
    },
    production: {
        username: env("DB_USERNAME"),
        password: env("DB_PASSWORD"),
        database: env("DB_NAME"),
        host: env("DB_HOST"),
        dialect: env("DB_DRIVER", "mysql"),
        logging: false
    }
}