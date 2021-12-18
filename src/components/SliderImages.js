import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

function SliderImages() {
  return (
    <div style={{ padding: "3%" }}>
      <h4>Recommended Movies</h4>
      <Carousel variant="dark">
        <Carousel.Item>
          <Row xl={5} lg={4} md={3} sm={2}>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./BellBottom.jpg" />
                <Card.Body>
                  <Card.Title>BellBottom</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./DontBreath.jpg" />
                <Card.Body>
                  <Card.Title>DontBreath</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./Dune.jpg" />
                <Card.Body>
                  <Card.Title>Dune</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="./et00056556-fsejcgdqcb-portrait.jpg"
                />
                <Card.Body>
                  <Card.Title>F9</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="./et00122524-zrkxphfyjx-portrait.jpg"
                />
                <Card.Body>
                  <Card.Title>Eternals</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderImages;
