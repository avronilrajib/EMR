import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  
  };
  return (
    <>


      <div className="DummySection">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Hello</h1>
            </div>
            <div className="col-md-6">
              <h1>Hello 2</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Home;
