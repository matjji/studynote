/** (1) 모듈 및 환경설정 불러오기 */
import {join, resolve} from 'path';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

// 설정 파일 내용 가져오기
dotenv.config({path: join(resolve(), '/config.env')});

// 접속 정보 설정
const connectionInfo = {
  host: process.env.DATABASE_HOST,          //MYSQL 서버 주소(다른 PC인 경우 IP주소)
  port: process.env.DATABASE_PORT,          //MYSQL 포트 번호
  user: process.env.DATABASE_USERNAME,      //MYSQL의 로그인 할 수 있는 계정이름
  password: process.env.DATABASE_PASSWORD,  //비밀번호
  database: process.env.DATABASE_SCHEMA     // 사용하고자 하는 데이터베이스 이름
};

console.info(connectionInfo);

(async () => {
  let dbcon = null;

  try {
    /** (2) mysql 접속 객체 생성 */
    dbcon = await mysql.createConnection(connectionInfo);
    await dbcon.connect();

    /** (3) SQL 실행하기 */
    let sql = 'INSERT INTO department (dname, loc) VALUES (?,?)';
    let input_data = ['Node학과', '공학관'];

    // insert의 결과는 반환되는 객체는 원소가 1개인 배열이다.
    const result1 = await dbcon.query(sql, input_data);
    console.log(result1[0].affectedRows);
    console.log(result1[0].indsetId);
    const firstId = result1[0].insertId;

    // 그러므로 아래와 같이 비구조 문법 적용이 가능하다.
    input_data = ['SQL학과', '공학관'];
    const [result2] = await dbcon.query(sql, input_data);
    console.group("INSERT 처리 결과");
    console.log('저장된 데이터 수: ' + result2.affectedRows);
    console.log('생성된 PK값: ' + result2.insertId);
    console.groupEnd();

    // 한번 더 비구조 문법을 적용할 수 도 있다.
    input_data = ['백엔드학과', '공학관'];
    const [{affectedRows, insertId}] = await dbcon.query(sql, input_data);
    console.group("INSERT 처리 결과");
    console.log('저장된 데이터 수: ' + affectedRows);
    console.log('생성된 PK값: ' + insertId);
    console.groupEnd();

    // UPDATE절 수행 --> WHERE절의 지정이 중요하다.
    const [result3] = await dbcon.query('UPDATE department SET dname=? WHERE deptno >= ?', ['수정학과', firstId]);
    console.group("INSERT 처리 결과");
    console.log('저장된 데이터 수: ' + result3.affectedRows);
    console.groupEnd();

    const [result4] = await dbcon.query('DELETE FROM department WHERE deptno >= ?', [firstId]);
    console.group("INSERT 처리 결과");
    console.log('저장된 데이터 수: ' + result4.affectedRows);
    console.groupEnd();
  } catch (err) {
    console.log(err);
    return;
    // 에러가 나면 catch문에서 console.log실행하고 finally문이 있다면 finally구문을 실행한후 return 한다.
  } finally {
    console.log("~~~~~~~~ db 접속 해제 ~~~~~~~~~");
    if (dbcon) {
      dbcon.end();
    }
  }
})();