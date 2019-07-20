import pgPromise from 'pg-promise';
import dbConfig from './config';

const dbConnect = `postgresql://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${
  dbConfig.port
}/${dbConfig.database}?ssl=true`;
const pgp = pgPromise({});
const psql = pgp(dbConnect);
export class BaseDB {
  psql: pgPromise.IDatabase<unknown>;
  constructor() {
    this.psql = psql;
  }
}
