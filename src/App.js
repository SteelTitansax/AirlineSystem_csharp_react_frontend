import React, {useState} from 'react';
import SearchForm from './components/buttons/search-form';
import FlightList from './components/buttons/flight-list';

const App = () => {
  const [flights, setFlights] = useState([]);

  const handleSearch = (data) => {
    setFlights(data);
  } 

  return ( 
    <div>
      <h1>Airline Booking App</h1>
      <SearchForm onSearch={handleSearch} />
      {flights.length > 0 && <FlightList flights={flights} />}
    </div>
  )
}

export default App;
