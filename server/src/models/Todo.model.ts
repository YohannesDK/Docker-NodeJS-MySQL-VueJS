import query from '../db/db-connection';
import multipleColumnSet  from "../utils/common.utils";

class TodoModel {
  tablename: string = 'Todoes';

  public find = async (params:object = {}) => {
    let sql = `SELECT * FROM ${this.tablename}`;

    if (!Object.keys(params).length) {
      return await query(sql);
    }

    const { columnSet, values }:any = multipleColumnSet(params);
    sql += ` WHERE ${columnSet}`;
    return await query(sql, [...values]);
  }
}

export = new TodoModel;