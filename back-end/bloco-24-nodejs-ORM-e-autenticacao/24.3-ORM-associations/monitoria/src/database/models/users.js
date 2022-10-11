const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fullName: DataTypes.STRING,
  }, {
    underscored: true,
    tableName: 'users',
    timestamps: false,
  })

  return User
}

module.exports = User;