const defualtState = {
    customers: []
}

export const customerReducer = (state=defualtState, action)=>{
    switch (action.type) {
        case "ADD_CASH": return {...state, cash: state.customers + action.payload}
        case "ADD_GET": return {...state, cash: state.customers - action.payload}
        default: return state
    }
}