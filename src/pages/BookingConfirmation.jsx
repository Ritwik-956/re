// src/BookingConfirmation.js
import React from 'react';
// import './BookingConfirmation.css'; // Optional: for styling
import { useLocation } from 'react-router-dom';

const BookingConfirmation = (  ) => {
  const location = useLocation()
  const {eventObject:data} = location.state;

  return (
    <div className="booking-confirmation-container">
      <h1>Booking Confirmation</h1>
      <p>Thank you for your booking, {data.name}!</p>
      <div className="booking-info">
      <p><strong>Booked Car: </strong> {data.carName}</p>
        <p><strong>Booking ID:</strong> {data.bookingId}</p>
        <p><strong>Booking starts on:</strong> {data.date}</p>
        <p><strong>Trip starts at:</strong> {data.time}</p>
        <p><strong>Destination:</strong> {data.toAddress}</p>
        <p><strong>Total Amount:</strong> ${data.price}</p>
      </div>

      <h2>Contact Information</h2>
      <p><strong>Email:</strong> somegmail@xyz.com </p>
      <p><strong>Phone:</strong> 0987654321</p>

      <div className="confirmation-footer">
        <p>An email confirmation has been sent to {data.email}. If you have any questions, feel free to contact us!</p>
      </div>
    </div>
  );
};

export default BookingConfirmation;
