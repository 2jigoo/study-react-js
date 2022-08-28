import React, { useRef, useState } from 'react'

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef();

    const { name, nickname } = inputs;

    /*
        리액트 상태에서 객체를 수정할 땐
        inputs[name] = value;  이렇게 직접 수정하면 안 됨.

        setInputs({
            ...inputs,
            [name]: value
        })
        새로운 객체를 만들어 변화를 주고, 이를 상태로 사용해야 한다
    */

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs, // input 객체를 복사한 뒤
            [name]: value // name키를 가진 값을 value로 설정
        })
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        
        nameInput.current.focus();
    }

    return (
        <div>
            <input name="name" placeholder="이름" value={name}
                onChange={onChange} ref={nameInput} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample