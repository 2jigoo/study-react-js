import { useEffect, useReducer } from 'react';

/*
    요청에 대한 상태 관리
    1. 요청의 결과
    2. 로딩 상태
    3. 에러
 */
function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`unhandled action type: ${action.type}`);
    }
}

function useAsync(callback, deps = [], skip = false) {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    });
    
    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const data = await callback();
            dispatch({ type: 'SUCCESS', data });
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    };

    useEffect(() => {
        if (skip) return;
        fetchData();
        // eslint-disable-next-line
    }, deps);

    return [state, fetchData];
}

export default useAsync;