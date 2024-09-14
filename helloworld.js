var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "Hello Ya'll from Mikeyrat Formicaman!!"
   response.end('Hello Yall from Mikeyrat Formicaman!! Newly Modified for Ansible assignment! Now updated with Ansible-playbook!Yay!\n Third time is a charm!\n')
}).listen(3000)

// Console will print the message
console.log('Server running')
