import React from 'react';
import axios from 'axios';
import Spinner from '../component/Spinner';

const Department = () => {
    // 현재 ajax가 데이터를 로딩중인지를 의미하는 상태값
    const [loading, setLoading] = React.useState(false);
    // 화면에 표시할 상태값(ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
    const [department, setDepartment] = React.useState([]);
    // 검색 키워드
    const [keyword, setKeyword] = React.useState('');
    // 삭제할 항목에 대한 id값을 저장하기 위한 상태값
    const [dropId, setDropId] = React.useState(-1);
    // 수정할 항목에 대한 id 값을 저장하기 위한 상태값
    const [updateId, setUpdateId] = React.useState(-1);
    /** 페이지가 처음 열렸을 때와 검색어가 변경되었을 때 실행할 hook */
    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            (async () => {
                try{
                    const response = await axios.get('http://localhost:3001/department', {
                        //검색어가 있다면 dname값으로 설정, 그렇지 않으면 정의 안함
                        params: keyword ? {dname: keyword} : null
                    })
                    // 일반 상태값 업데이트
                    // setDepartment(response.data)
                    // 함수형 업데이트
                    setDepartment(department => response.data);
                }catch(e) {
                    console.error(e)
                    alert('Ajax 연동 실패');
                } finally{
                    //Ajax 로딩 종료를 알림
                    setLoading(false);
                }
            })()
        }, 500)
    },[keyword])
    /** 검색어 입력 요소에 연결할 참조 변수 */
    const myKeywordInput = React.useRef();

    /** 검색 버튼에 대한 클릭 이벤트 */
    // 성능 최적화를 위해 useCallback() 적용함
    const onButtonClick = React.useCallback((e) => {
        setKeyword(myKeywordInput.current.value)
    },[])
    /** form에서 submit이벤트가 발생할 때 호출될 이벤트 핸들러. */
    const onDepartmentSave = React.useCallback((e) => {
        // 페이지 강제 이동을 차단
        e.preventDefault();

        //<form> 안에 있는 입력 요소의 값 추출
        const dname = e.currentTarget.dname.value;
        const loc = e.currentTarget.loc.value;
        console.log('학과명: %s, 위치: %s', dname, loc);

        //ajax 로딩 시작을 알림
        setLoading(true);
        
        setTimeout(() => {
            (async () => {
                //결과를 저장하기 위한 객체
                let json = null
                try {
                    const response = await axios.post('http://localhost:3001/department', {
                        'dname': dname,
                        'loc': loc,
                    })
                    json = response.data
                } catch(err) {
                    console.error(err)
                    alert('데이터 저장에 실패했습니다.');
                } finally {
                    setLoading(false);
                }
                if (json != null) {
                    //기존의 상태값과 배열간 병합을 처리하기 위해 응답결과를 배열로 묵음.
                    const addArr = [json];
                    // 배열 병합 결과로 상태값을 갱신함
                    //setDepartment(department.concat(addArr));
                    // 성능향상을 위해 상태값을 ㅎ마수형 업데이트로 처리함
                    // --> 상태값을 파라미터로 받는 콜백에서 상태값 갱신 결과를 리턴
                    setDepartment(department => department.concat(addArr));
                }
            })()
        }, 500 )
    },[]);
    /**삭제하기 버튼이 클릭되었을 때 호출될 이벤트 핸들러 */
    const onDeleteClick = React.useCallback((e) => {
        //클릭된 자기 자신
        const current = e.currentTarget;
        //클릭된 자신에게 숨어 있는 data-id 값을 추출
        const id = parseInt(current.dataset.id);
        //삭제 대상임을 알림
        setDropId(id);
    },[]);
    /** dropId가 변경되었을 때 실행할 hook */
    React.useEffect(() => {
        if (dropId > -1) {
            //id가 일치하지 않는 항목만 filter로 걸러내어 상태값을 갱신함
            //setDepartment(department.filter((v,i) => v.id !== dropId))
            //성능 향상을 위해 상태값을 함수형 업데이트로 처리함
            // --> 상태값을 파라미터로 받는 콜백에서 상태값 갱신 결과를 리턴
            setDepartment(department => department.filter((v,i) => v.id !== dropId))
            // ajax로딩 시작을 알림
            setLoading(true);

            setTimeout(() => {
                // 백엔드에 데이터가 삭제되었음을 알린다.
                (async () => {
                    // Ajax를 통한 데이터 삭제 요청
                    try{
                        await axios.delete(`http://localhost:3001/department/${dropId}`);
                    } catch(e) {
                        console.error(e)
                        alert('Ajax 연동 실패');
                    } finally {
                        // ajax 로딩 종료를 알림
                        setLoading(false);
                    }
                })()
            }, 500)
            //상태변수를 되돌린다.
            setDropId(-1)
        }
    }, [dropId]);
    /** 수정하기 버튼이 클릭 되었을 때 호출될 이벤트 핸들러 */
    // 성능 최적화를 위해 useCallback() 적용함
    const onUpdateClick = React.useCallback((e) => {
        e.preventDefault();
        setUpdateId(parseInt(e.currentTarget.dataset.id));
    },[])
    /** 수정사항 저장 버튼이 클릭되었을 때 호출될 이벤트 핸들러 */
    // 성능 최적화를 위해 useCallback() 적용함
    const onUpdateSubmit = React.useCallback( e=> {
        e.preventDefault()

        //이벤트가 발생한 <form>요소 취득
        const current = e.target;

        //<from>요소 내의 <input> 요소들을 name속성값으로 접근하여 입력값을 얻음
        const id = current.id.value;
        const dname = current.dname.value;
        const loc = current.loc.value;
        //ajax 로딩 시작을 알림
        setLoading(true);
        // 백엔드에 데이터가 수정되었음을 알린다.
        (async () => {
            //수정 결과에 대한 json
            let json = null;

            //ajax를 통한 데이터 수정 요청
            try {
                const response = await axios.put(`http://localhost:3001/department/${id}`, {
                    dname: dname,
                    loc: loc
                });
                json = response.data;
            } catch (e) {
                console.error(e);
                alert('Ajax 연동 실패')
            } finally {
                // Ajax 로딩 종료를 알림
                setLoading(false);
            }
            if (json !== null) {
                //함수형 업데이트
                // --> 콜백함수의 파라미터로 상태값의 복사본이 전달되므로 이 값을 직접 수정해도 된다.
                setDepartment(department => {
                    //원본 상태값과 비교하여 수정된 항목의 배열 인덱스를 찾는다.
                    const find = department.findIndex((v, i) => v.id === json.id);
                    // 원본 상태값의 해당 인덱스 번호(find)위치부터 1개를 ajax로 반환받은 수정결과 데이터로 교체한다.
                    department.splice(find, 1, json);
                    //수정된 원본 배열을 리턴한다.
                    return department;
                })
            }
        })()
        setUpdateId(-1)
    },[]);
    return (
        <div>
            <Spinner visible={loading} />
            <h2>학과목록</h2>

            <hr/>
            <form onSubmit={onDepartmentSave}>
                <div>
                    <label htmlFor='dname'>학과: </label>
                    <input type='text' name='dname' id='dname'/>
                </div>
                <div>
                    <label htmlFor='loc'>위치: </label>
                    <input type='text' name='loc' id='loc'/>
                </div>
                <button type="submit">저장하기</button>
            </form>
            <form>
                <input type='text' name='keyword' ref={myKeywordInput} />
                <button type='button' onClick={onButtonClick}>
                    검색
                </button>
            </form>
            <hr/>
            <form onSubmit={onUpdateSubmit}>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>학과번호</th>
                            <th>학과명</th>
                            <th>학과위치</th>
                            <th>수정</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {department.length > 0 ? (
                            department.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        {/* 상태값에 저장되어 있는 수정할 항목의 인덱스에 해당하는 원소라면?*/}
                                        {updateId === item.id ? (
                                            <>
                                                {/*수정을 위한 <input> 요소를 표시*/}
                                                <td><input type="hidden" name="id" defaultValue={item.id}/>{item.id}</td>
                                                <td><input type="text" name="dname" defaultValue={item.dname}/>{item.dname}</td>
                                                <td><input type="text" name="loc" defaultValue={item.loc}/>{item.loc}</td>
                                                <td colSpan="2">
                                                    <button type="submit">
                                                        수정사항 저장
                                                    </button>
                                                </td>
                                            </>
                                        ) : (
                                            <>
                                                {/*데이터를 텍스트로 출력*/}
                                                <td>{item.id}</td>
                                                <td>{item.dname}</td>
                                                <td>{item.loc}</td>
                                                <td>
                                                    <button type="button" data-id={item.id} onClick={onUpdateClick}>
                                                        수정하기
                                                    </button>
                                                </td>
                                                <td>
                                                    <button type="button" data-id={item.id} onClick={onDeleteClick}>
                                                        삭제하기
                                                    </button>
                                                </td>
                                            </>
                                        )}

                                    </tr>
                                )
                            })
                        ) : (
                            <tr>
                                <td colSpan='5' align='center'>
                                    검색결과가 없습니다.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default React.memo(Department);