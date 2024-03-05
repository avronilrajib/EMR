import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card";

function Home() {

  return (
    <>


      <div className="DummySection">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <h1>This is test </h1>
            </div>
            <div className="col-md-6">
              <h1>this is test two</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora non a tempore aspernatur est nostrum doloribus consequuntur pariatur facere earum, quos praesentium. Asperiores culpa iure quasi ad, illo ut dignissimos.</p>
              <h1>hello</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Card />
      </div>
    </>
  );
}


export default Home;
