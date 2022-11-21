// import { get, post } from 'axios' // const axios = require('axios')
// import express from "express"
const axios = require('axios')
const express = require("express")
const server = express()
const getApiEndpoint = "http://localhost:8081" // всавляем урл сервера
// https://jsonplaceholder.typicode.com/todos/1


// получение спсика клиентов:
const getClients = async () => {
  const res = await axios
    .get(`${getApiEndpoint}/clients`) // отправка запроса GET, дожидаемся ответа от сервера
    .then((res) => {    // res-ответ от сервера
      //console.log('res from getClients ', res);
      return res;
    })
    .catch((err) => {  // обработки ошибок
      return err.res;
    })
  return res;
};


// получение клиента по его Id:
const getClient = async (id) => {
  const res = await axios
    .get(`${getApiEndpoint}/clients/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.res;
    })
  return res;
};



// метод POST:
const postClient = async (body) => {
  const res = await axios
    .post(`${getApiEndpoint}/clients`, body, { 'Content-Type': 'application/json;charset=utf-8' })
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err.res;
    })
  return res;
};



module.exports = {
  server,
  getClients,
  postClient,
  getClient,
};