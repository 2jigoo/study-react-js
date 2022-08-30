import { useCallback, useMemo, useRef, useState } from 'react'
// import Hello from './Hello';
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from './InputSample';
import './App.css'
import UserList from './UserList';
import CreateUser from './CreateUser';

const countActiveUsers = (users) => {
  console.log('활성 사용자 세기');
  return users.filter(user => user.active).length;
}

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;
  
  const onChange = e => {
    const { name, value } = e.target;
    console.log(name + ' ' + value);
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  // # 12. useRef
  // useRef().current
  // - dom 선택
  // - 컴포넌트 안에서 조회 및 수정할 수 있는 변수를 관리 (변경 시 재렌더링 안 됨)
  const nextId = useRef(4);


  /**
   * # 18. useCallback
   * 일반 함수들은 컴포넌트가 재렌더링 될 때마다 새롭게 생성됨
   * 함수를 재사용하기 위함
   * 함수 안에서 사용하는 상태 혹은 props가 있다면 deps에 포함시켜야 함
   */

  // # 13. 배열 항목 추가

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [users, username, email]);


  // # 14. 배열 항목 제거

  const onRemove = useCallback((id) => {
    setUsers(users.filter(user => user.id != id));
  }, [users]);

  
  // # 15. 배열 항목 수정

  const onToggle = useCallback(id => {
    setUsers(
      users.map(user => user.id === id ? {...user, active: !user.active} : user)
    );
  }, [users]);

  // input 값이 변경될 때도 함수가 호출 됨;
  // const count = countActiveUsers(users);

  // # 17. useMemo
  // deps가 변경되면 함수 호출해서 연산. 바뀌지 않았다면 이전에 연산한 값 사용
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      {/* <Wrapper>
        <Hello name="react" color="red" isSpecial={true} />
        <Hello color="pink" />
      </Wrapper>
      <Counter />
      <InputSample /> */}
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  )
}

export default App
