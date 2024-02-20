import React, { useEffect } from 'react';
import Cards from '../../components/Cards/Cards';
import './home.styles.css';
import { useDispatch } from 'react-redux';
import { filterByTeam, page, getTeams, paginateDrivers, getDrivers } from '../../Redux/Actions/actions';
import useDriver from '../../hooks/useDriver';

const Home = () => {
    const { drivers, currentPage, teams, copyDrivers } = useDriver();
    console.log('copyDrivers:', copyDrivers)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeams());
    }, []);

    useEffect(() => {
        dispatch(paginateDrivers(currentPage, 9, drivers));
    }, [currentPage, drivers]);

    const handleDriversChange = (pageNumber, pageSize, drivers) => {
        dispatch(paginateDrivers(pageNumber, pageSize, drivers));
        dispatch(page(pageNumber));
    }

    const handleFilterChange = (event) => {
        const selectedTeam = event.target.value;
        if (selectedTeam === 'All') {
            // Si se selecciona 'All', se restablece el estado a todos los conductores
            dispatch(getDrivers());
        } else {
            // Se aplica el filtro por equipo seleccionado
            dispatch(filterByTeam(selectedTeam, drivers));
        }
        dispatch(page(1));
    }

    return (
        <div className='home'>
            <h1 className='home-title'> Drivers</h1>
            <div className="select-container">
                <select onChange={handleFilterChange}>
                    <option value="All">All Teams</option>
                    {teams?.map((team) =>
                        <option key={team.id} value={team.name}>
                            {team.name}
                        </option>
                    )}
                </select>
            </div>
            <div className="pagination">
                <button onClick={() => handleDriversChange(currentPage - 1, 9, drivers)} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage}</span>
                <button onClick={() => handleDriversChange(currentPage + 1, 9, drivers)}>Next</button>
            </div>
            <Cards drivers={drivers} copyDrivers={copyDrivers} />
            <div className="pagination">
                <button onClick={() => handleDriversChange(currentPage - 1, 9, drivers)} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage}</span>
                <button onClick={() => handleDriversChange(currentPage + 1, 9, drivers)}>Next</button>
            </div>
        </div>
    );
};

export default Home;
