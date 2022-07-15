import express from "express";
import regexHelper from '../helper/RegexHelper.js';
import {pagenation} from "../helper/UtilHelper.js";
import ProfessorService from "../services/ProfessorService.js";

const ProfessorController = () => {
  const url = '/professor';
  const router = express.Router();

  router.get(url, async (req, res, next) => {
    const query = req.get('query');
    const page = req.get('page', 1);
    const rows = req.get('rows', 10);

    const params = {}
    if (query) {
      params.name = query;
      params.userid = query;
      params.position = query;
      params.sal = query;
      params.hiredate = query;
      params.comm = query;
      params.deptno = query;
      params.dname = query;
    }

    let json = null;
    let pageInfo = null;

    try {
      const totalCount = await ProfessorService.getCount(params);
      pageInfo = pagenation(totalCount, page, rows);

      params.offset = pageInfo.offset;
      params.listCount = pageInfo.listCount;
      json = await ProfessorService.getList(params);
    } catch (err) {
      return next(err);
    }

    res.sendResult({pagenaiton: pageInfo, item: json});
  });

  /** 단일행 조회 */
  router.get(`${url}/:profno`, async (req, res, next) => {
    const profno = req.get('profno');

    try {
      regexHelper.value(profno, '교수번호가 없습니다.');
      regexHelper.num(profno, '교수번호가 잘못되었습니다.');
    } catch (err) {
      return next (err);
    }

    let json = null;

    try {
      json = await ProfessorService.getItem({
        profno: profno
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult({item: json});
  });

  /** 데이터 추가 */
  router.post(url, async(req, res, next) => {
    const name = req.post('name');
    const userid = req.post('userid');
    const position = req.post('position');
    const sal = req.post('sal');
    const hiredate = req.post('hiredate');
    const comm = req.post('comm');
    const deptno = req.post('deptno');

    try {
      regexHelper.value(name, '이름이 없습니다.');
      regexHelper.value(userid, '아이디가 없습니다.');
      regexHelper.value(position, '직급이 없습니다.');
      regexHelper.value(sal, '급여가 없습니다.');
      regexHelper.value(hiredate, '입사일이 없습니다.');
      regexHelper.value(deptno, '학과번호가 없습니다.');
    } catch (err) {
      return next(err);
    }

    let json = null;

    try {
      json = await ProfessorService.addItem({
        name: name,
        userid: userid,
        position: position,
        sal: sal,
        hiredate: hiredate,
        comm: comm,
        deptno: deptno
      })
    } catch (err) {
      return next(err);
    }

    res.sendResult({item: json});
  })

  /** 데이터 수정 */
  router.put(`${url}/:profno`, async(req, res, next) => {
    const profno = req.get('profno');
    const name = req.post('name');
    const userid = req.post('userid');
    const position = req.post('position');
    const sal = req.post('sal');
    const hiredate = req.post('hiredate');
    const comm = req.post('comm');
    const deptno = req.post('deptno');

    try {
      regexHelper.value(profno, '교수번호가 없습니다.');
      regexHelper.num(profno, '교수번호가 잘못되었습니다.');

      regexHelper.value(name, '이름이 없습니다.');

      regexHelper.value(userid, '아이디가 없습니다.');

      regexHelper.value(position, '직급이 없습니다.');

      regexHelper.value(sal, '급여가 없습니다.');
      regexHelper.num(sal, '급여는 숫자로 입력해야합니다.');

      regexHelper.value(hiredate, '입사일이 없습니다.');
      
      regexHelper.value(deptno, '학과번호가 없습니다.');
      regexHelper.num(deptno, '학과번호가 잘못되었습니다.');
    } catch (err) {
      return next(err);
    }

    let json = null;
    
    try {
      json = await ProfessorService.editItem({
        profno: profno,
        name: name,
        userid: userid,
        position: position,
        sal: sal,
        hiredate: hiredate,
        comm: comm,
        deptno: deptno
      })
    } catch (err) {
      return next(err);
    }

    res.sendResult({item: json});
  })

  /** 데이터 삭제 */
  router.delete(`${url}/:profno`, async (req, res, next) => {
    const profno = req.get('profno');

    try {
      regexHelper.value(profno, '학과번호가 없습니다.');
      regexHelper.num(profno, '학과번호가 잘못되었습니다.');
    } catch (err) {
      return next(err);
    }

    try {
      await ProfessorService.deleteItem({
        profno: profno
      });
    }catch (err) {
      return next(err);
    }

    res.sendResult();
  });

  return router;
}

export default ProfessorController;