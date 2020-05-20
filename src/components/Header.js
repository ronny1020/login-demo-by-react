import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { getUser } from "../actions/getUser";

function Header() {
	const [user, setUser] = useState(getUser());

	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/">Login Demo</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">首頁</Nav.Link>
					<Nav.Link href="/member">會員</Nav.Link>
				</Nav>
				<Nav className="ml-auto">
					{user ? (
						<Nav.Link
							onClick={() => {
								localStorage.clear();
								setUser(getUser());
                                window.location.replace("/")
							}}
						>
							登出
						</Nav.Link>
					) : (
						<Nav.Link href="/login">登入</Nav.Link>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
