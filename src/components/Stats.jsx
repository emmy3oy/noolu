import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../App.css"; 

const statsData = [
  { number: "24k+", label: "Collections" },
  { number: "18k+", label: "Auctions" },
  { number: "10k+", label: "Artists" },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <Container>
        <Row className="align-items-center">
          
          {/* Left Text */}
          <Col md={6} className="stats-text">
            <p className="small-heading">Track record</p>
            <h2 className="stats-title">
              Positive track records <br /> and milestones Achieved
            </h2>
            <p className="stats-description">
              Not only do our exclusive NFTs offer a unique opportunity for digital ownership,
              they also provide a platform for artists to showcase their creativity and connect
              with a community of like-minded collectors and enthusiasts.
            </p>
            <Button className="stats-btn">See Track Records</Button>
          </Col>

          {/* Right Stats */}
          <Col md={6} className="stats-numbers d-flex justify-content-around text-center">
            {statsData.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </Col>

        </Row>
      </Container>
    </section>
  );
}