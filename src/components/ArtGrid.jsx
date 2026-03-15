import { Container, Row, Col, Card, Button } from "react-bootstrap";

import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import a4 from "../assets/a4.png";

const arts = [
  { img: a1, name: "Monkey", price: "0.25 ETH" },
  { img: a2, name: "Alien", price: "0.32 ETH" },
  { img: a3, name: "Bear", price: "0.28 ETH" },
  { img: a4, name: "Robot", price: "0.30 ETH" },
];

export default function ArtSection() {
  return (
    <section className="art-section">
      <Container>

        <div className="section-header">
          <h2>Amazing and Unique Arts for the week</h2>
          <Button className="primary-btn">View All</Button>
        </div>

        <Row>
          {arts.map((art, index) => (
            <Col md={3} key={index}>
              <Card className="nft-card">
                <Card.Img src={art.img} alt={art.name} />

                <Card.Body>
                  <h6>{art.name}</h6>
                  <p className="price">{art.price}</p>
                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}