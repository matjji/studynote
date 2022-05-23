import React from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Spinner from '../components/Spinner';
import Table from "../components/Table";

import regexHelper from '../libs/RegexHelper'
//Table 컴포넌트의 CSS를 확장한 컴포넌트
const TableEx = styled(Table)`
    margin-top: 50px;
    margin-bottom: 15px;

    .inputWrapper {
        padding: 0;
        position: relative;
        text-align: left;
        
        .field {
            box-sizing: border-box;
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border: 0;
            padding: 0 10px;
            outline: none;
            font-size: 14px;
        }

        label {
            margin-left: 7px;
            margin-right: 10px;

            input {
                margin-right: 10px;
            }
        }
    }
`
const ProfessorAdd = () => {
    //페이지 강제 이동
    const navigate = useNavigate();
    //useAxios - post
    const [{loading}, refetch] = useAxios({
        url: 'http://localhost:3001/professor',
        method: 'POST'
    }, {manual: true});
    //useAxios - select를 위해 department값 가져오기
    const [{data, loading2}] = useAxios('http://localhost:3001/department')
    const [department, setDepartment] = React.useState();
    React.useEffect((e) => {
        setDepartment(data);
    },[data])
    const onSubmit = e => {
        e.preventDefault();
        const current = e.target;
        //유효성 검사
        try {
            //이름
            regexHelper.value(current.name, "이름을 입력하세요.");
            regexHelper.kor(current.name, "이름은 한글만 입력하세요.")
            regexHelper.minLength(current.name, 2, "최소 2글자 이상 입력하세요.")
            regexHelper.maxLength(current.name, 10, "최대 10글자 이하 입력하세요.")
            //아이디
            regexHelper.value(current.userid, "아이디를 입력하세요.");
            regexHelper.engNum(current.userid, "영어와 숫자의 조합만 가능합니다.")
            regexHelper.minLength(current.userid, 2, "최소 2글자 이상 입력하세요.")
            regexHelper.maxLength(current.userid, 20, "최대 20글자 이하 입력하세요.")
            //직급
            regexHelper.check(current.position, "직급을 선택하세요.");
            //급여
            regexHelper.value(current.sal, "급여를 입력하세요.");
            regexHelper.num(current.sal, '급여는 숫자만 입력 가능합니다..');
            //입사일
            regexHelper.value(current.hiredate, "입사일을 입력하세요.");
            //보직수당
            regexHelper.value(current.comm, "보직수당을 입력하세요.");
            regexHelper.num(current.comm, "보직수당은 숫자만 입력 가능합니다.")
            //소속학과
            regexHelper.value(current.deptno, "소속학과를 선택하세요.");
        } catch(e) {
            window.alert(e.message);
            e.field.focus();
            return;
        }
        const name = current.name.value;
        const userid = current.userid.value;
        const position = current.position.value;
        const sal = parseInt(current.sal.value);
        const hiredate = current.hiredate.value;
        const comm = parseInt(current.comm.value);
        const deptno = parseInt(current.deptno.value);
        (async () => {
            let json = null;
            try {
                const response = await refetch({
                    data: {
                        name: name,
                        userid: userid,
                        position: position,
                        sal: sal,
                        hiredate: hiredate,
                        comm: comm,
                        deptno: deptno
                    }
                })
                json = response.data
            }catch(e) {
                console.error(e);
                window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
            }
            if(json !== null){
                window.alert('저장 되었습니다.')
                navigate('/');
            }
        })()

    }
    
    return (
        <div>
            <Spinner visible={loading || loading2}/>
            <form onSubmit={onSubmit}>
                <TableEx>
                    <colgroup>
                        <col width="120"/>
                        <col/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td className="inputWrapper">
                                <input className="field" type="text" name="name"/>
                            </td>
                        </tr>
                        <tr>
                            <th>아이디</th>
                            <td className="inputWrapper">
                                <input className="field" type="text" name="userid"/>
                            </td>
                        </tr>
                        <tr>
                            <th>직급</th>
                            <td className="inputWrapper">
                                <label><input type="radio" name="position" value="교수"/>교수</label>
                                <label><input type="radio" name="position" value="부교수"/>부교수</label>
                                <label><input type="radio" name="position" value="조교수"/>조교수</label>
                                <label><input type="radio" name="position" value="전임강사"/>전임강사</label>
                            </td>
                        </tr>
                        <tr>
                            <th>급여(만원)</th>
                            <td className="inputWrapper">
                                <input className="field" type="number" name="sal" placeholder='숫자만 입력' />
                            </td>
                        </tr>
                        <tr>
                            <th>입사일</th>
                            <td className="inputWrapper">
                                <input className="field" type="date" name="hiredate"/>
                            </td>
                        </tr>
                        <tr>
                            <th>보직수당(만원)</th>
                            <td className="inputWrapper">
                                <input className="field" type="number" name="comm" placeholder='숫자만 입력'/>
                            </td>
                        </tr>
                        <tr>
                            <th>소속학과</th>
                            <td className="inputWrapper">
                                <select name="deptno" className="field">
                                    <option value="">---- 선택하세요 ----</option>
                                    {department && department.map((v, i) => {
                                        return(
                                            <option key={i} value={v.id}>{v.dname}</option>
                                        )
                                    })}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </TableEx>
                <div style={{ textAlign: 'center'}}>
                    <button type='submit'>저장하기</button>
                </div>
            </form>
        </div>
    );
};

export default React.memo(ProfessorAdd);