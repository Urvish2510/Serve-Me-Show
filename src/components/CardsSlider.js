import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'


function CardsSlider() {
    return (
        <div>
            <Carousel variant="dark" className="bg-secondary p-5">
                <Carousel.Item>
                    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <Card className="bg-dark text-white" style={{width: '300px', height: '300px'}}>
                        <Card.Img src="./logo192.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{width: '300px', height: '300px'}}>
                        <Card.Img src="./logo192.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{width: '300px', height: '300px'}}>
                        <Card.Img src="./logo192.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <Card className="bg-dark text-white" style={{width: '300px', height: '300px'}}>
                        <Card.Img src="./logo192.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{width: '300px', height: '300px'}}>
                        <Card.Img src="./logo192.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{width: '300px', height: '300px'}}>
                        <Card.Img src="./logo192.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <Card className="bg-dark text-white" style={{width: '300px', height: '300px'}}>
                        <Card.Img src="./logo192.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{width: '300px', height: '300px'}}>
                        <Card.Img src="./logo192.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{width: '300px', height: '300px'}}>
                        <Card.Img src="./logo192.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
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