import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/Homescreen'

const App = () => {
  return (
    <>
      <Header></Header>
      <main className='py-3'>
      
        <Container>

          <Homescreen/>

        </Container>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
