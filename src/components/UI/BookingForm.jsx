import React from "react";
import {useNavigate} from "react-router-dom"
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { v4 as uuidv4 } from 'uuid';

const BookingForm = (props) => {
  const navigate = useNavigate()
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event)
    const eventObject = {
      name: event.target[0].value +" "+ event.target[1].value,
      carName: props.carName,
      price: props.price,
      bookingId: uuidv4(),
      date: event.target[8].value,
      time: event.target[9].value,
      toAddress: event.target[5].value,
      email: event.target[2].value,
      phone: event.target[3].value,
    }
    navigate('/booking-confirmation',{state : {eventObject}})
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="From Address" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="To Address" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select defaultValue={"1 person"} name="person" id="">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select defaultValue={"1 luggage"} name="luggage" id="">
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
        ></textarea>
      </FormGroup>
      <div className="payment text-end mt-5">
        <button type="submit" >Book Now</button>
      </div>
    </Form>
  );
};

export default BookingForm;
