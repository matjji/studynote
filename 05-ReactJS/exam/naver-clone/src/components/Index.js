import React from 'react';
import styled from 'styled-components'
import useAxios from 'axios-hooks';
import regexHelper from '../libs/RegexHelper'
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FormBox = styled.form`
    display: block;
    width: 100%;
    .container {
        width: 768px;
        margin: 0 auto;
        .content {
            width: 460px;
            margin: auto;
            /* input에 대한 CSS코드*/
            input {
                display: block;
                position: relative;
                width: 100%;
                height: 29px;
                padding-right: 25px;
                line-height: 29px;
                border: none;
                background: #fff;
                font-size: 15px;
                box-sizing: border-box;
                z-index: 10;
                cursor:pointer;
                /* input이 focus 되었을때 */
                &:focus{
                    outline: none;
                }
                /* input의 placeholder의 투명도 0.7*/
                &::placeholder {
                    opacity: 0.7;
                }
            }
        }
    }
    /* 클릭했을때 추가된 focus css코드*/
    .boxjs.focus{
        border:1px solid #00C850;
    }
    /* 아이디 부분은 focus 되어도 기본 효과*/
    .box_xs.focus{
        border: 1px solid #dadada;
    }
    /* 아이디 부분 작은 상자 */
    .box_xs {
        display: block;
        border: 1px solid #dadada;
        background-color: #fff;
        outline: 0;
        position: relative;
        padding: 10px 110px 10px 14px; 
        cursor:pointer;
        /* 아이디 부분 작은상자의 @naver.com을 넣기 위한 CSS 코드*/
        & > span {
            position: absolute;
            line-height: 18px;
            right: 13px;
            top: 16px;
            color: #8e8e8e;
        }
    }
    /* 제목에 적용할 CSS 코드 */
    .title {
        font-size: 14px;
        display: block;
        margin: 19px 0 8px 0;
        font-weight: 600;
        font-family: "dotum";
    }
    /* 아이디 @naver.com에 적용할 타이틀*/
    .title_m {
        font-size: 15px;
        font-weight: 300;
        font-family: "dotum";
    }
    /* 이메일 (선택)에 적용할 타이틀*/
    .title_sm {
        font-size: 12px;
        color: #9d9d9d;
        opacity: 0.8;
        font-weight: 300;
        cursor: pointer;
    }
    /* float 적용하기*/
    .left-lg {
        float: left;
        width: 305px;
    }
    /*비빌번호가 들어갈 상자*/
    .box_sm {
        display: block;
        border: 1px solid #dadada;
        background-color: #fff;
        outline: 0;
        position: relative;
        padding: 10px 40px 10px 14px;
        cursor:pointer;
        /*비밀번호의 아이콘이 들어갈 상자*/
        & > .box_sm-span {
            position: absolute;
            line-height: 18px;
            right: 18px;
            top: 30%;
            color: #8e8e8e;
            z-index: 10;
        }
        /* 비밀번호 틀렸을 때 추가되는 클래스 CSS코드*/
        & > .pw_false {
            color: red;
            font-size: 13px;
        }
        /* 비밀번호 틀리거나 맞았을 때 icon에 적용되는 CSS코드*/
        & > .pw_false i,
        & > .pw_true i {
            margin-left: 5px;
        }
        /* 비밀번호 맞았을 때 추가되는 클래스 CSS코드*/
        & > .pw_true {
            color: #00C850;
        }
    }
    /*아이디와 비밀번호를 제외한 나머지 상자*/
    .box {
        padding: 10px 14px;
        display: block;
        border: 1px solid #dadada;
        background-color: #fff;
        outline: 0;
        position: relative;
    }
    /* margin-top을 적용하기 위한 CSS 코드*/
    .mar-top {
        margin-top: 40px;
    }
    /* margin-top을 조금 적용하기 위한 CSS 코드*/
    .mar-top_xs {
        margin-top: 10px;
    }
    /* 생년월일 float css 코드 */
    .left {
        float: left;
        width: 31.8%;
    }
    /* margin-right css코드*/
    .mar-right {
        margin-right: 10px;
    }
    /* select태그에 적용될 CSS 코드*/
    .select_sel {
        cursor: pointer;
        border: none;
        width: 100%;
        height: 29px;
        font-size: 14px;
        font-family: "dotum";
        &:focus {
            outline: none;
        }
    }
    /* 인증번호 버튼 CSS코드*/
    .btn {
        display: block;
        width: 115px;
        float: left;
        height: 51px;
        border: none;
        background-color: #00C850;
        color: #fff;
        font-size: 15px;
        padding: 0;
        cursor: pointer;
    }

    .btn_area {
        margin: 30px auto 10px auto;
        width: 460px;
    }

    .sub_btn {
        width: 100%;
        padding: 15px 0;
        background-color: #00C850;
        cursor:pointer;
        height: 52px;
        border: none;
        color: #fff;
        font-size: 18px;
    }
`

const Index = () => {
    const [{loading}, refetch] = useAxios({
        url: "http://localhost:3001/member",
        method: "POST"
    }, {manual: true})
    const onSubmit = React.useCallback((e) => {
        e.preventDefault();
        const current = e.target;
        // 유효성 검사
        try {
            /** 아이디 검사*/
            regexHelper.value(current.id, "필수 정보입니다.")
            regexHelper.minLength(current.id,5, "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.")
            regexHelper.engNumSym(current.id, "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.")
            /** 비밀번호 검사*/
            regexHelper.value(current.pw, "필수 정보입니다.")
            regexHelper.engNumSymbol(current.pw, "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
            regexHelper.compareTo(current.pw, current.pw_re, "비밀번호가 일치하지 않습니다.")
            /** 이름 검사*/
            regexHelper.noSpaceValue(current.name, "필수 정보입니다.")
            regexHelper.value(current.name,"한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)" )
            regexHelper.korEng(current.name, "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)")
            /** 년도 검사*/
            regexHelper.num(current.yy, "태어난 년도 4자리를 정확하게 입력하세요.")
            /** 월 검사*/
            regexHelper.value(current.mm,"태어난 월을 선택하세요.")
            /** 일 검사*/
            regexHelper.value(current.dd,"태어난 일(날짜) 2자리를 정확하게 입력하세요.")
            regexHelper.dateTimeValue(current.yy, current.mm, current.dd, "생년월일을 다시 확인 해주세요.")
            regexHelper.noSpaceNum(current.dd, "생년월일을 다시 확인해주세요.")
            regexHelper.timeValue(current.yy, current.mm, "정말이세요?")
            /** 미래인 검사*/
            regexHelper.futureTimeValue(current.yy, current.mm, current.dd, "미래에서 오셨군요. ^^")
            /** 만14세 미만 검사*/
            regexHelper.underTimeValue(current.yy, current.mm, current.dd, "만 14세 미만의 어린이는 보호자 동의가 필요합니다.")
            /**성별 검사*/
            regexHelper.value(current.gender, "필수 정보입니다.")
            /** 이메일 검사*/
            regexHelper.email(current.email, "이메일 주소를 다시 확인해주세요.")
            /** 핸드폰 검사*/
            regexHelper.value(current.tel, "필수 정보입니다.")
            regexHelper.cellPhone(current.tel, "형식에 맞지 않는 번호입니다.")
            /** disabled = false 면 활성*/
            regexHelper.value(current.auth, "필수 정보입니다.")
            regexHelper.minLength(current.auth,4 ,"인증번호는 4자리 숫자입니다.")
        } catch(e) {
            alert(e.message);
            console.error(e);
            e.field.focus();
            return;
        }
        //값 가져오기
        const idValue = current.id.value;
        const pwValue = current.pw.value;
        const pwReValue = current.pw_re.value;
        const nameValue = current.name.value;
        const yyValue = parseInt(current.yy.value);
        const mmValue = parseInt(current.mm.value);
        const ddValue = parseInt(current.dd.value);
        const genderValue = current.gender.value;
        const emailValue = current.email.value;
        const nationValue = current.nation.value;
        const telValue = parseInt(current.tel.value);
        const authValue = parseInt(current.auth.value);
        (async () => {
            let json = null;
            try {
                const response = await refetch({
                    data: {
                        id: idValue,
                        pw: pwValue,
                        pwRe: pwReValue,
                        name: nameValue,
                        yy: yyValue,
                        mm: mmValue,
                        dd: ddValue,
                        gender: genderValue,
                        email: emailValue,
                        nation: nationValue,
                        tel: telValue,
                        auth: authValue,
                    }
                })
                json = response.data
            } catch (e) {
                console.error(e)
            }
            if (json !== null) {
                window.alert('저장 되었습니다.')
            }
        })();
    },[])
    const [state, setState] = React.useState(true)
    const able = React.useRef();
    const onBtnClick = React.useCallback((e) => {
        e.preventDefault();
        if (able.current.value) {
            setState(false)
        }
    },[])
    const [id, setId] = React.useState(false);
    const [pw, setPw] = React.useState(false);
    const [pwRe, setPwRe] = React.useState(false);
    const [name, setName] = React.useState(false);
    const [yy, setYy] = React.useState(false);
    const [mm, setMm] = React.useState(false);
    const [dd, setDd] = React.useState(false);
    const [gender, setGender] = React.useState(false);
    const [email, setEmail] = React.useState(false);
    const [nation, setNation] = React.useState(false);
    const [tel, setTel] = React.useState(false);
    const [auth, setAuth] = React.useState(false);
    const onFocus = React.useCallback((e) => {
        e.preventDefault();
        const current = e.target
        const inputName = current.name
        if (inputName === "id") {
            setId(!id);
        } else if (inputName === "pw") {
            setPw(!pw);
        } else if (inputName === 'pw_re') {
            setPwRe(!pwRe)
        } else if (inputName === 'name') {
            setName(!name)
        } else if (inputName === 'yy') {
            setYy(!yy)
        } else if (inputName === 'mm') {
            setMm(!mm)
        } else if (inputName === 'dd') {
            setDd(!dd)
        } else if (inputName === 'gender') {
            setGender(!gender)
        } else if (inputName === 'email') {
            setEmail(!email)
        } else if (inputName === 'nation') {
            setNation(!nation)
        } else if (inputName === 'tel') {
            setTel(!tel)
        } else if (inputName === 'auth') {
            setAuth(!auth)
        }
    },[id, pw, pwRe, name, yy, mm, dd, gender, email, nation, tel, auth])
    const onBlur = React.useCallback((e) => {
        e.preventDefault();
        setId(false)
        setPw(false)
        setPwRe(false)
        setName(false)
        setYy(false)
        setMm(false)
        setDd(false)
        setGender(false)
        setEmail(false)
        setNation(false)
        setTel(false)
        setAuth(false)
    },[id, pw, pwRe, name, yy, mm, dd, gender, email, nation, tel, auth])
    return (
        <FormBox onSubmit={onSubmit}>
            <div className="container">
                <div className="content">
                    <h3 className="title"><label htmlFor="id">아이디</label></h3>
                    <div className={id === true ? "box_xs boxjs focus" : "box_xs boxjs"}>
                        <input onBlur={onBlur} onFocus={onFocus} type="text" name="id" id="id"  maxLength="20"/>
                        <span className="title_m">@naver.com</span>
                    </div>
                </div>
                <div className="content">
                    <h3 className="title"><label htmlFor="pw">비밀번호</label></h3>
                    <div className={pw === true ? "box_sm boxjs focus" : "box_sm boxjs"}>
                        <input onBlur={onBlur} onFocus={onFocus} type="password" name="pw" id="pw" maxLength="20"/>
                        <span className="box_sm-span">
                            <FontAwesomeIcon icon={faLock} />
                        </span>
                    </div>
                </div>
                <div className="content">
                    <h3 className="title"><label htmlFor="pw_re">비밀번호 재확인</label></h3>
                    <div className={pwRe === true ? "box_sm boxjs focus" : "box_sm boxjs"}>
                        <input onBlur={onBlur} onFocus={onFocus} type="password" name="pw_re" id="pw_re" maxLength="20"/>
                        <span className="box_sm-span">
                            <FontAwesomeIcon icon={faLock} />
                        </span>
                    </div>
                </div>
                <div className="content mar-top">
                    <div className="content">
                        <h3 className="title"><label htmlFor="name" maxLength="40">이름</label></h3>
                        <div className={name === true ? "box boxjs focus" : "box boxjs"}>
                            <input onBlur={onBlur} onFocus={onFocus} type="text" name="name" id="name"/>
                        </div>
                    </div>
                    <div className="content">
                        <h3 className="title"><label htmlFor="yy">생년월일</label></h3>
                        <div className="clear">
                            <div className="left mar-right">
                                <div className={yy === true ? "box boxjs focus" : "box boxjs"}>
                                    <input onBlur={onBlur} onFocus={onFocus} type="text" name="yy" id="yy" placeholder="년(4자)" maxLength="4"/>
                                </div>
                            </div>
                            <div className="left mar-right">
                                <div className={mm === true ? "box boxjs focus" : "box boxjs"}>
                                    <select onBlur={onBlur} onFocus={onFocus} className="select_sel" id="mm" name="mm">
                                        <option value="">월</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                            </div>
                            <div className="left">
                                <div className={dd === true ? "box boxjs focus" : "box boxjs"}>
                                    <input onBlur={onBlur} onFocus={onFocus} type="text" id="dd" name="dd" placeholder="일" maxLength="2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h3 className="title"><label htmlFor="gender">성별</label></h3>
                        <div className={gender === true ? "box boxjs focus" : "box boxjs"}>
                            <select onBlur={onBlur} onFocus={onFocus} className="select_sel" id="gender" name="gender">
                                <option value="">성별</option>
                                <option value="male">남자</option>
                                <option value="female">여자</option>
                                <option value="no">선택 안함</option>
                            </select>
                        </div>
                    </div>
                    <div className="content">
                        <h3 className="title">
                            <label htmlFor="email">
                                본인 확인 이메일
                            </label>
                            <span className="title_sm">(선택)</span>
                        </h3>
                        <div className={email === true ? "box boxjs focus" : "box boxjs"}>
                            <input onBlur={onBlur} onFocus={onFocus} type="text" name="email" id="email" placeholder="선택입력" maxLength="100"/>
                        </div>
                    </div>
                </div>
                <div className="content mar-top">
                    <h3 className="title"><label htmlFor="tel">휴대전화</label></h3>
                    <div className={nation === true ? "box boxjs focus" : "box boxjs"}>
                        <select onBlur={onBlur} onFocus={onFocus} id="nation" name="nation" className="select_sel" defaultValue="82">
                            <option value="81">일본 +81</option>
                            <option value="82">대한민국 +82</option>
                            <option value="84">베트남 +84</option>
                            <option value="852">홍콩 +852</option>
                            <option value="853">마카오 +853</option>
                            <option value="855">캄보디아 +855</option>
                            <option value="856">라오스 +856</option>
                            <option value="86">중국 +86</option>
                            <option value="880">방글라데시 +880</option>
                            <option value="886">대만 +886</option>
                        </select>
                    </div>
                    <div className="mar-top_xs clear">
                        <div className={tel === true ? "box left-lg mar-right boxjs focus" : "box left-lg mar-right boxjs"}>
                            <input onBlur={onBlur} onFocus={onFocus} type="tel" id="tel" name="tel" ref={able} placeholder="전화번호 입력" maxLength="16"/>
                        </div>
                        <button onClick={onBtnClick} type="submit" className="btn">인증번호 받기</button>
                    </div>
                    <div className={auth === true ? "box mar-top_xs boxjs focus" : "box mar-top_xs boxjs"}>
                        <input onBlur={onBlur} onFocus={onFocus} type="tel" id="auth" name="auth" placeholder="인증번호 입력하세요" maxLength="4" disabled={state}/>
                    </div>
                </div>
            </div>
            <div className="btn_area">
                <button type="submit" className="sub_btn">
                    <span>가입하기</span>
                </button>
            </div>
        </FormBox>
    );
};

export default React.memo(Index);