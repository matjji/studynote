/**
 * @filename : RegexHelper.js
 * @author : 신지섭 (pon0304616@gmail.com)
 * @dexcription : 정규표현식 검사 수행
 */

 class RegexHelper {
    //constructor() {}

    /**값의 존재 여부를 검사한다.
     * @param {string} selector 검사할 대상의 CSS 선택자
     * @param {string} msg      값이 없을 경우 표시할 메시지 내용
     */
    value(selector, msg) {
        const content = document.querySelector(selector).value;

        if (content == undefined || content == null || (typeof content == 'string' && content.trim().length == 0)) {
            throw new BadRequestException(msg, selector);
        } 
        return true;
    }
    
    /**
    100년보다 오래 되었는지 년도, 월, 일을 검사한다.
     * @param {string} selector1 검사할 대상의 CSS 선택자
     * @param {string} selector2 검사할 대상의 CSS 선택자
     * @param {string} selector3 검사할 대상의 CSS 선택자
     * @param {string} msg      값이 없을 경우 표시할 메시지 내용
     */
    timeValue(selector1, selector2, msg) {
        const content = document.querySelector(selector1).value;
        const dropdown = document.querySelector(selector2)
        const choose = dropdown.selectedIndex;
        const value = dropdown[choose].value

        const time = new Date()
        if (value == 1) {
            time.setMonth(0);
            time.setDate(31);
        } else {
            time.setMonth(value)
            time.setDate(0)
        }
        time.setFullYear(content);
        const year = time.getFullYear();
        const month = time.getMonth() + 1;

        if (year <= 1922 && month <= 3) {
            throw new BadRequestException(msg, content)
        }
        return true;
    }

    /**
    월에 맞는 일이 되었는지 년도, 월, 일을 검사한다.
     * @param {string} selector1 검사할 대상의 CSS 선택자
     * @param {string} selector2 검사할 대상의 CSS 선택자
     * @param {string} selector3 검사할 대상의 CSS 선택자
     * @param {string} msg      값이 없을 경우 표시할 메시지 내용
     */
    dateTimeValue(selector1, selector2, selector3, msg) {
        const content = document.querySelector(selector1).value;
        const dropdown = document.querySelector(selector2)
        const choose = dropdown.selectedIndex;
        const value = dropdown[choose].value
        const content3 = document.querySelector(selector3).value

        const time = new Date()
        if (value == 1) {
            time.setMonth(0);
            time.setDate(31);
        } else {
            time.setMonth(value)
            time.setDate(0)
        }
        time.setFullYear(content);
        const date = time.getDate();
        if (date < content3) {
            throw new BadRequestException(msg, content3)
        } 
        return true;
    }

    /**
    현재보다 년도, 월, 일이 미래인지 검사한다.
     * @param {string} selector1 검사할 대상의 CSS 선택자
     * @param {string} selector2 검사할 대상의 CSS 선택자
     * @param {string} selector3 검사할 대상의 CSS 선택자
     * @param {string} msg      값이 없을 경우 표시할 메시지 내용
     */
    futureTimeValue(selector1, selector2, selector3, msg) {
        const content = document.querySelector(selector1).value;
        const dropdown = document.querySelector(selector2)
        const choose = dropdown.selectedIndex;
        const value = dropdown[choose].value
        const content3 = document.querySelector(selector3).value

        const now = new Date()
        const nowYear = now.getFullYear();
        const nowMonth = now.getMonth() + 1;
        const nowDate = now.getDate();

        if (content >= nowYear && value >= nowMonth && content3 > nowDate) {
            throw new BadRequestException(msg, selector1)
        }
        return true;
    }

        /**
    만14세 미만인 년도, 월, 일이 미래인지 검사한다.
     * @param {string} selector1 검사할 대상의 CSS 선택자
     * @param {string} selector2 검사할 대상의 CSS 선택자
     * @param {string} selector3 검사할 대상의 CSS 선택자
     * @param {string} msg      값이 없을 경우 표시할 메시지 내용
     */
    underTimeValue(selector1, selector2, selector3, msg) {
        const content = document.querySelector(selector1).value;
        const dropdown = document.querySelector(selector2)
        const choose = dropdown.selectedIndex;
        const value = dropdown[choose].value
        const content3 = document.querySelector(selector3).value

        const now = new Date()
        const underYear = now.getFullYear() - 14;
        const nowMonth = now.getMonth() + 1;
        const nowDate = now.getDate();

        if (content >= underYear && value >= nowMonth && content3 > nowDate) {
            throw new BadRequestException(msg, selector1)
        } else if (content > underYear) {
            throw new BadRequestException(msg, selector1)
        }
        return true;
    }

    /**띄어쓰기와 값의 존재 여부를 검사한다.
     * @param {string} selector 검사할 대상의 CSS 선택자
     * @param {string} msg      값이 없을 경우 표시할 메시지 내용
     */
    noSpaceValue(selector, msg) {
        let content = document.querySelector(selector).value;

        if (content == undefined || content == null || (typeof content == 'string' && content.length == 0)) {
            throw new BadRequestException(msg, selector);
        }
        return true;
    }

    /**입력값이 지정된 글자수 미만인지 검사한다.
     * @param {string} selector 검사할 대상의 css 선택자
     * @param {int} length      최소 글자수
     * @param {string} msg      값이 없을 경우 표시될 메시지
     */
      minLength(selector, len, msg) {
        this.value(selector, msg);

        let content = document.querySelector(selector).value;

        if (content.trim().length < len) {
            throw new BadRequestException(msg, selector);
        }
        return true;
    }
    /** 비밀번호 입력값이 지정된 글자수 미만인지 검사한다.
     * @param {string} selector 검사할 대상의 css 선택자
     * @param {int} length      최소 글자수
     * @param {string} msg      값이 없을 경우 표시될 메시지
     */
    pwMinLength(selector, len, msg) {
        this.value(selector, msg);

        let content = document.querySelector(selector).value;
        let content1 = document.querySelector(selector);
        const parents = content1.closest(".box_sm")
        const span = parents.querySelector('.box_sm-span')
        
        if (content.trim().length < len) {
            span.innerHTML = "사용불가" + `<i class="fas fa-lock fa-la"></i>`
            span.classList.remove('pw_true');
            span.classList.add('pw_false');
            throw new BadRequestException(msg, selector);
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

        var src = document.querySelector(origin).value.trim(); //원본값을 가져온다.
        var dsc = document.querySelector(compare).value.trim(); //비교할 값을 가져온다.
        
        if (src != dsc) {
            let pwRe = document.querySelector(compare);
            const parent = pwRe.closest(".box_sm");
            const span = parent.querySelector('.box_sm-span');
            span.classList.remove("pw_true");

            throw new BadRequestException(msg,origin);
        }

        return true;
    }

    /** 입력값이 정규표현식을 충족하는지 검사한다.
    * @param {string} selector 검사할 대상의 CSS 선택자
    * @param {string} msg       표시할 메시지
    * @param {object} regexExpr 검사할 정규표현시
    */
   field(selector, msg, regexExpr) {
    this.value(selector, msg);

    const content = document.querySelector(selector).value;
    const src = content.trim();

    //입력값에 대한 정규표현식 검사가 실패라면?
    if (!regexExpr.test(src)) {
        throw new BadRequestException(msg, selector);
    }
    return true;
    }

    /** 입력값이 정규표현식을 충족하는지 검사한다.
    * @param {string} selector 검사할 대상의 CSS 선택자
    * @param {string} msg       표시할 메시지
    * @param {object} regexExpr 검사할 정규표현시
    */
    noSpaceField(selector, msg, regexExpr) {
        this.noSpaceValue(selector, msg);

        const content = document.querySelector(selector).value;
        //입력값에 대한 정규표현식 검사가 실패라면?
        if (!regexExpr.test(content)) {
            throw new BadRequestException(msg, selector);
        }
        return true;
    }

    /**
    * 숫자로만 이루어 졌는지 검사하기 위해 field() 간접적으로 호출한다.
    * @param {string} selector 검사할 대상의 CSS 선택자
    * @param {string} msg       표시할 메시지
    */
    num(selector, msg) {
        return this.field(selector, msg, /^[0-9]*$/);
    }

    /**
    * 숫자로만 이루어 졌는지 검사하기 위해 field() 간접적으로 호출한다.
    * @param {string} selector 검사할 대상의 CSS 선택자
    * @param {string} msg       표시할 메시지
    */
    noSpaceNum(selector, msg) {
        return this.noSpaceField(selector, msg, /^[0-9]*$/);
    }

     /**
    * 한글과 영문 대소문자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
    * @param {string} selector 검사할 대상의 CSS 선택자
    * @param {string} msg       표시할 메시지
    */
    korEng(selector, msg) {
        return this.noSpaceField(selector, msg, /^[a-zA-Zㄱ-ㅎ가-힣]*$/);
    }

      /**
    * 영문 소문자, 숫자와 특수기호(_) (-) 로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
    * @param {string} selector 검사할 대상의 CSS 선택자
    * @param {string} msg       표시할 메시지
    */
    engNumSym(selector, msg) {
        return this.field(selector, msg, /^[a-z0-9_-]*$/)
    }
    /**
     * 영문, 숫자와 특수기호로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {string} selector 검사할 대상의 CSS 선택자
     * @param {string} msg       표시할 메시지
     */
    engNumSymbol(selector, msg) {
        return this.field(selector, msg, /$[a-zA-z0-9!@#$%^&*_+=-]*$/)
    }

    /**
     * 이메일주소 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {string} selector 검사할 대상의 CSS 선택자
     * @param {string} msg       표시할 메시지
     */
    email(selector, msg) {
        return this.field(selector, msg, /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[az]{2})?)$/i);
    }

    /**
     * 핸드폰 번호 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {string} selector 검사할 대상의 CSS 선택자
     * @param {string} msg       표시할 메시지
     */
    cellPhone(selector, msg) {
        return this.field(selector, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
    }
}