const defualtState = {
 count: 0
}

export const INCREMET = "INCREMENT";
export const DECREMET = "DECREMENT";
export const ASYNC_INCREMET = "ASYNC_INCREMET";
export const ASYNC_DECREMET = "ASYNC_DECREMET";

export const countReducer = (state=defualtState, action)=>{
    switch (action.type) {
        case INCREMET: return {...state, count: state.count + 1}
        case DECREMET: return {...state, count: state.count - 1}
        default: return state
    }
}

export const incrementCreater = ()=>({type: INCREMET});
export const decrementCreater = ()=>({type: DECREMET});
export const asyncIncrementCreater = ()=>({type: ASYNC_INCREMET});
export const asyncDecrementCreater = ()=>({type: ASYNC_DECREMET});