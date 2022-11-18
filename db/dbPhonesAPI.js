const sqlite = require("aa-sqlite");

const dbPhonesPath = "../db/phones";

const dbPhonesInit = async (db) => {
  try {
    await sqlite.open(db);
    await sqlite.run(
      "CREATE TABLE IF NOT EXISTS phones (id INTEGER PRIMARY KEY AUTOINCREMENT, country_code VARCHAR(2), country_phone VARCHAR(10), phone_number VARCHAR(10))"
    );
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

const insertPhoneIntoTable = async (db, phone) => {
  try {
    await sqlite.open(db);
    await sqlite.push(
      "INSERT INTO phones (country_code, country_phone, phone_number) VALUES (?,?,?)",
      phone
    );
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

const selectAllFromPhonesTable = async (db) => {
  try {
    await sqlite.open(db);
    const rows = await sqlite.all("SELECT * FROM phones");
    return rows;
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

const deletePhoneFromTable = async (db, id) => {
  try {
    await sqlite.open(db);
    await sqlite.push("DELETE FROM phones WHERE id=?", id);
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

module.exports.dbPhonesPath = dbPhonesPath;
module.exports.dbPhonesInit = dbPhonesInit;
module.exports.insertPhoneIntoTable = insertPhoneIntoTable;
module.exports.selectAllFromPhonesTable = selectAllFromPhonesTable;
module.exports.deletePhoneFromTable = deletePhoneFromTable;
