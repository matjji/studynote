/** 직접 구현한 모듈 */
import logger from './helper/LogHelper.js';
import {myip, urlFormat} from './helper/UtilHelper.js';
import WebHelper from './helper/WebHelper.js';
import DBPool from './helper/DBPool.js';
import cors from 'cors';
/** 내장모듈 */
import url from 'url';
import path from 'path';
/** 설치가 필요한 모듈 */
import dotenv from 'dotenv';
import express from 'express'; // Express 본체
import useragent from 'express-useragent'; // 클라이언트의 정보를 조회할 수 있는 기능
import serveStatic from 'serve-static'; // 특정 폴더의 파일을 URL을 노출시킴
import serveFavicon from 'serve-favicon'; // favicon 처리
import bodyParser from 'body-parser'; //POST 파라미터 처리
import methodOverride from 'method-override'; // PUT 파라미터 처리

/** 예외처리 관련 클래스 */
import PageNotFoundException from './exceptions/PageNotFoundException.js';
// 컨트롤러
import ProfessorController from './controllers/ProfessorController.js';

const app = express();

const __dirname = path.resolve();

dotenv.config({path: path.join(__dirname + '/config.env')});

app.use(useragent.express());

app.use((req, res, next) => {
  logger.debug('클라이언트가 접속했습니다.');

  const beginTime = Date.now();

  // 클라이언트의 IP주소(출처: 스택오버플로우)
  const ip = req.header['x-forwarde-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;

  logger.debug(`[client] ${ip} / ${req.useragent.os} / ${req.useragent.browser} / (${req.useragent.version}) / ${req.useragent.platform}`);

  const current_url = urlFormat({
    protocol: req.protocol, // ex) http://
    host: req.get('host'), // ex) 172.16.141.1
    port: req.port, // ex 3000
    pathname: req.originalUrl, // ex) /page1.html
  });

  logger.debug(`[${req.method}] ${decodeURIComponent(current_url)}`);

  res.on('finish', () => {
    const endTime = Date.now();

    const time = endTime - beginTime;
    logger.debug(`클라이언트의 접속이 종료되었습니다. ::: [runtime] ${time}ms`);
    logger.debug('------------------------------------------------------')
  });

  next();
});

process.on('SIGINT', () => {
  process.exit();
});

process.on('exit', () => {
  DBPool.close();
  logger.info('-------- Server is close ------');
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text()); // TEXT형식의 파라미터 수신 가능.
app.use(bodyParser.json()); // JSON형식의 파라미터 수신 가능.

app.use(methodOverride('X-HTTP-Method')); // Microsoft
app.use(methodOverride('X-HTTP-Method-Override'));  // Google/GData
app.use(methodOverride('X-Method-Override')); // IBM
app.use(methodOverride('_method')); // HTML form

app.use('/', serveStatic(process.env.PUBLIC_PATH));
app.use(process.env.UPLOAD_URL, serveStatic(process.env.UPLOAD_DIR));
app.use(process.env.UPLOAD_URL, serveStatic(process.env.THUMB_DIR));

app.use(serveFavicon(process.env.FAVICON_PATH));

app.use(WebHelper());

app.use(ProfessorController());

app.use((err, req, res, next) => res.sendError(err));

app.use('*', (req, res, next) => res.sendError(new PageNotFoundException()));

const ip = myip();

app.listen(process.env.PORT, () => {
  logger.debug('-------------------------------------');
  logger.debug('|       Start Express Server        |');
  logger.debug('-------------------------------------');

  ip.forEach((v, i) => {
    logger.debug(`server address => http://${v}:${process.env.PORT}`);
  });

  logger.debug('-------------------------------------');
})