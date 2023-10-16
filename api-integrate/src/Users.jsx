import React, { useState } from 'react';
import axios from 'axios'
import useAsync from './useAsync';
import User from './User';

// useAsync에서 Promise의 결과를 바로 data에 담기 때문에
// 요청 후 response에서 data를 추출하는 함수를 따로 만듦
async function getUsers() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
}

function Users() {
    const [userId, setUserId] = useState(null);
    const [state, refetch] = useAsync(getUsers, [], true);

    const { loading, data: users, error } = state;

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return <button onClick={refetch}>불러오기</button>;
    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}
                        onClick={() => setUserId(user.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={refetch}>다시 불러오기</button>
            { userId && <User id={userId} />}
        </>
    );
}

export default Users;