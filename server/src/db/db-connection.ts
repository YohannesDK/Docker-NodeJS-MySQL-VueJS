import dotenv  from "dotenv";
import mysql from "mysql2";
dotenv.config({
  path: '.env'
});


class DBConnection {
  db!: mysql.Pool;

  // HttpStatusCodes!:any;
// like ENUM
  HttpStatusCodes: any = Object.freeze({
    ER_TRUNCATED_WRONG_VALUE_FOR_FIELD: 422,
    ER_DUP_ENTRY: 409
  });

  constructor() {
    this.db = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    });

    

    this.checkConnection();
  }

  /**
   * checkConnection
   */
  public checkConnection() {
    this.db.getConnection((err, connection) => {
      if (err) { 
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.error('Database connection was lost');
        } 
        if (err.code === 'ER_CON_COUNT_ERROR') {
          console.error('Database has too many connections');
        }
        if (err.code === 'ECONNREFUSED') {
          console.error('Database connection was refused');
        }
      }
      if (connection) {
        connection.release();
      }
    })
  }

  /**
   * query
   */
  public async query(sql: string, values?:any) {
    return new Promise((resolve, reject) => {
      const callback = (error: Error, result: any) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      };
       // execute will internally call prepare and query
       this.db.execute(sql, callback, values);
    }).catch((err) => {
      // const mysqlErrorList = Object.keys(this.HttpStatusCodes);
      // convert mysql errors which in the mysqlErrorList list to http status code
      // err.status = mysqlErrorList.includes(err.code) ? this.HttpStatusCodes[err.code] : err.status;
      throw err;
    });
  }
}

export = new DBConnection().query;