import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './KarusellKomponent.css'; // Import custom styles

function KarusellKomponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={`${process.env.PUBLIC_URL}/image1.jpeg`}
          alt="Styrke"
        />
        <Carousel.Caption className="carousel-caption-custom">
          <div className="caption-background">
            <h3>Styrke</h3>
            <p>Hos Aktivio fostrer vi mental og fysisk styrke.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={`${process.env.PUBLIC_URL}/image2.jpeg`}
          alt="Helse"
        />
        <Carousel.Caption className="carousel-caption-custom">
          <div className="caption-background">
            <h3>Helse</h3>
            <p>Hos Aktivio mener vi at god mental helse starter i kroppen.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={`${process.env.PUBLIC_URL}/image3.jpeg`}
          alt="Velvære"
        />
        <Carousel.Caption className="carousel-caption-custom">
          <div className="caption-background">
            <h3>Velvære</h3>
            <p>Når din personlige velvære teller, velg Aktivio.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default KarusellKomponent;
