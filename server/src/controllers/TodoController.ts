import  TodoModel from "../models/Todo.model";
import HttpException from "../utils/HttpException.utils";

class TodoController {

  /**
   * getAllTodoes
   */
  public async getAllTodoes(req:any, res: any, next:any) {
    let todoes:any = await TodoModel.find();
    if (!todoes.length) {
      throw new HttpException(404, 'None todoes');
    }
    console.log(todoes);
    
    // res.send(todoes);
    res.header({'Access-Control-Allow-Origin': '*'}).status(200).json('todoes');
  }
}

export = new TodoController();