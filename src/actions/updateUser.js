export const updateUser = (newUser) => {
    return ({
        type: 'updateUser',
        payload: newUser
    })
}