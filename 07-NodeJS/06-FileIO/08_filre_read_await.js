/** (1) 모듈참조 */
import fs from 'fs';

/** (2) 필요한 변수 생성 */
const target = './output_sync.txt'; //저장할 파일의 경로()

/** (3) 파일을 비동기식으로 파일 읽기*/
if(fs.existsSync(target)) {
  (async () => {
    let data = null;

    try {
      data = await fs.promises.readFile(target, 'utf8')
      console.debug('파일읽기 완료');
    } catch (err) {
      console.error(err);
      console.error('파일읽기 실패');
    }

    console.debug(data);
  })();

  console.log(target + ' 파일을 읽도록 요청했습니다.');
} else {
  console.log(target + '파일이 존재하지 않습니다.');
}