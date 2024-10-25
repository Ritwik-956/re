import React, { useState } from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import { v4 as uuidv4 } from 'uuid';
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";

import BlogList from "../components/UI/BlogList";
import { useLocation } from "react-router-dom";

// export let carData = [{
//   id: 0,
//   brand: "Audi",
//   rating: 52,
//   carName: "AudiR-8",
//   imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.bgnv9HtOUqkkFA-ntLMcQAHaEE%26pid%3DApi&f=1&ipt=749ad362b524694c96c7d61927ecf91060ae84bc34453cf696773dc263aeea40&ipo=images",
//   model: "2024",
//   price: 70,
//   speed: 90,
//   gps: "GPS Navigation",
//   seatType: "Heated seats",
//   automatic: "Autometic",
//   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
// }]

const Home = () => {
  const [carDataObject, setCarDataObject] = useState(carData)
  const location = useLocation()
  let role = "user"

  if(location.state !== null && location.state !== undefined){
    role = location.state
  }
  const handleDelete = (id) => {
    setCarDataObject((prevData) => prevData.filter((car) => car.id !== id));
  };
  
  function handleSubmit(event) {
    event.preventDefault();
    const brandName = event.target[0].value;
    const carName = event.target[1].value;
    const imageURL = event.target[2].value;
    const price = event.target[3].value;
    const carType = event.target[4].value;
    const maxSpeed = event.target[5].value;
    const year = event.target[6].value;
    const description = event.target[7].value;
    const eventObject = {
      id: uuidv4(),
      brand: brandName,
      rating: 52,
      carName: brandName + carName,
      imgUrl: imageURL,
      model: year,
      price: price,
      speed: maxSpeed,
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: carType,
      description: description
    }
    setCarDataObject(
      (prevValue) => {
        return [...prevValue,eventObject]
      }
    )
    carData = [...carData,eventObject]
    
  }
  if (role === "user") {
    return (
      <Helmet title="Home">
        {/* ============= hero section =========== */}
        <section className="p-0 hero__slider-section">
          <HeroSlider />

          <div className="hero__form">
            <Container>
              <Row className="form__row">
                <Col lg="4" md="4">
                  <div className="find__cars-left">
                    <h2>Find your best car here</h2>
                  </div>
                </Col>

                <Col lg="8" md="8" sm="12">
                  <FindCarForm />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        {/* =========== about section ================ */}
        <AboutSection />
        {/* ========== services section ============ */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5 text-center">
                <h6 className="section__subtitle">See our</h6>
                <h2 className="section__title">Popular Services</h2>
              </Col>

              <ServicesList />
            </Row>
          </Container>
        </section>
        {/* =========== car offer section ============= */}
        <section>
          <Container>
            <Row>
              {/* <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col> */}

              {carDataObject.map((item) => (
                <CarItem role={role} item={item} key={item.id} id={item.id} />
              ))}
            </Row>
          </Container>
        </section>
        {/* =========== become a driver section ============ */}
        <BecomeDriverSection />

        {/* =========== testimonial section =========== */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-4 text-center">
                <h6 className="section__subtitle">Our clients says</h6>
                <h2 className="section__title">Testimonials</h2>
              </Col>

              <Testimonial />
            </Row>
          </Container>
        </section>

        {/* =============== blog section =========== */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5 text-center">
                <h6 className="section__subtitle">Explore our blogs</h6>
                <h2 className="section__title">Latest Blogs</h2>
              </Col>

              <BlogList />
            </Row>
          </Container>
        </section>
      </Helmet>
    );
  }
  if (role === "admin") {
    return (<div style={{ textAllign: "center" }}>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="contact__form">
          <Input placeholder="Brand Name" type="text" />
        </FormGroup>
        <FormGroup className="contact__form">
          <Input placeholder="Car Name" type="text" />
        </FormGroup>
        <FormGroup className="contact__form">
          <Input placeholder="Image URL" type="text" />
        </FormGroup>
        <FormGroup className="contact__form">
          <Input placeholder="Price" type="text" />
        </FormGroup>
        <FormGroup className="contact__form">
          <Input placeholder="Car Type" type="text" />
        </FormGroup>
        <FormGroup className="contact__form">
          <Input placeholder="Max Speed" type="text" />
        </FormGroup>
        <FormGroup className="contact__form">
          <Input placeholder="Year" type="text" />
        </FormGroup>
        <FormGroup className="contact__form">
          <textarea
            rows="5"
            placeholder="Description"
            className="textarea"
          ></textarea>
        </FormGroup>

        <button className=" contact__btn" type="submit">
          SUBMIT
        </button>
      </Form>
      <section>
        <Container>
          <Row>
            {carDataObject.map((item) => (
              <CarItem onDelete={handleDelete} role={role} item={item} key={item.id} id={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </div>)
  }
};
export default Home;
