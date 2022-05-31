import React, { memo } from 'react';

const test = memo(() => {
    const [areaname, setAreaName] = React.useState();
    const [partCode, setPartCode] = React.useState();
    React.useEffect(() => {
        dispatch(getList({
            partcode: partCode,
            areaname: areaname
        }))
    },[dispatch, partCode, areaname])
    const onPartChange = React.useCallback((e) => {
        e.preventDefault();
        const current = e.target;
        const partValue = current[current.selectedIndex].value;
        setPartCode(partValue)
    }, [setPartCode])
    const onAreaChange = React.useCallback((e) => {
        e.preventDefault();
        const current = e.target;
        const areaValue = current[current.selectedIndex].value;
        setAreaName(areaValue)
    }, [setAreaName])
    return (
        <div>
            <select name="part" onChange={onPartChange}>
                <option value="">-- 분야 선택 --</option>
                <option value="PC03">관광지</option>
                <option value="PC02">숙박</option>
                <option value="PC01">식음료</option>
                <option value="PC04">체험</option>
                <option value="PC05">동물병원</option>
            </select>
            <select name="area" onChange={onAreaChange}>
                <option value="">-- 지역 선택 --</option>
                <option vlaue="AC01">춘천시</option>
                <option vlaue="AC02">원주시</option>
                <option vlaue="AC03">강릉시</option>
                <option vlaue="AC04">동해시</option>
                <option vlaue="AC05">태백시</option>
                <option vlaue="AC06">속초시</option>
                <option vlaue="AC07">삼척시</option>
                <option vlaue="AC08">홍천군</option>
                <option vlaue="AC09">횡성군</option>
                <option vlaue="AC10">영월군</option>
                <option vlaue="AC11">평창군</option>
                <option vlaue="AC12">정선군</option>
                <option vlaue="AC13">철원군</option>
                <option vlaue="AC14">화천군</option>
                <option vlaue="AC15">양구군</option>
                <option vlaue="AC16">인제군</option>
                <option vlaue="AC17">고성군</option>
                <option vlaue="AC18">양양군</option>
            </select>
        </div>
    );
});

export default test;