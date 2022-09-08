import {
  Container,
  Nav,
  Navbar as NavbarBs,
  Button,
  Badge,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity, closeCart } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="28"
              height="28"
            >
              <path d="M12,19H7a1,1,0,0,0,0,2h5a1.01348,1.01348,0,0,1,1,1,1,1,0,0,0,2,0A3.00328,3.00328,0,0,0,12,19ZM14,9a1,1,0,1,0-1-1A1,1,0,0,0,14,9Zm4,0h2a3.00328,3.00328,0,0,0,3-3,1,1,0,0,0-2,0,1.01348,1.01348,0,0,1-1,1H18a1,1,0,0,0,0,2Zm2,6H17.83868a8.04287,8.04287,0,0,0,1.14667-2.9502,1.00038,1.00038,0,0,0-1.30566-1.11718,5.96932,5.96932,0,0,1-1.91992.31738A6.06179,6.06179,0,0,1,9.7002,5.2002a7.15542,7.15542,0,0,1,.09765-1.04883A.99925.99925,0,0,0,8.49023,3.05273,8.03194,8.03194,0,0,0,4.26587,15H3a1,1,0,0,0,0,2H8a1,1,0,0,0,0-2H6.83051a6.028,6.028,0,0,1,.8814-9.36035A8.06544,8.06544,0,0,0,15.75977,13.25a7.87832,7.87832,0,0,0,.78906-.03906A6.02734,6.02734,0,0,1,15.27728,15H12a1,1,0,0,0,0,2h8a1,1,0,0,1,0,2,1,1,0,0,0,0,2,3,3,0,0,0,0-6ZM2.62012,19.08008a1.14718,1.14718,0,0,0-.33008.21A1.02776,1.02776,0,0,0,2,20a.98979.98979,0,0,0,1.37988.91992A1.16044,1.16044,0,0,0,3.71,20.71.99349.99349,0,0,0,4,20a1.05232,1.05232,0,0,0-.29-.71A1.00157,1.00157,0,0,0,2.62012,19.08008Z" />
            </svg>
            <span className="ps-3"> Home</span>
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Shop
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-light"
            className="rounded-circle d-inline-flex justify-content-center align-items-center shadow-sm"
            onClick={openCart}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 2"
              viewBox="0 0 35 35"
            >
              <path d="M27.47,23.93H14.92A5.09,5.09,0,0,1,10,20L8,11.87a5.11,5.11,0,0,1,5-6.32h16.5a5.11,5.11,0,0,1,5,6.32l-2,8.15A5.1,5.1,0,0,1,27.47,23.93ZM12.94,8.05a2.62,2.62,0,0,0-2.54,3.23l2,8.15a2.6,2.6,0,0,0,2.54,2H27.47a2.6,2.6,0,0,0,2.54-2l2-8.15a2.61,2.61,0,0,0-2.54-3.23Z" />
              <path d="M9.46 14a1.25 1.25 0 0 1-1.21-1L6.46 5.23A3.21 3.21 0 0 0 3.32 2.75H1.69a1.25 1.25 0 0 1 0-2.5H3.32A5.71 5.71 0 0 1 8.9 4.66l1.78 7.77a1.24 1.24 0 0 1-.93 1.5A1.43 1.43 0 0 1 9.46 14zM15.11 34.75a4 4 0 1 1 4-4A4 4 0 0 1 15.11 34.75zm0-5.54a1.52 1.52 0 1 0 1.52 1.52A1.52 1.52 0 0 0 15.11 29.21zM28.93 34.75a4 4 0 1 1 4-4A4 4 0 0 1 28.93 34.75zm0-5.54a1.52 1.52 0 1 0 1.53 1.52A1.52 1.52 0 0 0 28.93 29.21z" />
              <path d="M28.93,29.21H12.27a3.89,3.89,0,1,1,0-7.78h2.65a1.25,1.25,0,1,1,0,2.5H12.27a1.39,1.39,0,1,0,0,2.78H28.93a1.25,1.25,0,0,1,0,2.5Z" />
            </svg>
            <Badge
              bg="dark"
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(40%, 120%)",
              }}
            >
              {cartQuantity}
            </Badge>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
}
