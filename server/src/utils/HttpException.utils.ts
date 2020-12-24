
export default class HttpException extends Error {
  status!:number;
  message!:any;
  data!:any;
  constructor(status:number, message:any, data?:any) {
    super(message)
    this.status = status;
    this.message = message;
    this.data = data;
  }
}