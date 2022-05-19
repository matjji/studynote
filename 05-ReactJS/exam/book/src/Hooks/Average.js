import React from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = React.useState([]);
    const [number, setNumber] = React.useState([]);
    const inputEl = React.useRef(null);
    
    const onChange = React.useCallback(e => {
        setNumber(e.target.value);
    }, []);
    const onInsert = React.useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    },[number, list])
    const avg = React.useMemo(() => getAverage(list), [list]);
    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (<li key={index}>{value}</li>))}
            </ul>
            <div>
                <b>평균값: </b> {avg}
            </div>
        </div>
    );
};

export default Average;