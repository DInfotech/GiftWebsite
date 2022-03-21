import React from 'react'

const Slider = () => {
  return (
   
  <div class="UpperSlideBar">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active style"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1" class="style"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2" class="style"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <a href="#"><img class="d-block w-100 UpperSlideBar" src="https://cdn.igp.com/f_auto,q_auto,t_pnopt36prodlp/banners/happiness_day_banner_d_20220316.jpg" alt="First slide" /></a>
        </div>
        <div class="carousel-item">
          <a href="#"><img class="d-block w-100 UpperSlideBar" src="https://cdn.igp.com/f_auto,q_auto,t_pnopt36prodlp/banners/birthday_gifts_banner_d_20220311.jpg" alt="Second slide" /></a>
        </div>
        <div class="carousel-item">
          <a href="#"><img class="d-block w-100 UpperSlideBar" src="https://cdn.igp.com/f_auto,q_auto,t_pnopt18prodlp/banners/banners_anniversary_20220121.png" alt="Third slide" /></a>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  )
}

export default Slider;