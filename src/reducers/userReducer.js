const userReducer = (state = {}, action) => {
    if (action.type === 'updateUser') {
        return {
            name: action.payload
        };
    }
    return state
}

export default userReducer;