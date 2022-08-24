const { User } = require('../database/models')

const UserService = {
  findAll: async () => {
    const users = await User.findAll();

    return users;
  },

  findById: async (id) => {
    const user = await User.findByPk(id);

    return user;
  },

  create: async (newUser) => {
    const user = await User.create(newUser);

    return user;
  },

  update: async (newInfo, id) => {
    await User.update(newInfo, {
      where: {
        id,
      }
    });
  },

  delete: async (id) => {
    await User.destroy({
      where: {
        id,
      }
    });
  },
};

module.exports = UserService;