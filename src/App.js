import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import styled from 'styled-components';
import { Home } from './pages/Home';
import { About } from './pages/about';
import { Articles } from './pages/Articles';
import './output.css';
import Footer from './components/footer';
import Nav from './components/nav';
import ContactUs from './pages/ContactUs';
import KaiKong from './pages/kaikong';
import CustomerEvalution from './pages/customer-evalution';
import FactoryEquipment from './pages/factory-equipment';
import HonoraryCertificate from './pages/honorary-certificate';
import ContactLin from './pages/contact';
import SmtStencil from './pages/smt-stencil';
import SmtLaser from './pages/smt-laser';
import SmtNano from './pages/smt-nano';

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
        <Route path="/customer-evalution" element={<CustomerEvalution />} />
        <Route path="/factory-equipment" element={<FactoryEquipment />} />
        <Route path="/honorary-certificate" element={<HonoraryCertificate />} />
        <Route path="/contact-lin" element={<ContactLin />} />
        <Route path="/smt-stencil" element={<SmtStencil />} />
        <Route path="/smt-laser" element={<SmtLaser />} />
        <Route path="/smt-nano" element={<SmtNano />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
