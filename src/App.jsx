import React from 'react';

import { About, Nav, Hero, Services, Tours, Footer } from './components';

const App = () => {
  // console.log('hello');
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
};

export default App;
