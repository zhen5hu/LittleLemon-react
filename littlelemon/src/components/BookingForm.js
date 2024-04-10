import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {fetchAPI,submitAPI} from "./BookingAPI"

function BookingForm({availableTimes,dispatch}) {
    const styles = {
        display: 'grid',
        maxWidth: '200px',
        gap: '20px',
    }

    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guest, setGuest] = useState('1');
    const [occasion, setOccasion] = useState('General');
    const [submission, setSubmission] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {date,time,guest};
        submitAPI(formData).then(result => {
            if (result) {
                console.log('Submission successful');
                setSubmission({date,time,guest});
            }
        }).catch(error => {
            console.error('Submission failed:',error);
        });
    };

    useEffect(()=> {
        if (date) {
            fetchAPI(date).then(fetchedTimes => {
                dispatch({type: 'SET_TIMES',payload: fetchedTimes});
            }).catch(error => {
                console.error('Failed to fetch times:', error)
            });
        }
    },[date,dispatch])

    const navigate = useNavigate();
    useEffect(()=> {
        if (submission) {
            navigate("/confirm");
        }
    })

    return (
        <form style={styles} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Date *</label>
            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)}/>
            <label htmlFor="res-time">Time *</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {availableTimes.map((availableTime)=>(
                    <option key={availableTime} value={availableTime}>{availableTime}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of Guests *</label>
            <input type="number" min="1" max="8" id="guests" value={guest} onChange={(e) => setGuest(e.target.value)}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>General</option>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>
                <option>Graduation</option>
            </select>
            <input type="submit" value="Book Now"/>
        </form>
    );
  }

  export default BookingForm;