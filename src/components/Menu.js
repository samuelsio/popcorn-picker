import React, { Component } from 'react';
import { Nav, Container } from 'react-bootstrap';


export default class Menu extends Component {
    render() {
        return (
          <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${ selectedKey }`)}>
            <Container style={{display:"flex"}}>
  <Nav.Item>
    <Nav.Link href="/home"><h3>Popcorn Picker</h3></Nav.Link>
  </Nav.Item>
              </Container>
</Nav>

        )
    }
}
