import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Navbar from './navbar';
import Contact from './contact';
import Footer from './footer';
import About from './about';
import Tools from './tools';
import Works from './works';
import Projects from './projects';

const Layout = ({ children }) => ( 
    <div>
        <Helmet/>
        <Navbar/>
        <Header/>
        <About/>
        <Tools/>
        <Works/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
);

export default Layout;