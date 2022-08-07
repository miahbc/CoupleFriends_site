import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'
import photo1 from '../assets/couple1.jpeg'
import photo2 from '../assets/doubledate2.webp'
import photo3 from '../assets/doubledate13.jpeg'


function CarouselFunc() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel className="carousel_div" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width="500px"
            src={photo1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3><a href="http://127.0.0.1:8000/#/join">Join</a></h3>
            <p>Sign up today!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width="500px"
            src={photo2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3><a href="http://127.0.0.1:8000/#/view_other_couples">View Other Couples</a></h3>
            <p>Find other couples near you with similar interests.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width="500px"
            src={photo3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3><a href="http://127.0.0.1:8000/#/dates">Get Double Date Inspiration</a></h3>
            <p>Plan dates in your area with your new Couple Friends!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
//   render(<ControlledCarousel />);

export default CarouselFunc;