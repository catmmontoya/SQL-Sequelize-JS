import { DataTypes, Model } from "sequelize";
import util from "util";
import connectToDB from "./db.js";

const db = await connectToDB("postgresql:///animals");

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName() {
    return this.fname + " " + this.lname;
  }
}

Human.init(
  {
    humanId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    lname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  {
    modelName: "human",
    sequelize: db,
  }
);
export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Animal.init(
  {
    animalId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    birthYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    modelName: "animal",
    sequelize: db,
  }
);

// TODO: Define Relationship
Human.hasMany(Animal, { foreignKey: "humanId" });
Animal.belongsTo(Human, { foreignKey: "humanId" });

export default db;
