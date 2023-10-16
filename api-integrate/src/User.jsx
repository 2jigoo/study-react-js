import React, { useEffect, useReducer } from 'react';
import axios from 'axios'
import useAsync from './useAsync';

// useAsync에서 Promise의 결과를 바로 data에 담기 때문에
// 요청 후 response에서 data를 추출하는 함수를 따로 만듦
async function getUser(id) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
}

function User({ id }) {
    const [state] = useAsync(() => getUser(id), [id]);

    const { loading, data: user, error } = state;

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!user) return null;

    return (
        <div>
            <h2>{user.username}</h2>
            <p><b>Email:</b> {user.email}</p>
        </div>
    );
}

export default User;