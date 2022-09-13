import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const Counter = () => {
    /* 
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        // 함수형으로 파라미터를 넘겨주면 상태값을 배치로 처리함
        // https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b
        // https://reactjs.org/docs/react-component.html#setstate
        setNumber(prevNumber => prevNumber + 1);
    }


    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }
     */

    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({ type: 'INCREMENT'});
    };

    const onDecrease = () => {
        dispatch({ type: 'DECREMENT'});
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;