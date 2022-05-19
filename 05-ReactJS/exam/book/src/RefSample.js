import React from 'react';

const RefSample = () => {
    const input = React.useRef();
    const handleFocus = () => {
        input.current.focus();
    }
    return (
        <div>
            <input ref={input} />
        </div>
    );
};

export default RefSample;