//importar actions-types

//definir estado inicial
let initialState = {
    data : [],
    loading : false,
    error : null
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_DATA':
            return{
                ...state,
                loading: true
            }
        case 'GET_DATA_SUCCESS':
            return{
                ...state,
                loading: false,
                data: action.payload
            }
        case 'GET_DATA_ERROR':
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;