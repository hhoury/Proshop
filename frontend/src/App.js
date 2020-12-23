import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <main>
        <Header></Header>
        <Container>

          <h1>WELCOME TO PROSHOP</h1>

        </Container>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
