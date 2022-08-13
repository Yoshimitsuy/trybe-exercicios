const connection = require('./connection');

const userModel = {

  checkError: async (id) => {
    const sql = 'SELECT * FROM users WHERE id = ?;';
    const [[user]] = await connection.execute(sql, [id]);

    if (!user) throw new Error('User not found');
  },

  create: async (user) => {
    const { firstName, lastName, email, password } = user;

    const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
    const [{insertId}] = await connection.execute(sql, [firstName, lastName, email, password]);

    return insertId;
  },

  findAll: async () => {
    const sql = 'SELECT * FROM users';
    const [users] = await connection.execute(sql);

    return users;
  },

  findById: async (id) => {
    const sql = 'SELECT * FROM users WHERE id = ?;';
    const [[user]] = await connection.execute(sql, [id]);

    return user;
  },

  update: async (id, user) => {
    const { firstName, lastName, email, password } = user;

    const sql = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;';
    const xaxa = connection.execute(sql, [ firstName, lastName, email, password, id ]);
  },

  delete: async (id) => {
    const sql = 'DELETE FROM users WHERE id = ?;';
    
    const query = await connection.execute(sql, [id]);
  }
};

module.exports = userModel;