import pgPromise from 'pg-promise';
export declare class BaseDB {
    psql: pgPromise.IDatabase<{}>;
    constructor();
}
