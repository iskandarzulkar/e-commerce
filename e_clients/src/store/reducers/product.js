const initialState ={
    products:[],
    isLoading: false,
    error:null
}

const product = (state=initialState, action) =>{
    console.log(action.type);
    switch(action.type){
        default:
            return state

        case "GET_LIST_PRODUCT":
            return{
                ...state,
                isLoading: true,
                error: null
            }

        case "GET_LIST_PRODUCT_SUCCESS":
            return{
                isLoading: false,
                products : [...state.products, action.payload],
                error: null
            }

        case "GET_LIST_PRODUCT_FAILED":
            return{
                isLoading: false,
                products: [],
                error: action.payload
            }

        case "GET_FAILED_REMOVE_ERRORS":
            return{
                isLoading: false,
                products: [],
                error: null
            }
    }
}

export default product;