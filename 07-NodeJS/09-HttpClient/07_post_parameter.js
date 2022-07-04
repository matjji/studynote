/**
 * $ npm install --save form-data
 */
import axios from 'axios';
import FormData from 'form-data';

(async () => {
  let result = null;
  try {
    //POST 방식으로 전송할 파라미터 정의 --> 가상의 <form>태그를 생성
    const form = new FormData();

    // form 테그에 input요소 추가와 같은 원리
    form.append('num1', 200);
    form.append('num2', 300);

    //POST방식 전송
    const response = await axios.post('http://itpaper.co.kr/data/post.php', form, {
      header: form.getHeaders()
    });
    result = response.data;
  } catch(error) {
    const errorMsg = "[" + error.response.status + ']' + error.response.statusText
    console.error(errorMsg);
    return;
  }

  console.log('다른 백엔드로부터 응답받은 결과값: ' + result);
})();