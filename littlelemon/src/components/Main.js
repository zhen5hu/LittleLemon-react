import React, {useReducer } from 'react';
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmBooking from "./ConfirmedBooking";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const Main = () => {
    function updateTimes(state, action){
        switch (action.type) {
            case 'SET_TIMES':
                return action.payload;
            default:
                return state;
        }
    };

    function initializeTimes(){
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    };

    const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes());

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>} />
                <Route path="/confirm" element={<ConfirmBooking/>} />
            </Routes>
        </Router>
    );
};
export default Main;