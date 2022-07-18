import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import styled from 'styled-components';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Articles } from './pages/Articles';
import './output.css';
import Footer from './components/footer';
import Nav from './components/nav';
import ContactUs from './pages/ContactUs';
import KaiKong from './pages/kaikong';

// const BigGreenHeading = styled.h1`
//   color: green;
// `;

function App() {
  // 注意事项：
  return (
    <div className="App">
      {/* <BigGreenHeading>Server-Side Rendering Example</BigGreenHeading> */}
      {/* <Header /> */}
      <Nav className="!sticky !top-0" />
      <Routes>
        {/* React Router V6 */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/kaikong" element={<KaiKong />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
