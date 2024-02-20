const GET_DRIVERS = 'GET_DRIVERS';
const ADD_DRIVER = 'ADD_DRIVER';
const DELETE_DRIVER = 'DELETE_DRIVER';
const GET_DRIVER_DETAIL = 'GET_DRIVER_DETAIL';
const SEARCH_DRIVER_NAME = 'SEARCH_DRIVER_NAME';
const CLEAN_DRIVER_DETAIL = 'CLEAN_DRIVER_DETAIL';
const CLEAN_DRIVER_NAME = 'CLEAN_DRIVER_NAME';
const GET_TEAMS = 'GET_TEAMS';
const FILTER_BY_TEAM = 'FILTER_BY_TEAM';
const ORDER_DRIVERS = 'ORDER_DRIVERS';
const  PAGINATE_DRIVERS = 'PAGINATE_DRIVERS';
const CURRENT_PAGE = 'CURRENT_PAGE';

export const getDrivers = () => {
    return function(dispatch){
        fetch('http://localhost:3001/drivers')
        .then(response => response.json())
        .then(data => {
            dispatch({type: GET_DRIVERS, payload: data})
        })
    }
}   

export const addDriver = (driver) => {
    return {
        type: ADD_DRIVER,
        payload: driver
    }
}

export const deleteDriver = (id) => {
    return {
        type: DELETE_DRIVER,
        payload: id
    }
}

export const getDriverDetail = (id) => {
    return function(dispatch){
        fetch(`http://localhost:3001/drivers/${id}`)
        .then(response => response.json())
        .then(data => {
            dispatch({type: GET_DRIVER_DETAIL, payload: data})
        })
    }
}

export const searchDriverName = (name) => {
    return function(dispatch){
        fetch(`http://localhost:3001/drivers/name/${name}`)
        .then(response => response.json())
        .then(data => {
            dispatch({type: SEARCH_DRIVER_NAME, payload: data})
        })

    }
}

export const cleanDriverDetail = () => {
    return {
        type: CLEAN_DRIVER_DETAIL
    }
}

export const getTeams =()=>{
    return function(dispatch){
        fetch('http://localhost:3001/teams')
        .then(response => response.json())
        .then(data => {
            dispatch({type: GET_TEAMS, payload: data})
        })
    }
}


export const cleanDriverName = () => {
    return {
        type: CLEAN_DRIVER_NAME,
    }
}

export const filterByTeam =  (team) => {

    return function(dispatch){

    fetch('http://localhost:3001/drivers')
    .then(response => response.json())
    .then(data => {
        const driversFilter =[];
        data.map((driver) => {
            driver.Teams.map((t) => {
                if(t.name === team){
                    driversFilter.push(driver);
                }
            });
        });
        console.log('driversFilter:',driversFilter);
        dispatch({type: FILTER_BY_TEAM, payload: driversFilter})   
    })}
}

export const paginateDrivers = (page, pageSizes) => {

    return function(dispatch){
        fetch('http://localhost:3001/drivers')
        .then(response => response.json())
        .then(data => {
            const startIndex = (page - 1) * pageSizes;
            const paginatedDrivers = data.slice(startIndex, startIndex + pageSizes);
            dispatch({type: PAGINATE_DRIVERS, payload: paginatedDrivers})
        })
    }
}

export const page = (pageNumber) => {
    return {
        type: CURRENT_PAGE,
        payload: pageNumber
    }
}

export const orderDrivers = (order) => {
    return {
        type: ORDER_DRIVERS,
        payload: order
    }
}


  