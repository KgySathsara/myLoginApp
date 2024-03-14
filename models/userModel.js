const mysql = require('mysql');

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'MYLOGINAPP'
});

connection.connect();

module.exports = {
    createUser: function(username, password, callback) {
        connection.query('INSERT INTO user (username, password) VALUES (?, ?)', [username, password], callback);
    },
    getUserByUsernameAndPassword: function(username, password, callback) {
        connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], callback);
    }
};
