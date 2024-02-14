

const GET_DRIVERS = 'GET_DRIVERS';

export const getDrivers = () => {
    return function(dispatch){
        return fetch('http://localhost:3001/drivers')
        .then(response => response.json())
        .then(data => {
            dispatch({type: GET_DRIVERS, payload: data})
        })
    }
}   

export const addDriver = (driver) => {
    return {
        type: 'ADD_DRIVER',
        payload: driver
    }
}

export const deleteDriver = (id) => {
    return {
        type: 'DELETE_DRIVER',
        payload: id
    }
}
