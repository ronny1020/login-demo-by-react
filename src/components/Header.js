import React from "react";
import { Navbar, Nav} from "react-bootstrap";

function Header() {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/">Login Demo</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/member">Member</Nav.Link>
				</Nav>
                <Nav className="ml-auto">
					<Nav.Link href="/login">Login</Nav.Link>
				</Nav>

			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
