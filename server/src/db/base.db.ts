import pgPromise from 'pg-promise';
import dbConfig from './config';

// const dbConnect = `postgresql://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${
//   dbConfig.port
// }/${dbConfig.database}?ssl=true`;
// const pgp = pgPromise({});
// export const psql = pgp(dbConnect);

export class BaseDB {
  psql: pgPromise.IDatabase<{}>;
  constructor() {
    const dbConnect = `postgresql://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${
      dbConfig.port
    }/${dbConfig.database}?ssl=true`;
    const pgp = pgPromise({});
    this.psql = pgp(dbConnect);
  }
}
