const initialState = {
    isAuthenticated: false,
    isLoadingLogin: false,
    error: null
}

const login = (state=initialState, action) =>{
  
    switch(action.type){
        default:
            return{
                ...state,
                isLoadingLogin: false
            }
            
            case "LOGIN_SUCCESS":
                return{
                    isAuthenticated: true,
                    isLoadingLogin: false,
                    error: null
                }

            case "LOGIN_FAILED":
                return{
                    isAuthenticated: false,
                    isLoadingLogin: false,
                    error: action.payload
                }

            case "LOGIN_REMOVE_ERRORS":
                return{
                    isAuthenticated: false,
                    isLoading: false,
                    error: null
                }

            case "LOGOUT_SUCCESS":
                return{
                    isAuthenticated: false,
                    isLoading: false,
                    error: null
                }
    }
}


export default login;