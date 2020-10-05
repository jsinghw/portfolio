import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// core components
import Card from "../../../components/Card/Card.js";



import img11 from "../../../assets/img/project1/proj11.png";
import img12 from "../../../assets/img/project1/proj1-2.png";
import img13 from "../../../assets/img/project1/proj1-3.png";
import img14 from "../../../assets/img/project1/proj1-4.png";
import img15 from "../../../assets/img/project1/proj1-5.png";
import img16 from "../../../assets/img/project1/proj1-6.png";
import img17 from "../../../assets/img/project1/proj1-7.png";
import img18 from "../../../assets/img/project1/proj1-8.png";


import img21 from "../../../assets/img/project2/proj2-1.png";
import img22 from "../../../assets/img/project2/proj2-2.png";
import img23 from "../../../assets/img/project2/proj2-3.png";
import img24 from "../../../assets/img/project2/proj2-4.png";
import img25 from "../../../assets/img/project2/proj2-5.png";
import img26 from "../../../assets/img/project2/proj2-6.png";


import img31 from "../../../assets/img/project3/proj3-1.png";
import img32 from "../../../assets/img/project3/proj3-2.png";
import img33 from "../../../assets/img/project3/proj3-3.png";
import img34 from "../../../assets/img/project3/proj3-4.png";


import img41 from "../../../assets/img/project4/proj4-1.png";
import img42 from "../../../assets/img/project4/proj4-2.png";
import img43 from "../../../assets/img/project4/proj4-3.png";
import img44 from "../../../assets/img/project4/proj4-4.png";
import img45 from "../../../assets/img/project4/proj4-5.png";



function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
        <button
        className={className}
        style={{ ...style }}
        onClick={onClick}
        />
    )
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <button
        className={className}
        style={{ ...style }}
        onClick={onClick}
        />
    )
}


export default function CarouselSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="slick-arrow slick-next"/>,
    prevArrow: <SamplePrevArrow className="slick-arrow slick-next"/>
    // autoplay: true
  };
  return (
      <section id='portfolio'>
          <div className='arrow-down-portfolio'>
          </div>
          <h2 className="header-text">Portfolio</h2>
          <div className="carousel-wrapper">
              <div className="carousel-imgs-1">
                  <Carousel {...settings}>
                      <div>
                          <img src={img11} alt="First slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img
                              src={img12}
                              alt="Second slide"
                              className="slick-image"
                              />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img src={img13} alt="Third slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img src={img14} alt="Forth slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img src={img15} alt="Fifth slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img src={img16} alt="Sixth slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img src={img17} alt="Seventh slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img src={img18} alt="Eighth slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                  </Carousel>
              </div>
              <div className="carousel-txt-1">
                  <Card className='side-text-wrapper'>
                      <h3 className='side-text-header'>
                          Recipe Hacker
                      </h3>
                      <h4 className='side-text-subheader'>
                          Django
                      </h4>
                      <div className='side-text-body'>
                          Project that is meant for a user to be able to create an account and then favorite, comment, and see nutritional information on that recipe. The nutritional information for each ingrident is returned from an api and then after calculating the total nutritional value of the recipe it is displayed to the user.
                      </div>
                  </Card>
              </div>
          </div>
          <div className="carousel-wrapper">
              <div className="carousel-txt-2">
                  <Card className='side-text-wrapper'>
                      <h3 className='side-text-header'>
                          Kwitter (Twitter Clone)
                      </h3>
                      <h4 className='side-text-subheader'>
                          React
                      </h4>
                      <div className='side-text-body'>
                          Kwitter clone is a project aimed at cloning some of the most baisic features of Twitter. Users are able to create an account, edit their profiles, tweet, and like tweets.
                      </div>
                  </Card>
              </div>
              <div className="carousel-imgs-2">
                  <Carousel {...settings}>
                      <div>
                          <img src={img21} alt="First slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img
                              src={img22}
                              alt="Second slide"
                              className="slick-image"
                              />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img src={img23} alt="Third slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img src={img24} alt="Forth slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img src={img25} alt="Fifth slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img src={img26} alt="Sixth slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                  </Carousel>
              </div>
          </div>
          <div className="carousel-wrapper">
              <div className="carousel-imgs-1">
                  <Carousel {...settings}>
                      <div>
                          <img src={img31} alt="First slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img
                              src={img32}
                              alt="Second slide"
                              className="slick-image"
                              />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img src={img33} alt="Third slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img src={img34} alt="Forth slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                  </Carousel>
              </div>
              <div className="carousel-txt-1">
                  <Card className='side-text-wrapper'>
                      <h3 className='side-text-header'>
                          Mars Needs
                      </h3>
                      <h4 className='side-text-subheader'>
                          React
                      </h4>
                      <div className='side-text-body'>
                          Mars Needs is a meant to be a site that is able to take on thoughts and ideas from the public in ideas of what should be brought over to Mars. This allows users to submit thier ideas, get back a reference number for their idea, and allows admins the ability to search through all of the ideas.
                      </div>
                  </Card>
              </div>
          </div>
          <div className="carousel-wrapper">
              <div className="carousel-txt-2">
                  <Card className='side-text-wrapper'>
                      <h3 className='side-text-header'>
                          Bug Tracker
                      </h3>
                      <h4 className='side-text-subheader'>
                          Django
                      </h4>
                      <div className='side-text-body'>
                          This project is meant to be an internal tool that could be used to help track progress on bugs or issues in an application. Initial users must be created by a super user and then all new users must be created from exisiting users. Any user can submit a ticket for other users to claim. Once a ticket is claimed by a user, that user can invalidate a ticket or complete it.
                      </div>
                  </Card>
              </div>
              <div className="carousel-imgs-2">
                  <Carousel {...settings}>
                      <div>
                          <img src={img41} alt="First slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img
                              src={img42}
                              alt="Second slide"
                              className="slick-image"
                              />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img src={img43} alt="Third slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img src={img44} alt="Forth slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                      <div>
                          <img src={img45} alt="Fifth slide" className="slick-image" />
                          <div className="slick-caption">
                              <h4>
                              </h4>
                          </div>
                      </div>
                  </Carousel>
              </div>
          </div>
      </section>
  );
}
