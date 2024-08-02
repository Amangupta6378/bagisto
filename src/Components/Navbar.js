import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://demo.bagisto.com/bagisto-common/themes/shop/default/build/assets/logo-942157c2.svg"
            alt="logo"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto py-3">
            <Nav.Link href="#home" className="ms-5 ">
              MEN
            </Nav.Link>
            <Nav.Link href="#" className="ms-3">
              WOMEN
            </Nav.Link>
            <Nav.Link href="#" className="ms-3">
              KIDS
            </Nav.Link>
            <Nav.Link href="#" className="ms-3">
              WELNESS
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <div className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search product here"
              className=" mr-sm-2 ms-auto "
            />
            <svg
              className="ms-4"
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              viewBox="0 0 448 512"
              style={{ cursor: "pointer" }}
            >
              <path
                fill="#000000"
                d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
              />
            </svg>

            <svg
              className="ms-4"
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              viewBox="0 0 448 512"
              style={{ cursor: "pointer" }}
            >
              <path
                fill="#050505"
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              />
            </svg>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
