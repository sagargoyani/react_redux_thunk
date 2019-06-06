const productReducer = (state = [], action) => {
    switch (action.type) {
        case "newProduct":
            if (state === []) {
                return action.payload
            } else {
                return [...state, ...action.payload]
            }
        case "deleteProduct":
            let products = [...state]
            products.splice(action.payload, 1);
            // console.log(products);
            return products;
        default:
            return state;
    }
}


export default productReducer;