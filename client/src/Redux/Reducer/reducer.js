//importar actions-types

//definir estado inicial
const initialState = {
    drivers : [],
    driverDetail : {},
    driverName : [],
    teams: [],
    currentPage: 1
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_DRIVERS':
            return{
                ...state,
                drivers: action.payload,
               
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
        case "GET_DRIVER_DETAIL":
            return {
                ...state,
                driverDetail: action.payload
            };
        case "SEARCH_DRIVER_NAME":
            return {
                ...state,
                driverName: action.payload,
            };   
        case "CLEAN_DRIVER_DETAIL":
            return {
                ...state,
                driverDetail: {},
            }; 

        case "CLEAN_DRIVER_NAME":
            return {
                ...state,
                driverName: [],
            };

        case "NO_RESULTS_FOUND":
            return {
                ...state,
                driverName: [],
            };

        case "GET_TEAMS":
            return {
                ...state,
                teams: action.payload,
            };

        case "FILTER_BY_TEAM":
            return {
                ...state,
                drivers: action.payload,
            };
        case "ORDER DRIVERS":
            let orderDrivers;
            if (payload === "A"){
                orderDrivers = state.drivers.sort((a,b) => {
                    if(a.name > b.name){
                        return 1;
                    }
                    if(a.name < b.name){
                        return -1;
                    }
                    return 0;
                });
            }
            if (payload === "D"){
                orderDrivers = state.drivers.sort((a,b) => {
                    if(a.name > b.name){
                        return -1;
                    }
                    if(a.name < b.name){
                        return 1;
                    }
                    return 0;
                });
            }
            return {
                ...state,
                drivers: orderDrivers
            };
        case "PAGINATE_DRIVERS":
            return {
                ...state,
                drivers: action.payload
            };
        case "CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload
            
            };         
        default:
            return {
                ...state
            }   
    }
}

export default rootReducer;