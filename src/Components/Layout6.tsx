import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage.tsx";

function Layout_Six() {
  return (
    <div className="bg-white min-vh-100 d-flex flex-column position-relative">
      <div className="text-center mt-5">
        <h1 className="text-black">What our customers say</h1>
      </div>
      <Carousel className="mt-4 bg-light m-5 p-5">
         <Carousel.Item>
          <ExampleCarouselImage
            imageSrc={require('./../assets/justin-modrak.webp')}
            feedback="Hexnode is of great value. Works great with Android and ios!"
            customerName="Justin Modrak"
            designation="Technology Coordinator, East Troy Community School District"
          />
        </Carousel.Item>

         <Carousel.Item>
          <ExampleCarouselImage
            imageSrc={require('./../assets/dalibor-kruljac.webp')}
            feedback="Most complete MDM solution I found, and I tested many of them, including major names"
            customerName="Dalibor Kruljac"
            designation="KAMELEYA LTD"
          />
        </Carousel.Item>

         <Carousel.Item>
          <ExampleCarouselImage
            imageSrc={require('./../assets/chris-robinson.jpg')}
            feedback="It seemed to be in-line with everything we were looking at."
            customerName="Chris Robinson"
            designation="Executive Account Manager, NCS"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Layout_Six;
