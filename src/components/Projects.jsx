import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/image/projImg1.png";
import projImg2 from "../assets/image/projImg2.png";
import projImg3 from "../assets/image/projImg3.png";
import projImg4 from "../assets/image/projImg4.png";
import projImg5 from "../assets/image/projImg5.png";
import projImg6 from "../assets/image/ProjImg6.png";

import colorSharp2 from "../assets/image/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "MovieAPP",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "MobileGame",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "QuizApp",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Component Element",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Calculator",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "QR Code",
      description: "Design",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have done several projects. I used technology. For
                    example: HTML, Javascript, React Js. I also get some data
                    with the help of two or more Api requests.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          I have done several projects. I used technology. For
                          example: HTML, Javascript, React Js. I also get some
                          data with the help of two or more Api requests.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>None</p>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <p>None</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
