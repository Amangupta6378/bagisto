import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

import Nav from "react-bootstrap/Nav";

const Head1 = () => {
  return (
    
     
      <div className=" flex justify-around   border-b-2 border-black-800 py-3">
        <div>
          <NavDropdown
            title="Currency"
            id="basic-nav-dropdown"
            className="fw-bold me-auto "
          >
            <NavDropdown.Item href="#action/3.1" className="fw-bold">
              Rupees
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className="fw-bold">
              Dollar
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="fw-bold">
              Euro
            </NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
          </NavDropdown>
        </div>
      

      <div>Get UPTO 40% OFF on your 1st order SHOP NOW</div>

      <div>
        <NavDropdown
          title="Language"
          id="basic-nav-dropdown"
          className="fw-bold me-auto "
        >
          <NavDropdown.Item href="#action/3.1" className="fw-bold">
            English
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="fw-bold">
            Hindi
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" className="fw-bold">
            Arabic
          </NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
          {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>
      </div>
    </div>
  );
};

export default Head1;
