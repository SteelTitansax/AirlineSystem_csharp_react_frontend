import React,{useState} from 'react';
import '../../styles/styles.css'
import { searchFlights } from '../../services/booking-api';

const SearchForm = ({onSearch}) => {
    const [departure,setDeparture] = useState('');
    const [destination,setDestination] = useState('');
    const [date,setDate] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await searchFlights(departure,destination, date);
        onSearch(response.data);
    };

    return (
        <form className="search-form" onSubmit={handleSearch}>
            <input type="text" placeholder='Departure' value={departure} onChange={(e)=>setDeparture(e.target.value)}></input>
            <input type="text" placeholder='Destination' value={destination} onChange={(e)=>setDestination(e.target.value)}></input>
            <input type="date" placeholder='Date' value={date} onChange={(e)=>setDate(e.target.value)}></input>
            <button type="submit">Search</button>
        </form>
    )
};

export default SearchForm;