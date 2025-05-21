import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPython, FaJs, FaJava, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaFlask, FaBootstrap } from 'react-icons/fa';
import './Skills.css'; // For custom styles

function Skills() {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="display-4 mb-5 text-center font-weight-bold">Technical Skills</h2>
        <Row>
          {/* Programming Skills Card */}
          <Col md={6} className="mb-5">
            <Card className="shadow-custom border-0 hover-shadow">
              <Card.Body>
                <Card.Title className="text-center font-weight-bold text-muted">Programming</Card.Title>
                <ul className="list-unstyled">
                  <li className="skill-item">
                    <FaPython className="skill-icon" /> <strong>Python</strong>
                  </li>
                  <li className="skill-item">
                    <FaJs className="skill-icon" /> <strong>JavaScript</strong>
                  </li>
                  <li className="skill-item">
                    <FaJava className="skill-icon" /> <strong>Java</strong>
                  </li>
                  <li className="skill-item">
                    <FaCss3Alt className="skill-icon" /> <strong>HTML/CSS</strong>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Frameworks & Tools Card */}
          <Col md={6} className="mb-5">
            <Card className="shadow-custom border-0 hover-shadow">
              <Card.Body>
                <Card.Title className="text-center font-weight-bold text-muted">Frameworks & Tools</Card.Title>
                <ul className="list-unstyled">
                  <li className="skill-item">
                    <FaReact className="skill-icon" /> <strong>React</strong>
                  </li>
                  <li className="skill-item">
                    <FaFlask className="skill-icon" /> <strong>Flask</strong>
                  </li>
                  <li className="skill-item">
                    <FaBootstrap className="skill-icon" /> <strong>Bootstrap</strong>
                  </li>
                  <li className="skill-item">
                    <FaGitAlt className="skill-icon" /> <strong>Git/GitHub</strong>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
