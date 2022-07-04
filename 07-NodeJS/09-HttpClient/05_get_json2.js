import axios from "axios";

const url = 'http://itpaper.co.kr/demo/covid19/now.php';

/*
}
  state: [
    {
      region: '서울',
      confirmed: 3658710,
      death: 4886,
      released: 281356,
      vaccinatedOnce: 119118,
      vaccinatedFully: 1283,
      active: 3372468,
      confirmed_prev: 3658110,
      released_prev: 281356,
      death_prev: 4886,
      active_prev: 3371868,
      vaccinatedOnce_prev: 119118,
      vaccinatedFully_prev: 1283,
      vaccinatedBoost_prev: 0
    }]
}
*/

(async () => {
  let json = null;

  try {
    const response = await axios.get(url);
    json = response.data;
  } catch(error) {
    const errorMsg = '[' + error.response.status + ']' + error.response.statusText
    console.error(errorMsg);
    return;
  }

  let total = 0;

  json.state.map((v, i) => {
    const confirmed = v.confirmed - v.confirmed_prev;
    console.log('[' + v.region + '] 확진자: ' + confirmed)
    total += confirmed;
  });

  console.log("오늘 총 확진자 수: %d", total);
})();