import React, { useEffect } from 'react';
import Cards from '../../components/Cards/Cards';
import './home.styles.css';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterByTeam, getTeams } from '../../Redux/Actions/actions';
import useDriver from '../../hooks/useDriver';
const Home = () => {

    const {drivers} = useDriver();

    const teams = useSelector(state => state.teams);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeams());
    }, []);

    console.log('teams:',teams)



    




    return (
        <div className='home'>
            <h1 className='home-title'> Home</h1>
            <select onChange={(event)=>{
                dispatch(filterByTeam(event.target.value));
            }} >

                {teams?.map((team) => 
                    <option key={team.id} value={team.name}>
                        
                        {team.name}
                    </option>
                )}

            </select>
            <Cards  drivers = {drivers}  />
        </div>
    );
};

export default Home;
