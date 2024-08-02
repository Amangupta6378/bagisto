import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "Components/ExampleCarouselImage";
import ExampleCarouselImage from "./ExampleCarouselImage";

function UncontrolledExample() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="bg-blue-100 py-3 pt-4">
        <p className="font-bold text-2xl font-sans">
          Get UPTO 40% OFF on your 1st order SHOP NOW
        </p>
      </div>
    </div>
  );
}

export default UncontrolledExample;
