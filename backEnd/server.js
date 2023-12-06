const http = require('node:http');
const fs = require('fs')

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader("Content-Type", 'text/html')

  let path = '../frontEnd/views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
  
    case '/profile':
      path += 'profileUser.html';
      res.statusCode = 200;
      break;
  
    // case '/about-Me':
    //   res.statusCode = 301;
    //   res.setHeader("Location", '/profile')
    //   res.end();
    //   break;

    case '/authentication':
      path += 'authentication.html';
      res.statusCode = 200;
      break;
  
    default:
      path += 'Error404.htm';
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log('Happened an error');
      res.end()
    } else{
      res.end(data)
    }
  })

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});




