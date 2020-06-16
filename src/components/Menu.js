import React, { Component } from 'react';
import { Nav, Container } from 'react-bootstrap';
import popcornPic from '../images/popcorn.png';


export default class Menu extends Component {
	render() {
		return (
		<Nav>
			<Container className="py-2" style={{ display: "flex" }}>
				<img src={popcornPic}
					alt="Popcorn Picker"
					style={{ width: "50px" }} />
				<Nav.Link href="/home"><h3>Popcorn Picker</h3></Nav.Link>
			</Container>
		</Nav>
		)
	}
}
