const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('sum.html').pipe(res)
})

server.listen(8080);