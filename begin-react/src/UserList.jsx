import React, { useEffect } from 'react'

// 19. React.memo
const User = React.memo(function User({ user, onRemove, onToggle }) {

    // # 16. useEffect
    // 미지정: 재렌더링
    // []: 마운트 / 언마운트
    // [ item1, ... ]: 마운트 / 언마운트 / 해당 값이 변경될 때 / 변경되기 직전 
    /* useEffect(() => {
        console.log('user값이 설정됨');
        return () => {
            console.log('user가 바뀌기 전');
        }
    }, [user]); */

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
});


const UserList = ({ users, onRemove, onToggle }) => {

    return (
        <div>
            { users.map(user => 
                <User user={user} key={user.id}
                    onRemove={onRemove} onToggle={onToggle} />
            )}
        </div>
    );
}


export default React.memo(UserList);