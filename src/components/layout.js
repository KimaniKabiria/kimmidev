import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Navbar from './navbar';
import Midsection from './midsection';
import Footer from './footer';
import About from './about';

const Layout = ({ children }) => ( 
    <div>
        <Helmet/>
        <Navbar/>
        <Header/>
        <About/>
        <Midsection/>
        <Footer/>
    </div>
);

export default Layout;