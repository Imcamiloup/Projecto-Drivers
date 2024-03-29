import { useState } from 'react';   
import { searchDriverName } from '../../Redux/Actions/actions';
import { useDispatch } from 'react-redux';

const SearchBar = () => {

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }


    return (
        <div>
            <input placeholder='' type='text' onChange={handleChange}/>
            <button  onClick={() => dispatch(searchDriverName(name))}>
                Search 
            </button>
        </div>
    );
}

export default SearchBar;
