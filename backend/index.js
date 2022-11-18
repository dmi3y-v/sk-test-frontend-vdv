const ws = require("ws");
const dbAPI = require("../db/dbPhonesAPI.js");

const InitDB = async () => {
  await dbAPI.dbPhonesInit(dbAPI.dbPhonesPath);
};

InitDB();

const wss = new ws.Server({ port: 3001 });

const clients = [];

const onConnect = (client) => {
  const id = Date.now();
  clients[id] = client;

  console.log(`New client ${id}`);

  client.on("message", async (rawMessage) => {
    try {
      const message = await JSON.parse(rawMessage);

      switch (message.action) {
        case "FETCH_PHONES": {
          const data = await dbAPI.selectAllFromPhonesTable(dbAPI.dbPhonesPath);

          client.send(JSON.stringify({ action: "SET_PHONES", data: data }));
          break;
        }
        case "ADD_PHONE": {
          const phone = message.data;

          await dbAPI.insertPhoneIntoTable(dbAPI.dbPhonesPath, [
            phone.countryCode,
            phone.countryPhone,
            phone.phoneNumber,
          ]);

          const data = await dbAPI.selectAllFromPhonesTable(dbAPI.dbPhonesPath);

          for (const id in clients) {
            clients[id].send(
              JSON.stringify({
                action: "UPDATE_PHONES_AFTER_INSERT",
                data: data,
              })
            );
          }

          break;
        }
        case "DELETE_PHONE": {
          const id = message.data;

          await dbAPI.deletePhoneFromTable(dbAPI.dbPhonesPath, id);

          const data = await dbAPI.selectAllFromPhonesTable(dbAPI.dbPhonesPath);

          for (const id in clients) {
            clients[id].send(
              JSON.stringify({
                action: "UPDATE_PHONES_AFTER_DELETE",
                data: data,
              })
            );
          }

          break;
        }
        default:
          console.log("Неизвестная команда");
          break;
      }
    } catch (error) {
      console.log(error);
    }
  });

  client.on("close", () => {
    delete clients[id];
    console.log(`Client closed ${id}`);
  });
};

wss.on("connection", onConnect);
