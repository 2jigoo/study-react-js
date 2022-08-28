import React from 'react'

const Wrapper = ({children}) => {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };

    // props.children을 넣어줘야 하위 컴포넌트의 모습이 보인다.

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper