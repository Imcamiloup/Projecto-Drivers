import React, { useEffect , useState} from 'react';
import Cards from '../../components/Cards/Cards';
import './home.styles.css';
import {useSelector , useDispatch} from 'react-redux';
import { filterByTeam, page, getTeams } from '../../Redux/Actions/actions';
import useDriver from '../../hooks/useDriver';


const Home = () => {

    const {drivers, currentPage, teams} = useDriver();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeams());
    }, []);

    const handlePageChange = (pageNumber) => {
        dispatch(page(pageNumber));
    };
    

    return (
        <div className='home'>
            <h1 className='home-title'> Home</h1>
            <div className="select-container">
                <span>Filtrar por equipo:</span>
                <select onChange={(event) => {
                    dispatch(filterByTeam(event.target.value));
                }}>
                {teams?.map((team) =>
                    <option key={team.id} value={team.name}>
                        {team.name}
                    </option>
                )}
            </select>
        </div>
            <div className="pagination">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage}</span>
                <button onClick={() => handlePageChange(currentPage + 1)}   >Next</button>
            </div>
            <Cards  drivers = {drivers}  />
        </div>
    );
};

export default Home;
