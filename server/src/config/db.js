import { Sequelize } from "sequelize";

const sequelize = new Sequelize("clothes", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;




