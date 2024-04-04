import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface CustomCardProps {
  title: string;
  description: string;
  image: any;
  route: string;
}

function CustomCard({ title, description, image, route }: CustomCardProps) {
    const [hovered, setHovered] = useState(false);
  
    return (
        <Col xs={2} sm={2} md={2} lg={2} xl={2} className="mb-3">
          <Link to={route} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card 
              className="h-100 border-0" 
              style={{ position: 'relative' }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px', textAlign: 'center', backgroundColor: hovered ? 'rgba(0, 0, 0, 0.5)' : 'transparent', transition: 'background-color 0.3s' }}>
                <h5 className="text-white d-none d-md-block">{title}</h5>
              </div>
              <Card.Img
                variant="top" 
                src={image} 
                style={{ 
                  opacity: 0.5, 
                  transition: 'opacity 0.3s', 
                  width: '100%', 
                  height: 'auto' 
                }} 
                className="img-fluid" 
              />
            </Card>
          </Link>
        </Col>
      );}

export default CustomCard