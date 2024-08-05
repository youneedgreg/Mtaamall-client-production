import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Hero from "../components/Hero/Hero";
import Value from "../components/Value/Value";
import Hero1 from '../components/Hero1/Hero1';

const Website = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        {isAuthenticated ? <Hero1 /> : <Hero />}
      </div>
      <Value />
      <Contact />
      <GetStarted />
    </div>
  );
}

export default Website;
