import React from 'react';
import { FaChevronDown} from 'react-icons/fa'
import styled, {keyframes} from 'styled-components';
import { flash } from 'react-animations';
import {
	FaSass,
	FaHtml5,
	FaReact,
	FaMobileAlt,
	FaRocket,
	FaOsi
} from 'react-icons/fa';

import GeekDesk from '../images/geek_desk.png';

import './style.scss';
import Emoji from './emoji';

const flashAnimation = keyframes`${flash}`;
 
const FlashyDiv = styled.div`
  animation: 2s ${flashAnimation} infinite;
`;

const About = () => (
	<div>
		<section className="section is-family-code" id="#about">
			<div className="container">
                <div className="columns center">
                    <div className="column is-one-third-desktop">
                        <h1 className="is-navy is-size-3-desktop has-text-centered has-text-weight-bold">01. Who am I?</h1>
                    </div>
                </div>
                <div className="columns abtCol">
                    <div className="column is-half-desktop">
                        <p className="is-navy has-text-left is-size-5-desktop">
                            Hello, I'm Alvin, a software developer who 
                            enjoys building things that live on the
                            Internet. 
                        </p>
                        <p className="is-navy has-text-left is-size-5-desktop">
                            I develop exceptional websites 
                            and web apps that provide intuitive, 
                            pixel-perfect user interfaces with efficient 
                            and modern backends.
                        </p>
                        <p className="is-navy has-text-left is-size-5-desktop">
                            Ever since I wrote my first "Hello world" Script 
                            I knew I was hooked. I love technology and that's 
                            why I create it.
                        </p>
                        <p className="is-navy has-text-left is-size-5-desktop">
                            Software development has never been just a job for me, 
                            it offered an engaging challenge to continually 
                            learn and improve my skills in creating high quality 
                            software. What started as a simple “hello world” 
                            has become a full pledged passion that gets more 
                            exciting as the years go by.
                        </p>
                    </div>
                    <div className="column is-half-desktop">
                        <img src={GeekDesk}/>
                    </div>
                </div>
			</div>
		</section>
	</div>
);

export default About;
