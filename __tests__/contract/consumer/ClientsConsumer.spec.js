"use strict";

const Matchers = require('@pact-foundation/pact')
const { getClients, postClient } = require("../../../src/consumer");
//const {provider} = require("")


// тесст на метод GET /clients:
describe("Clients Service", () => {
      const GET_EXPECTED_BODY = [ // то что долен вернутьметод GET /clients
            {
                  "firstName": "Lisa",
                  "lastName": "Simpson",
                  "age": 8,
                  "id": 1
            },
            {
                  "firstName": "Wonder",
                  "lastName": "Woman",
                  "age": 30,
                  "id": 2
            },
            {
                  "firstName": "Homer",
                  "lastName": "Simpson",
                  "age": 39,
                  "id": 3
            }
      ]

      // убирала:
      //afterEach(() => provider.verify());

      describe("GET Clients", () => {
            beforeEach(() => {
                  const interaction = {
                        state: "i have list of clients", // название теста
                        uponReceiving: "a request for all clients",
                        withRequest: {
                              method: "GET",
                              path: "/clients",
                              headers: {
                                    Accept: "application/json, text-plain, */*,"
                              },
                        },
                        willRespondWidth: { // что ждем в ответе:
                              status: 200,
                              headers: {
                                    "content-Type": "application/json; charset: utf-8",
                              },
                              body: GET_EXPECTED_BODY, // то что долен вернуть сервер
                        },
                  }
                  // убирала
                  //return provider.addInteraction(interaction);
            })


            // сам тест: 
            test("return correct body, header and statusCode", async () => {
                  const response = await getClients(); // вызов функции  getClients
                  console.log('response in test ', response);
                  expect(response.headers['content-type']).toBe("application/json; charset=utf-8"); // проверка загловк аответа
                  expect(response.data).toEqual(GET_EXPECTED_BODY); //  проверка  тела(отвта)
                  expect(response.status).toEqual(200);
            });
      })

});
