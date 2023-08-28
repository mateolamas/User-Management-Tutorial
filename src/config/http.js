import {createServer} from 'http';
import expressApp from '#Config/express.js';

//creamos servidor HTTP y le pasamos express
const httpServer = createServer(expressApp);

export default httpServer;