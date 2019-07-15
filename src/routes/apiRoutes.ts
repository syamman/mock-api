import { Router, Request, Response, NextFunction } from 'express';
import * as fs from 'fs';

const router = Router();

router.get('/table-permission', function(req: Request, res: Response) {
  fs.readFile(__dirname + '/../json/table-permission.json', 'utf8', (err, json) => {
    if (err) throw err;
    const obj = JSON.parse(json);
    res.json(obj);
  });
});

router.get('/card-information', function(req: Request, res: Response) {
  fs.readFile(__dirname + '/../json/card-information.json', 'utf8', (err, json) => {
    if (err) throw err;
    const obj = JSON.parse(json);
    res.json(obj);
  });
});

router.get('/printing-request', function(req: Request, res: Response) {
  fs.readFile(__dirname + '/../json/printing-request.json', 'utf8', (err, json) => {
    if (err) throw err;
    const obj = JSON.parse(json);
    res.json(obj);
  });
});

router.get('/printed-request-result', function(req: Request, res: Response) {
  fs.readFile(__dirname + '/../json/printed-request-result.json', 'utf8', (err, json) => {
    if (err) throw err;
    const obj = JSON.parse(json);
    res.json(obj);
  });
});

router.get('/card-stock-approval', function(req: Request, res: Response) {
  fs.readFile(__dirname + '/../json/card-stock-approval.json', 'utf8', (err, json) => {
    if (err) throw err;
    const obj = JSON.parse(json);
    res.json(obj);
  });
});

router.get('/card-stock-verify', function(req: Request, res: Response) {
  fs.readFile(__dirname + '/../json/card-stock-verify.json', 'utf8', (err, json) => {
    if (err) throw err;
    const obj = JSON.parse(json);
    res.json(obj);
  });
});

router.get('/check-request-card-stock', function(req: Request, res: Response) {
  fs.readFile(__dirname + '/../json/check-request-card-stock.json', 'utf8', (err, json) => {
    if (err) throw err;
    const obj = JSON.parse(json);
    res.json(obj);
  });
});

router.get('/stock-details', function(req: Request, res: Response) {
  fs.readFile(__dirname + '/../json/stock-details.json', 'utf8', (err, json) => {
    if (err) throw err;
    const obj = JSON.parse(json);
    res.json(obj);
  });
});

router.get('/disposal-card-list', function(req: Request, res: Response) {
  fs.readFile(__dirname + '/../json/disposal-card-list.json', 'utf8', (err, json) => {
    if (err) throw err;
    const obj = JSON.parse(json);
    res.json(obj);
  });
});

router.get('/audit-trail', function(req: Request, res: Response) {
  fs.readFile(__dirname + '/../json/audit-trail.json', 'utf8', (err, json) => {
    if (err) throw err;
    const obj = JSON.parse(json);
    res.json(obj);
  });
});




export const api_routes = router;