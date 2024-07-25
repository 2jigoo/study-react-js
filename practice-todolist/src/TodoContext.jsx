import React, { createContext, useContext, useReducer, useRef } from 'react';

const initialTodos = [
    {
      id: 1,
      text: '프로젝트 생성하기',
      done: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링하기',
      done: true
    },
    {
      id: 3,
      text: 'Context 만들기',
      done: true
    },
    {
      id: 4,
      text: '기능 구현하기',
      done: false
    }
  ];


/**
 * 
 * @param {*} state 현재 상태
 * @param {*} action 업데이트를 위한 정보
 * @returns 
 */
function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done} : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
    
    const nextId = useRef(5);

    // state: 상태
    // dispatch: 액션을 발생시키는 함수
    // const [state, dispatch] = useReducer(reducer, initialState);
    
    const [state, dispatch] = useReducer(todoReducer, initialTodos);

    // return children;

    /* `state`와 `dispatch` 전달 분리 */

    // Context Provider 하위의 컴포넌트에서 아래와 같이 사용
    // const state = useContext(TodoStateContext);
    // const dispatch = useContext(TodoDispatchContext);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

// Context Provider 하위의 컴포넌트에서 아래와 같이 사용
// const state = useTodoState();
// const dispatch = useTodoDispatch();
export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }

    return useContext(TodoStateContext);
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
    throw new Error('Cannot find TodoProvider');
  }

    return useContext(TodoNextIdContext);
}