export const newProductAsync = newProduct => {
    return {
        type: "newProduct",
        payload: [{
            product: newProduct
        }]
    }
}


export const newProduct = newProduct => {
    // debugger
    return function (dispatch) {
        setTimeout(() => {
            dispatch(newProductAsync(newProduct))
        }, 2000);
    }
}

export const deleteProduct = index => {
    return {
        type: "deleteProduct",
        payload: index
    }
}