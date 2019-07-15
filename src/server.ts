import app from './app';
import { AddressInfo } from 'net';

const server = app.listen(app.get('port'), function() {
  console.log('ENVIRONMENT: ', process.env.ENVIRONMENT);

  const address: string | AddressInfo = server.address();
  const bind: any = typeof address === 'string' ? 'pipe ' + address : 'port ' + address.port;

  console.log(`Fake PRIME Backend is running on ${bind}`);
});

export default server;
