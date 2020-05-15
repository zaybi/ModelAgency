import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';


import withAutoplay from 'react-awesome-slider/dist/autoplay';

// importing for SimplerSlider 
import  { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
// importing ends for SimplerSlider



import Background1 from '../images/slide1.jpg';
import Background2 from '../images/slide22.jpg';
import Background3 from '../images/slide3.jpg';




function Slider() {

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const slider = (
    <AutoplaySlider
    className="aws-btn"
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}
    bullets={false}
      animation="foldOutAnimation"
      cssModule={[CoreStyles, AnimationStyles]}
    >
      <div data-src={Background1} />
      <div data-src={Background2} style={{}} />
      <div data-src={Background3} />
    </AutoplaySlider>
  );


  return(
    <div >
 {slider}
    </div>

  )
}

// sliderSimpler starts



export function SliderSimpler(props) {






  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === props.items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = props.items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}

       
      >
        <div className="d-flex justify-content-center">
        <img src={item.src} alt={item.altText} style={{height:500, objectFit: "cover"}} />
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={props.interval}
    
    >
      
      {slides}
      
    </Carousel>
  );
}


 





export default Slider;