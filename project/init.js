const DataBase = require("better-sqlite3")

const db=new DataBase("lectures.db")

db.exec(`
    CREATE TABLE IF NOT EXISTS lectures(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        surname TEXT,
        age INTEGER,
        profession TEXT,
        photo TEXT
    )
`)