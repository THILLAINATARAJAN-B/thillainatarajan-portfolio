import React from 'react';
import { Container, Row, Col, Image, Button, Card, ListGroup } from 'react-bootstrap';
import profile from '../assets/profile.jpg';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './About.css'; // For custom styles (optional)

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Profile Image Section */}
          <Col md={4} className="text-center mb-4 mb-md-0">
            <div className="profile-img-container">
              <Image src={profile} alt="Profile" roundedCircle fluid className="shadow-lg about-img" />
            </div>
          </Col>
          
          {/* Main Content Section */}
          <Col md={8}>
            <div className="about-header">
              <h2 className="display-4 text-dark">About Me</h2>
              <p className="lead">
                I am a passionate software developer with expertise in building innovative applications. I specialize in AI-driven solutions for healthcare, education, and automation. My goal is to deliver high-impact software with an emphasis on user-centric design.
              </p>
              <p>
                In my journey, I have worked on numerous projects that have honed my skills in full-stack development, problem-solving, and leveraging cutting-edge technologies to improve people's lives.
              </p>
            </div>
            {/* Skills List Section */}
            <div className="skills-section">
              <h4 className="text-primary">Core Skills</h4>
              <ListGroup>
                <ListGroup.Item>AI & Machine Learning</ListGroup.Item>
                <ListGroup.Item>React & Node.js</ListGroup.Item>
                <ListGroup.Item>RESTful APIs</ListGroup.Item>
                <ListGroup.Item>UI/UX Design</ListGroup.Item>
                <ListGroup.Item>Database Management (SQL & NoSQL)</ListGroup.Item>
              </ListGroup>
            </div>
            
            {/* Social Links & Call to Action */}
            <div className="social-links mt-4">
              <Button variant="link" href="https://github.com/THILLAINATARAJAN-B" target="_blank">
                <FaGithub size={24} className="text-dark mr-3" />
                GitHub
              </Button>
              <Button variant="link" href="https://www.linkedin.com/in/thillainatarajan-balamurugan" target="_blank">
                <FaLinkedin size={24} className="text-primary mr-3" />
                LinkedIn
              </Button>
              <Button variant="link" href="mailto:thillainatarajan001@gmail.com">
                <FaEnvelope size={24} className="text-danger mr-3" />
                Email
              </Button>
            </div>
          </Col>
        </Row>

        {/* Call-to-Action Button */}
        <div className="cta-section text-center mt-5">
          <Button variant="primary" size="lg" href="#contact" className="cta-btn">Get in Touch</Button>
        </div>
      </Container>

      {/* Testimonials or Personal Statement */}
      <Container className="mt-5">
        <Row>
          <Col md={12}>
            <Card className="testimonial-card shadow-lg">
              <Card.Body>
                <h5 className="card-title">"Driven by Passion, Fueled by Purpose"</h5>
                <p className="card-text">
                  I am committed to creating solutions that make a difference in people's lives. With every project, I aim to improve efficiency, solve problems, and build software that empowers users. I value collaboration and continuous learning, always striving to enhance my skills and knowledge.
                </p>
                <footer className="blockquote-footer">Thillainatarajan B<cite title="Source Title"></cite></footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
