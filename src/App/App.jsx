import React from 'react';
import { Button, CarouselProvider, Slider, Slide } from '../';
import s from './style.css';
import { cn } from '../helpers';

const DevelopmentApp = () => (
  <CarouselProvider
    visibleSlides={2}
    totalSlides={9}
  >
    <h1 className={cn(['headline', s.headline])}>Carousel Dev App</h1>
    <Slider className={cn(['slider', s.slider])}>
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
    </Slider>
    <Button>Hello</Button>
  </CarouselProvider>
);

export default DevelopmentApp;
