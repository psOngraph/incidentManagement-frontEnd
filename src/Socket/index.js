import { io } from "socket.io-client";
const url = process.env.REACT_APP_API_BASE_URL;
export const socket = io("https://6db2-122-161-48-187.ngrok-free.app/", {
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: 50,
});
