//importar actions-types

//definir estado inicial
const initialState = {
    drivers : [],
    loading : false,
    error : null
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_DRIVERS':
            return{
                ...state,
                drivers: action.payload
            };
        case "ADD_DRIVER":
            return {
                ...state,
                drivers: [...state.drivers, action.payload]
            };
        case "DELETE_DRIVER":
            return {
                ...state,
                drivers: state.drivers.filter(driver => driver.id !== action.payload)
            };
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;