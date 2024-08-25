let initialState = {
    count: 0,
    id: "",
    password: ""
}

function reducer(state = initialState, action) {
    console.log('action',action)
    switch(action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload.num };
        case 'decrement':
            return { ...state, count: state.count - action.password.num };
        case 'LOGIN':
            return { 
                ...state, 
                id: action.payload.id, 
                password: action.payload.password 
            };
        default:
            return { ...state };
    }
}

export default reducer;