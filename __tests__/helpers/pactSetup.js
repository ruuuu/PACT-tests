// import path from "path"; //это ECMA ES6, у них в видео так: const path=require("path")
// import Pact from "@pact-foundation/pact";

const path = require("path")
const Pact = require("@pact-foundation/pact").Pact

global.port = 8081;
global.provider = new Pact({
      port: global.port,
      log: path.resolve(process.cwd(), "__tests__/contract/logs", "logs-pact.log"), // после запука тесиа, автоматом создаться папка logs для логирования
      dir: path.resolve(process.cwd(), "__tests__/contract/pacts"), // после запуск теста  автомато создаться папка pacts
      spec: 2,
      logLevel: 'INFO',
      pactfileWriteMode: "overwrite",
      consumer: "Frontend",
      provider: "ClientsService"
})