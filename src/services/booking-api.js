import axios from 'axios';

const API_BASE_URL = 'http://localhost:5253';

export const searchFlights= async(departure, destination, date) => {

    try{
        const response = await axios.get(`${API_BASE_URL}/booking/search?departure=${departure}&destination=${destination}&date=${date}`);
        return response;
    } catch(error) {
        console.log('Error searching flights:',error);
        throw error;
    }
}


export const bookFlight= async(bookFlightRequest) => {

    try{
        const config = {
            headers : {
                "content-type": "application/json",
            }
        };
        const response = await axios.post(`${API_BASE_URL}/booking/book`,bookFlightRequest,config);
        return response;
    } catch(error) {
        console.log('Error booking flight:',error);
        throw error;
    }
}