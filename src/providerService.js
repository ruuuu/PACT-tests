const { server, importData } = require("./provider")
importData()

// относится к серверу:
server.listen(8081, () => {
  console.log("Client Service running on http://localhost:8081")
})