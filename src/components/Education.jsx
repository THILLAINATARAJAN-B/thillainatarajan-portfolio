import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUniversity, FaCalendarAlt, FaBookOpen } from 'react-icons/fa';
import './Education.css'; // Optional custom styles

function Education() {
  return (
    <section id="education" className="py-5 bg-light">
      <Container>
        <h2 className="display-4 mb-5 text-center font-weight-bold">Education</h2>
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="education-card shadow-lg border-0 mb-4">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaUniversity className="education-icon me-3 text-primary" />
                  <div>
                    <h4 className="mb-1">B.E. in AI & Data Science</h4>
                    <h6 className="text-muted">Anna University – Coimbatore Campus</h6>
                  </div>
                </div>
                <Row className="mb-2">
                  <Col xs={12} md={6} className="mb-2">
                    <FaCalendarAlt className="me-2 text-secondary" />
                    <span><strong>Duration:</strong> 2022 – 2026</span>
                  </Col>
                  <Col xs={12} md={6}>
                    <FaBookOpen className="me-2 text-secondary" />
                    <span><strong>Focus:</strong> Artificial Intelligence, Machine Learning, Data Analytics</span>
                  </Col>
                </Row>
                <p className="mb-0">
                  My undergraduate program has emphasized both theoretical foundations and practical applications in AI and Data Science. Key coursework includes Neural Networks, Natural Language Processing, Big Data Analytics, and Computer Vision. I've actively contributed to departmental projects and participated in multiple AI hackathons.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Education;
