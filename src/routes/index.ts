import { Router, Request, Response } from 'express';
import { api_routes } from './apiRoutes';
import { other_routes } from './otherRoutes';

const router = Router();

router.get('/', function(req: Request, res: Response) {
  res.send('Fake PRIME Backend');
});

router.use('/fake/api/v1', api_routes);
router.use('/other', other_routes);

export const routes = router;