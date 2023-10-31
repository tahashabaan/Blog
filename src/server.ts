import App from "./app";

const app = new App()
const server = app.listen();
// Change the port number to the one you want to use
const getApp = app.getServer();
export  {server, getApp};