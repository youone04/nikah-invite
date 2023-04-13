import { Sequelize } from "sequelize";
import db from "../config/Database.js";
// import UserModels from "./UserModels.js";


const dbs = {};
dbs.Sequelize = Sequelize;
dbs.db = db;

// dbs.user = UserModels(db , Sequelize);


// // relasi user dan role (many to one)
// dbs.user.hasMany(dbs.roles , {as : "roles"});
// dbs.roles.belongsTo(dbs.user, {
//     foreignKey: 'userId',
//     as: "user"
// });

// //relasi many to many mahasiswa2 dan matkul
// dbs.matakuliah.belongsToMany(dbs.mahasiswa2, { through: dbs.mahasiswa_matkul });
// dbs.mahasiswa2.belongsToMany(dbs.matakuliah, { through: dbs.mahasiswa_matkul });

export default dbs;