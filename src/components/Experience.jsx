import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import { FaCogs, FaBrain, FaRegPaperPlane } from 'react-icons/fa'; // Icons representing the roles
import './Experience.css'; // Custom styles for improved presentation

function Experience() {
  return (
    <section id="experience" className="py-5 bg-dark text-white">
      <Container>
        <h2 className="display-4 mb-5 text-center font-weight-bold">Professional Experience</h2>
        <Row>
          <Col md={6} className="mb-4">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaBrain className="mr-2 text-primary" />
                  Advanced AI Intern – CodeGalatta
                </Accordion.Header>
                <Accordion.Body>
                  <Card className="bg-dark text-white border-0">
                    <Card.Body>
                      <p>
                        As an Advanced AI Intern, I contributed to developing Natural Language Processing (NLP) and deep learning tools
                        that helped automate business processes. I worked on building scalable AI systems that analyze data and enhance decision-making.
                      </p>
                      <Button variant="outline-primary" href="#experience" className="mt-3">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

          <Col md={6} className="mb-4">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaCogs className="mr-2 text-info" />
                  ERP Intern – Cloud Zoo
                </Accordion.Header>
                <Accordion.Body>
                  <Card className="bg-dark text-white border-0">
                    <Card.Body>
                      <p>
                        During my tenure as an ERP Intern, I developed AI-driven report generation tools using NLP and optimized internal workflows,
                        making the processes faster and more efficient. I worked closely with the data science team to integrate AI models into the company's ERP system.
                      </p>
                      <Button variant="outline-info" href="#experience" className="mt-3">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
