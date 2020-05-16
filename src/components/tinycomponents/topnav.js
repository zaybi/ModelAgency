import React, { useState, useContext } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import NestedModal from "./nestedmodal";
import { LoginContext } from "../../logincontext";
import { CartContext } from "../../cartcontext";
import { SidebarContext } from "../../sidebarcontext";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";

const Topnav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      
      <Navbar id="topnav" light expand="md" fixed>
    
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="">
          <Nav className="mx-auto" navbar>
            
            <NavItem className="mx-3">
              <NavLink
                tag={RRNavLink}
                exact
                to={"/"}
                activeClassName="active"
                className="m_text"
              >
                HOME
              </NavLink>
            </NavItem>

            <NavItem className="mx-3">
              <NavLink
                tag={RRNavLink}
                exact
                to={"/Women"}
                activeClassName="active"
                className="m_text"
              >
                WOMEN
              </NavLink>
            </NavItem>

            <NavItem className="mx-3">
              <NavLink
                tag={RRNavLink}
                exact
                to={"/men"}
                activeClassName="active"
                className="m_text"
              >
                MEN
              </NavLink>
            </NavItem>
            <NavItem className="mx-3">
              <NavLink
                tag={RRNavLink}
                exact
                to={"/about"}
                activeClassName="active"
                className="m_text"
              >
                ABOUT
              </NavLink>
            </NavItem  >

            <LoginSucess />

            <NavItem className="mx-3">
              <NavLink
                tag={RRNavLink}
                exact
                to={"/contact"}
                activeClassName="active"
                className="m_text"
              >
                CONTACT
              </NavLink>
            </NavItem>
            <div id="iconbar"  >
    <a href="https://www.facebook.com/toxicmodelmgmt" target="_blank">
      <i class="fab fa-facebook fa-lg  mr-3"></i>
    </a>
    <a href="https://www.instagram.com/toxicmodelmgmt" target="_blank">
      <i class="fab fa-instagram fa-lg mr-3"></i>
    </a>
  </div>
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
};

function LoginSucess() {
  
  const [login, setLogin] = useContext(LoginContext);
  const [sidebar, setSidebar] = useContext(SidebarContext);

  function SetSidebarOpen(open) {
    setSidebar((prev) => !prev);
  }

  const loginSucess = login.loginSucess;

  if (loginSucess == false) {
    return (
      <NavItem>
        <NavLink
          tag={RRNavLink}
          exact
          to={"/login"}
          activeClassName="active"
          className="m_text"
        >
          Customer Login
        </NavLink>
      </NavItem>
    );
  } else {
    return (
      <React.Fragment>
        <NavItem className="">
          <Button
            onClick={() => SetSidebarOpen(true)}
            style={{color:"grey", background:"white", border:"1px solid white", fontSize:"26px"}}
        
            
          >
             GET SCOUTED
          </Button>
        </NavItem>
      </React.Fragment>
    );
  }
}

export default Topnav;
