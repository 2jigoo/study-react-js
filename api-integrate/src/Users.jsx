import React, { useState, useEffect } from 'react';
import axios from 'axios'

/*
    요청에 대한 상태 관리
    1. 요청의 결과
    2. 로딩 상태
    3. 에러
 */
function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            setError(null);
            setUsers(null);
            setLoading(true);

            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            setUsers(response.data);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    // async 함수를 넘길 수 없기 때문에 내부에서 async 실행
    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    );
}

export default Users;