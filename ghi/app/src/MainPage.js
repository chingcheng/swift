import swift_transparent from "./images/swift_transparent.png"
import teal_car from "./images/teal_car.jpeg"
import yellow_van from "./images/yellow_van.jpeg"
import black_car from "./images/black_car.avif"
import black_cooper from "./images/black_cooper.avif"
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  MDBFooter,
  MDBContainer
} from 'mdb-react-ui-kit';
import './index.css';


function MainPage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <div className="p-5 text-center bg-image"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1514053514818-a89e7ce304e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
      height: 800,
      backgroundPosition: "30% 70%",
      left: 0,
      right: 0,
      backgroundSize: "cover"
    }}
    >

    </div>
    <div className="py-4 text-center">
          <h1 className="display-5 fw-bold">
            <img
              src={swift_transparent}
              className="img-fluid"
              alt=""
              style={{
                width: "20%"
              }} />
          </h1>
        </div>
        <div className="col-lg-10 mx-auto container">
          <p className="mb-4 text-center roboto-mono">
            Welcome to Swift! The premiere solution to managing your automobile dealership inventory, service, and sales departments.
          </p>
        </div>
    <div className="container">
    <Row>
      <Col sm>
        <Card style={{ width: 'auto', height: '525px'}}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1526996292069-fe119340a058?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <Card.Body>
        <Card.Title>Inventory</Card.Title>
        <Card.Text className="card-font">
          Check your current inventory stock. Includes details about make, models, and automobiles.
        </Card.Text>
        <Button
          className="tan-btn"
          style={{position:"absolute", bottom: "0"}}
          >
          See current inventory
        </Button>
      </Card.Body>
    </Card>
        </Col>
        <Col sm>
        <Card style={{ width: 'auto', height: '525px' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1591439346018-9d5df732ab7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
      <Card.Body>
        <Card.Title>Sales</Card.Title>
        <Card.Text>
          Manage your sales department information here. Add a salesperson, customer, and sales record. View your dealership's sales records by salesperson.
        </Card.Text>
        <Button className="tan-btn">See sales records</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col sm>
        <Card
        style={{ width: 'auto', height: '525px' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1507578319882-cb1a3b5e72a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <Card.Body>
        <Card.Title>Service</Card.Title>
        <Card.Text>
          Schedule new service appointments, add a technician, and view service appointments by VIN number.
        </Card.Text>
        <Button className="tan-btn">See service appointments</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </div>
    <div className="px-4 py-5 my-5 text-center container">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={teal_car}
              alt="teal_car"
              style={{
                height: "600px",
                width: "100%",
                objectFit: "cover",
                position: "center",
                backgroundPosition: "30% 70%"
              }} />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={black_car}
              alt="black_car"
              style={{
                height: "550px",
                width: "100%",
                objectFit: "cover",
                position: "center",
                backgroundPosition: "30% 70%"
              }} />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={yellow_van}
              alt="yellow_van"
              style={{
                height: "550px",
                width: "100%",
                objectFit: "cover",
                position: "center",
                backgroundPosition: "30% 70%"
              }} />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={black_cooper}
              alt="black_cooper"
              style={{
                height: "550px",
                width: "100%",
                objectFit: "cover",
                position: "center",
                backgroundPosition: "30% 70%"
              }} />
          </Carousel.Item>
        </Carousel>
      </div>
      <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        {/* <section className='mb-4'> */}
          {/* <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            to="//appointments"
            role='button'
          >
            <MDBIcon fas icon='wrench' />
          </MDBBtn> */}

        {/* </section> */}
      </MDBContainer>

      <div className='text-center text-dark p-3' >
        © 2023 Swift
      </div>
    </MDBFooter>
      </>
  );
}

export default MainPage;
