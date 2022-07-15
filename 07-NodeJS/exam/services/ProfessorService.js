import mybatisMapper from 'mybatis-mapper';
import DBPool from '../helper/DBPool.js';
import RuntimeException from '../exceptions/RuntimeException.js';

class ProfessorService {
  constructor() {
    mybatisMapper.createMapper ([
      './mappers/StudentMapper.xml',
      './mappers/ProfessorMapper.xml'
    ]);
  }
  /** 목록 데이터 조회 */
  async getList(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement('ProfessorMapper', 'selectList', params);
      let [result] = await dbcon.query(sql);

      if (result.length === 0) {
        throw new RuntimeException('조회된 데이터가 없습니다.');
      }

      data = result;
    } catch (err) {
      throw err
    } finally {
      if (dbcon) { dbcon.release(); }
    }
    return data;
  }

  /** 단일 데이터 조회 */
  async getItem(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement('ProfessorMapper', 'selectItem', params);
      let [result] = await dbcon.query(sql);

      if (result.length === 0) {
        throw new RuntimeException('조회된 데이터가 없습니다.');
      }

      data = result[0];
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) { dbcon.release(); }
    }
    return data;
  }

  /** 저장하기 */
  async addItem(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement('ProfessorMapper', 'insertItem', params);
      let [{insertId, affectedRows}] = await dbcon.query(sql);

      if (affectedRows === 0) {
        throw new RuntimeException('조회된 데이터가 없습니다.');
      }

      sql = mybatisMapper.getStatement('ProfessorMapper', 'selectItem', {profno: insertId})
      let [result] = await dbcon.query(sql);

      if (result.length === 0) {
        throw new RuntimeException('저장된 데이터를 조회할 수 없습니다.');
      }

      data = result[0];
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) { dbcon. release(); }
    }
    return data;
  }
  
  /** 데이터 수정 */
  async editItem(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement('ProfessorMapper', 'updateItem', params);
      let [{affectedRows}] = await dbcon.query(sql);

      sql = mybatisMapper.getStatement('ProfessorMapper', 'selectItem', {profno: params.profno});
      let [result] = await dbcon.query(sql);

      if (result.length === 0) {
        throw new RuntimeException('저장된 데이터를 조회할 수 없습니다.');
      }

      data = result[0]
    } catch (err) {
      throw err;
    } finally {
      if (dbcon) { dbcon.release(); }
    }
    return data;
  }

  /** 데이터 삭제 */
  async deleteItem(params) {
    let dbcon = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement('StudentMapper', 'deleteItemByProfno', params);
      let [{affectedRows}] = await dbcon.query(sql);

      sql = mybatisMapper.getStatement('ProfessorMapper', 'deleteItem', params);
      [{affectedRows}] = await dbcon.query(sql);

      if (affectedRows === 0) {
        throw new RuntimeException('삭제된 데이터가 없습니다.');
      }
    } catch (err) {
      return err;
    } finally {
      if (dbcon) { dbcon.release(); }
    }
  }

  /** 데이터 수 조회 */
  async getCount(params) {
    let dbcon = null;
    let cnt = 0;

    try {
      dbcon = await DBPool.getConnection();

      let sql = mybatisMapper.getStatement('ProfessorMapper', 'selectCountAll', params);
      let [result] = await dbcon.query(sql);

      if (result.length > 0) {
        cnt = result[0].cnt;
      }
    } catch(err) {
      throw err;
    } finally {
      if (dbcon) { dbcon.release(); }
    }
    return cnt;
  }
}

export default new ProfessorService();