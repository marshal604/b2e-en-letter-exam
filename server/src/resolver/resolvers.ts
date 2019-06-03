import { psql } from '@db/base.db';
export const resolvers = {
  Query: {
    sayHello: (_: any, arg: { name: string }) => `Hello ${arg.name}!`,
    psqlTest: (): Promise<any> => {
      const sql = 'SELECT * FROM psql_test';
      return psql.manyOrNone(sql);
    }
  }
};
