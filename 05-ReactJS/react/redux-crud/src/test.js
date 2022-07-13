import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import {getList, getItem, postItem, putItem, deleteItem} from './slices/DepartmentSlice';
const test = memo(() => {

  const {data, loading, error} = useSelector((state) => state.department);
  //dispatch 함수 생성
  const dispatch = useDispatch();

  //컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 디스패치 함
  React.useEffect(() => {
      // dispatch(getList({query:'공학', page: 2, rows: 5}));
      // dispatch(getItem({deptno: 221}));
      // dispatch(postItem({dname: '놀기학과', loc: '어디든지'}));
      // dispatch(putItem({deptno: 236, dname: '놀기학과수정', loc: '몰라어디든지'}));
      // dispatch(deleteItem({deptno: 236}));
  }, [dispatch]);
  return (
    loading ? "loading..." : (
      error ? JSON.stringify(error) : (
        <>
          {JSON.stringify(data)}
        </>
      )
    )
  );
});

export default test;