/**
 * @filename : RegexHelper.js
 * @author : 이광호 (leekh4232@gmail.com)
 * @dexcription : 정규표현식 검사 수행
 */

//for node.js
import BadRequestException from "../exception/BadRequestException";

class RegexHelper {
    //constructor() {}

    /**값의 존재 여부를 검사한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg      값이 없을 경우 표시할 메시지 내용
     */
    value(field, msg) {
        const content = field.value;

        if (content === undefined || content === null || (typeof content === 'string' && content.trim().length === 0)) {
            throw new BadRequestException(msg, field);
        }
        return true;
    }

    /**
     * 입력값이 지저된 글자수를 초과했는지 검사한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {int} length      최대 글자수
     * @param {string} msg      값이 없을 경우 표시될 메시지
     */
    maxLength(field, len, msg) {
        this.value(field, msg);

        const content = field.value;

        if (content.trim().length > len) {
            throw new BadRequestException(msg, field);
        }
        return true;
    }

    /**입력값이 지정된 글자수 미만인지 검사한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {int} length      최소 글자수
     * @param {string} msg      값이 없을 경우 표시될 메시지
     */
    minLength(field, len, msg) {
        this.value(field, msg);

        let content = field.value;

        if (content.trim().length < len) {
            throw new BadRequestException(msg, field);
        }
        return true;
    }

    /** 두 값이 동일한지 검사한다.
     * @param {string} origin   원본에 대한 CSS 선택자.
     * @param {string} compare  검사 대상에 대한 CSS 선택자.
     * @param {string} msg      검사에 실패한 경우 표시할 메시지
     */
    compareTo(origin, compare, msg) {
        this.value(origin, msg);
        this.value(compare, msg);

        var src = document.queryfield(origin).value.trim(); //원본값을 가져온다.
        var dsc = document.queryfield(compare).value.trim(); //비교할 값을 가져온다.
        
        if (src !== dsc) {
            throw new BadRequestException(msg,origin);
        }

        return true;
    }

    /**
     * 라디오나 체크박스가 선택된 항복인지 확인한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg      검사에 실패할 경우 표시할 메시지
     */
    check(field, msg) {
        const content = document.queryfieldAll(field);
        const checkedItem = Array.from(content).filter((v, i) => v.checked);

        if (checkedItem.length === 0) {
            throw new BadRequestException(msg, field);
        }
    }

    /**라디오나 체크박스의 최소 선택 갯수를 제한한다. 
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg      검사에 실패할 경우 표시할 메시지
    */
   checkMin(field, len, msg) {
       const content = document.queryfieldAll(field);
       const checkedItem = Array.from(content).filter((v, i) => v.checked);

       if (checkedItem.length < len) {
           throw new BadRequestException(msg, field);
       }
   }

   /** 라디오나 체크박스의 최대 선택 갯수를 제한한다.
    * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
    * @param {string} msg      검사에 실패할 경우 표시할 메시지
    */
   checkMax(field, len, msg) {
       const content = document.queryfieldAll(field);
       const checkedItem = Array.from(content).filter((v, i) => v.checked);

       if (checkedItem.length > len) {
           throw new BadRequestException(msg, field);
       }
   }

   /** 입력값이 정규표현식을 충족하는지 검사한다.
    * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
    * @param {string} msg       표시할 메시지
    * @param {object} regexExpr 검사할 정규표현시
    */
   field(field, msg, regexExpr) {
       this.value(field, msg);

       const content = field.value;
       const src = content.trim();

       //입력값에 대한 정규표현식 검사가 실패라면?
       if (!regexExpr.test(src)) {
           throw new BadRequestException(msg, field);
       }
       return true;
   }

   /**
    * 숫자로만 이루어 졌는지 검사하기 위해 field() 간접적으로 호출한다.
    * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
    * @param {string} msg       표시할 메시지
    */
   num(field, msg) {
       return this.field(field, msg, /^[0-0]*$/);
   }

   /**
    * 영문으로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
    * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
    * @param {string} msg       표시할 메시지
    */
   eng(field, msg) {
       return this.field(field, msg, /^[a-zA-Z]*$/);
   }

   /**
    * 한글로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
    * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
    * @param {string} msg       표시할 메시지
    */
   kor(field, msg) {
       return this.field(field, msg, /^[ㄱ-ㅎ가-힣]*$/);
   }

   /**
    * 영문과 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
    * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
    * @param {string} msg       표시할 메시지
    */
   engNum(field, msg) {
       return this.field(field, msg, /^[a-zA-Z0-9]*$/);
   }

      /**
    * 한글과 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
    * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
    * @param {string} msg       표시할 메시지
    */
    korNum(field, msg) {
        return this.field(field, msg, /^[ㄱ-ㅎ가-힣0-9]*$/);
    }
    
    /**
     * 이메일주소 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg       표시할 메시지
     */
    email(field, msg) {
        return this.field(field, msg, /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[az]{2})?)$/i);
    }

    /**
     * 핸드폰 번호 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg       표시할 메시지
     */
    cellPhone(field, msg) {
        return this.field(field, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
    }

    /**
     * 집전화 번호 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg       표시할 메시지
     */
    telePhone(field, msg) {
        return this.field(field, msg, /^d{2,3}\d{3,4}\d{4}$/);
    }

    /**
     * 핸드폰 번호 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg       조건을 충족하지 않을 경우 표시할 메시지
     */
    phone(field, msg) {
        this.value(field, msg);

        const content = field.value.trim();
        var check1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/; //핸드폰 형식
        var check2 = /^d{2,3}\d{3,4}\d{4}$/; //집전화 형식

        //핸드폰 형식도 아니고 집전화 형식도 아니라면?
        if(!check1.test(content) && !check2.test(content)) {
            throw new BadRequestException(msg, field);
        }
        return true;
    }
}

// for node.js
// module.exports = new RegexHelper();
export default new RegexHelper();