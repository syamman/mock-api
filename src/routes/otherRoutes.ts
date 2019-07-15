import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get('/', function(req: Request, res: Response) {
  res.send('You have no business here!');
});

export const other_routes = router;