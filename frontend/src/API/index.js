import store from "../store/index.js";
import { setPhones } from "../store/rootSlice.js";

const server = new WebSocket("ws://localhost:3001");

const fetchPhones = () => {
  server.onopen = () => server.send(JSON.stringify({ action: "FETCH_PHONES" }));
  return false;
};

const addPhoneIntoDB = (phone) => {
  server.send(JSON.stringify({ action: "ADD_PHONE", data: phone }));
  return false;
};

const deletePhoneFromDB = (id) => {
  server.send(JSON.stringify({ action: "DELETE_PHONE", data: id }));
  return false;
};

server.onmessage = (rawMessage) => {
  try {
    const message = JSON.parse(rawMessage.data);
    switch (message.action) {
      case "SET_PHONES": {
        store.dispatch(setPhones(message.data));
        break;
      }
      case "UPDATE_PHONES_AFTER_INSERT": {
        store.dispatch(setPhones(message.data));
        break;
      }
      case "UPDATE_PHONES_AFTER_DELETE": {
        store.dispatch(setPhones(message.data));
        break;
      }
      default:
        console.log("Неизвестная команда");
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

export { fetchPhones, addPhoneIntoDB, deletePhoneFromDB };
