import jsonServer from 'json-server';
import path from 'path';
import cors from 'cors';  // Import cors

const server = jsonServer.create();
const router = jsonServer.router(path.join('src', 'db.json')); 
const middlewares = jsonServer.defaults();

// Enable CORS
server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is running on http://localhost:3001');
});
