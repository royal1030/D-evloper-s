// import axios from "axios";
const axios = require("axios");

const url1 = "http://127.0.0.1:3003/events";
const url2 = "https://127.0.0.1:3003/news";
const url3 = "https://127.0.0.1:3003/notices";

export const addUser1 = async (user) => {
  return await axios.post(url1, user);
};

export const addUser2 = async (user) => {
  return await axios.post(url2, user);
};

export const addUser3 = async (user) => {
  return await axios.post(url3, user);
};
