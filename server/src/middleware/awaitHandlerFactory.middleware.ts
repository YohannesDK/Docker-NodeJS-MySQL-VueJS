export default function awaitHandlerFactory(middleware:any) {
  return async (req:any, res:any, next:any) => {
    try {
      await middleware(req, res, next);
    } catch (err) {
      next(err);
    }
  }
}
