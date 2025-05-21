import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaLaptopCode, FaRegLightbulb, FaBrain } from 'react-icons/fa'; // Project-related icons
import './Projects.css'; // For custom styles

function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="display-4 mb-5 text-center font-weight-bold">Highlighted Projects</h2>
        <Row>
          {/* WE-EmpowerHer AI Card */}
          <Col md={4} className="mb-4">
            <Card className="shadow-lg border-0 project-card hover-shadow">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaBrain className="project-icon" />
                  <Card.Title className="ml-2">WE-EmpowerHer AI</Card.Title>
                </div>
                <Card.Text className="project-description">
                  An AI platform providing governance tools, insights, and recommendations for women leaders and decision-makers.
                </Card.Text>
                <Button variant="primary" href="https://github.com/THILLAINATARAJAN-B/WE-EmpoweHer-AI" className="w-100">View Project</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Remote PC Task Automation Card */}
          <Col md={4} className="mb-4">
            <Card className="shadow-lg border-0 project-card hover-shadow">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaLaptopCode className="project-icon" />
                  <Card.Title className="ml-2">Remote PC Task Automation</Card.Title>
                </div>
                <Card.Text className="project-description">
                  Using Natural Language Processing (NLP) and YOLO (You Only Look Once) for smart, remote control of PCs and automation tasks.
                </Card.Text>
                <Button variant="primary" href="https://github.com/THILLAINATARAJAN-B/Project_oneAPI_hack_kpr" className="w-100">View Project</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Multilingual EdTech Card */}
          <Col md={4} className="mb-4">
            <Card className="shadow-lg border-0 project-card hover-shadow">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaRegLightbulb className="project-icon" />
                  <Card.Title className="ml-2">Multilingual EdTech</Card.Title>
                </div>
                <Card.Text className="project-description">
                  A solution that converts video lectures into summarized PDF notes in multiple languages for improved learning.
                </Card.Text>
                <Button variant="primary" href="https://github.com/THILLAINATARAJAN-B/Multilingual-Education-Platform" className="w-100">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
