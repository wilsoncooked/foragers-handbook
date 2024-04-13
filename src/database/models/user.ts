import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../config';

class User extends Model {
  public id!: number; // integer incremental by 1
  public firstName!: string; // charvar
  public lastName!: string; // charvar
  public email!: string; // charvar
  public readonly createdAt!: Date; // timestamp with time zone
  public readonly updatedAt!: Date; // timestamp with time zone
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
}, {
  sequelize: sequelizeConnection,
  modelName: 'user',
  tableName: 'users',
});

export default User;
