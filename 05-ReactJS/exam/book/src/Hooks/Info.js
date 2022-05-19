import React from 'react';
import useInput from './useInput'

const Info = () => {
    const [state, onChange] = useInput ({
        name: '',
        nickname: '',
    });
    const {name, nickname} = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;