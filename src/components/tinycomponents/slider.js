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



import Background1 from '../images/mainslider/img1.jpeg';
import Background2 from '../images/mainslider/img2.jpg';
import Background3 from '../images/mainslider/img3.jpg';
import Background4 from '../images/mainslider/img4.jpg';
import Background5 from '../images/mainslider/img5.jpg';







export function Slider() {
  // nothing logical just change the css to get the cube back

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
      <div data-src={Background2}  />
      <div data-src={Background3} />
      <div data-src={Background4} />
      <div data-src={Background5} />
 


    </AutoplaySlider>
  );


  
  return (
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
        <img src={item.src} alt={item.altText} className="simpleimage"  />
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


 




