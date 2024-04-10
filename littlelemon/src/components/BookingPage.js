import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({availableTimes,dispatch}) {
  return (
    <>
        <section className='hero2'>
            <h1>Welcome to Little Lemon</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </section>
        <section className='form'>
            <h1>Book Your Table Today!</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
            <p>Table is kept for 15 minutes after reservation time. We appreciate you being on time.</p>
        </section>
    </>
  );
}

export default BookingPage;