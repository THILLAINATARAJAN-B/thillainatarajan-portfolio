import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="display-4 mb-5 text-center">Contact Me</h2>
        <Row>
          {/* Contact Form */}
          <Col md={6} className="mb-4">
            <Card className="shadow-lg border-0 contact-card">
              <Card.Body>
                <h4 className="mb-4">Let's Connect</h4>
                <Form>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required />
                  </Form.Group>
                  <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Type your message..." required />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Details */}
          <Col md={6} className="mb-4">
            <Card className="shadow-lg border-0 contact-card h-100">
              <Card.Body>
                <h4 className="mb-4">Reach Me At</h4>
                <div className="mb-3">
                  <FaEnvelope className="me-2 text-primary" />
                  <strong>Email:</strong>{' '}
                  <a href="mailto:thillainatarajan001@gmail.com" className="text-dark text-decoration-none">
                    thillainatarajan001@gmail.com
                  </a>
                </div>
                <div className="mb-3">
                  <FaPhone className="me-2 text-success" />
                  <strong>Phone:</strong> +91 99944 84358
                </div>
                <div className="mb-3">
                  <FaMapMarkerAlt className="me-2 text-danger" />
                  <strong>Location:</strong> Coimbatore, Tamil Nadu, India
                </div>
                <div>
                  <FaGithub className="me-2 text-dark" />
                  <strong>GitHub:</strong>{' '}
                  <a href="https://github.com/THILLAINATARAJAN-B" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                  github.com/THILLAINATARAJAN-B
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
