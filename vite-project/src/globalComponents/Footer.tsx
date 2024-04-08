import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import {Container, Row, Col, Button} from "react-bootstrap"

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "green", color: "#fff", padding: "20px 0" }}>
      <Container>
        <Row>
          <Col md={6}>
            <h5>Om oss</h5>
            <p>
            Vi är en grupp av sju studenter som för närvarande studerar till utvecklare. Detta är vårt första projekt i React, och vi är ivriga att utforska dess möjligheter. Tack för att du utforskar vårt arbete!
            </p>
          </Col>
          <Col md={6}>
            <h5>Externa länkar</h5>
            <ul className="list-unstyled">
              <li>
                <Button variant="link" href="https://github.com/Janainaacm/Grupparbete-frontend/branches" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>GitHub</Button>
              </li>
              <li>
                <Button variant="link" href="https://www.youtube.com/watch?v=fAsy0GwKmRs" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>How to cook</Button>
              </li> 
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;