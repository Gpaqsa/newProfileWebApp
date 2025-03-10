import meter1 from "../assets/image/meter1.svg";
import meter2 from "../assets/image/meter2.svg";
import meter3 from "../assets/image/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/image/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Proficient in creating and styling web pages with semantic HTML
                elements and responsive design principles.
                <br></br> Familiar with building single-page applications using
                React, functional components, and React Hooks.<br></br>Basic
                proficiency in Git, capable of common tasks like cloning,
                committing, branching, and merging.<br></br>Experience in
                fetching and integrating data from APIs using Axios or Fetch
                API.<br></br>Skilled in managing and validating forms with React
                Hook Form and Yup.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="meter1" />
                  <h5>Front-end development(React,HTML,CSS,JS)</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="meter2" />
                  <h5>Back-end development(NodeJS Express, PostMan)</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="meter3" />
                  <h5>NoSQL(MongoDB)</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="meter4" />
                  <h5>Microservies Architecture(Docker Beginner)</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="bg" />
    </section>
  );
};
