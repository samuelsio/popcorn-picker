import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Page from './components/Page';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Menu />
      <Container>
        <Page />
      </Container>
    </div>
  );
}

export default App;
