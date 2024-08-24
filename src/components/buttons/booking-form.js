import React, {useState} from 'react';
import '../../styles/styles.css'
import { bookFlight } from '../../services/booking-api';

const BookingForm = ({ flight }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleBooking = async (e) => {
        e.preventDefault();

        const response = await bookFlight({
            flightNumber : flight.flightNumber,
            name,
            email,
            phoneNumber
        });
    }

    return ( 
        <div className="container booking-form">
            <h2>Book Flight</h2>
            <form onSubmit={handleBooking}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Phone Number</label>
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                <button type="submit">Book Flight</button>
            </form>
        </div>
    );
};

export default BookingForm;