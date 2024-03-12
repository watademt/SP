const mysql = require("mysql2");
const db_connection = mysql
 .createConnection({
 host: "localhost", // имя хоста
 user: "root", // имя пользователя
 database: "pe-11b_malygina", // имя базы данных
 password: "1RachelAmber9", // пароль от базы данных
 })
 .on("error", (err) => {
 console.log("Failed to connect to Database - ", err);
 });
module.exports = db_connection;