

const GET_DRIVERS = 'GET_DRIVERS';
const ADD_DRIVER = 'ADD_DRIVER';
const DELETE_DRIVER = 'DELETE_DRIVER';
const GET_DRIVER_DETAIL = 'GET_DRIVER_DETAIL';
const SEARCH_DRIVER_NAME = 'SEARCH_DRIVER_NAME';
const CLEAN_DRIVER_DETAIL = 'CLEAN_DRIVER_DETAIL';

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
