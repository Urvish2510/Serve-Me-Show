import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "@restart/ui/esm/Button";
import Image from "react-bootstrap/Image"

function Header() {
  return (
    <div style={{ background: "rgb(31, 37, 51)", color: "white" }}>
      <Navbar id="navbar" expand="lg" variant="dark">
        <Container>
          <a href="./image2.png" target="_blank">
            <Image
              viewBox="0 0 88 26"
              width="115"
              src="image2.png"
              alt="An image"
            />
          </a>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="button-63" href="/" id="Home">
                <p id="Home2">Home</p>
              </Nav.Link>
              <Nav id="navbarScrollingDropdown">
                <NavDropdown
                  className="button-63"
                  title="Link"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="/movies">All Movies</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/register">
                    User Registration
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div id="searchForm">
                <Form>
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2 mx-3"
                    aria-label="Search"
                    id="search"
                  />
                </Form>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container
        style={{ padding: "2px 2px 2px 2px", background: "rgb(31, 37, 51)" }}
      >
        <div>
          <ul class="SmallHeader">
            <Button class="NameButton">Movies</Button>
            <Button class="NameButton">Stream</Button>
            <Button class="NameButton">Events</Button>
            <Button class="NameButton">Plays</Button>
            <Button class="NameButton">Sports</Button>
            <Button class="NameButton">Activities</Button>
            <Button class="NameButton">Buzz</Button>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Header;

// function Header() {
//     return (
// <div>
//     <Navbar style={{ background:'rgb(51, 53, 69)', padding:'1%'}} expand="lg" variant='dark'>
//         <Container>
//             <Navbar.Brand href="#">BookMyShow</Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarScroll" />
//             <Navbar.Collapse id="navbarScroll">
//                 <Nav
//                     className="mr-auto my-2 my-lg-0"
//                     style={{ maxHeight: '100px' }}
//                     navbarScroll
//                 >
//                     <Nav.Link href="#action1">Home</Nav.Link>
//                     {/* <Nav.Link href="#action2">Link</Nav.Link> */}
//                     <NavDropdown title="Link" id="navbarScrollingDropdown">
//                         <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
//                     </NavDropdown>
//                     {/* <Nav.Link href="#" disabled>
//                         Link
//                     </Nav.Link> */}
//                 </Nav>
//                 <Form className="d-flex">
//                     <FormControl
//                         type="search"
//                         placeholder="Search"
//                         className="mr-2"
//                         aria-label="Search"
//                     />
//                     <Button variant="outline-success">Search</Button>
//                 </Form>
//             </Navbar.Collapse>
//         </Container>
//     </Navbar>
//     <Navbar bg="dark" variant="dark" style={{padding:0}}>
//         <Container className="p-0">
//             <Nav className="me-auto p-0">
//                 <Nav.Link href="#home">Navbar</Nav.Link>
//                 <Nav.Link href="#home">Home</Nav.Link>
//                 <Nav.Link href="#features">Features</Nav.Link>
//                 <Nav.Link href="#pricing">Pricing</Nav.Link>
//             </Nav>
//         </Container>
//     </Navbar>
//     <br />
// </div>
//     );
// }

// export default Header;
