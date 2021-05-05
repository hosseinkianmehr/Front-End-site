import React from 'react';

const CarouselsSwiper = () => {
    return (
        <div class="page">
  <div class="navbar">
    <div class="navbar-inner sliding">
      <div class="left">
        <a href="#" class="link back">
          <i class="icon icon-back"></i>
          <span class="ios-only">Back</span>
        </a>
      </div>
      <div class="title">Infinite Loop Mode</div>
    </div>
  </div>
  <div class="page-content">
    <div data-pagination='{"el": ".swiper-pagination"}' data-loop="true" class="swiper-container swiper-init demo-swiper">
      <div class="swiper-pagination"></div>
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
        <div class="swiper-slide">Slide 10</div>
      </div>
    </div>
  </div>
</div>
    );
};

export default CarouselsSwiper;