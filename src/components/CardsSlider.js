import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

function CardsSlider() {
  return (
    <div>
      <Carousel variant="light" indicators={false} className="p-5" style={{background: "black"}}>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Card
              className="bg-dark text-white"
              style={{ width: "300px", height: "300px" }}
            >
              <Card.Img src="./Venom.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Venom</Card.Title>
                <Card.Text>
                  A failed reporter is bonded to an alien entity, one of many
                  symbiotes who have invaded Earth. But the being takes a liking
                  to Earth and decides to protect it.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{ width: "300px", height: "300px" }}
            >
              <Card.Img src="./SuryaVanshi.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>SuryaVanshi</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{ width: "300px", height: "300px" }}
            >
              <Card.Img src="./ShangChi.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>ShangChi</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Card
              className="bg-dark text-white"
              style={{ width: "300px", height: "300px" }}
            >
              <Card.Img src="./NoTimeToDie.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>NoTimeToDie</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{ width: "300px", height: "300px" }}
            >
              <Card.Img src="./tadap.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Tadap</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{ width: "300px", height: "300px" }}
            >
              <Card.Img src="./spidermen.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Spider-man</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Card
              className="bg-dark text-white"
              style={{ width: "300px", height: "300px" }}
            >
              <Card.Img src="./HalloweenKills.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>HalloweenKills</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{ width: "300px", height: "300px" }}
            >
              <Card.Img src="./pandu.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Pandu</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-dark text-white"
              style={{ width: "300px", height: "300px" }}
            >
              <Card.Img src="./email_female.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Email Female</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CardsSlider;
