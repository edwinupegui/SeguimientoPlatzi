const reducer = (state, action) => {
    
    switch (action.type){
        case 'SET_FAVORITE':
            return {
                ...state,
                myList: [...state.myList, action.payLoad]
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payLoad)
            }
        case 'LOGIN_REQUEST':
            return{
                ...state,
                user: action.payLoad,
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payLoad,
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payLoad,
            }
        case 'GET_VIDEO_SOURCE':
            return {
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payLoad)) 
                || state.original.find(item.id === Number(action.payLoad)) 
                || []
            }
        default:
            return state; 
    }
}

export default reducer;