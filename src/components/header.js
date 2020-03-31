import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaChevronDown} from 'react-icons/fa'
import styled, {keyframes} from 'styled-components';
import { bounce } from 'react-animations';

import './style.scss';

import headerImg from '../images/coder_vector.png';

const bounceAnimation = keyframes`${bounce}`;
 
const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation} infinite;
`;

const Header = ({ siteTitle }) => (
	<section className="section is-fullheight-with-navbar is-family-code is-bold is-navy has-text-centered">
		<div className="columns headerMgn">
			<div className="column is-one-third-desktop"></div>
			<div className="column is-two-thirds-desktop">
				<h1 className="is-size-1-desktop is-size-4-mobile is-size-3-tablet is-navy">Hi, I am <span className="has-text-weight-bold">Alvin Kimani.</span></h1>
				<h2 className="is-size-3-desktop is-navy">I build things that live on the internet</h2>
			</div>
		</div>
		<div className="columns">
			<div className="column is-one-third-desktop">
				<img className="headerImg" src={headerImg} alt="HaderIMG"/>
			</div>
			<div className="column is-two-thirds-desktop typed has-text-centered is-navy is-right" >

				<div className="twText">
					<Typewriter			
						options={{
							loop: true,
						}}
						onInit={(typewriter) => {
							typewriter
								.pauseFor(500)
								.typeString("I build <strong>WEB APPS</strong>")
								.pauseFor(300)
								.deleteChars(8)
								.typeString("<strong>WEBSITES</strong>")
								.pauseFor(300)
								.deleteChars(8)
								.typeString("<strong>ANDROID APPS</strong>")
								.pauseFor(300)
								.deleteChars(12)
								.typeString("<strong>Internet of Things</strong>")
								.pauseFor(300)
								.start();
						}}
					/>
				</div>

			</div>
		</div>
		<div className="Columns headerFoot center">
			<div className="column is-one-third-desktop"></div>
			<div className="column is-one-third-desktop has-text-centered">
				<BouncyDiv>
					<h4 className="is-navy is-size-4-desktop">Let's Get Started!</h4>
					<FaChevronDown />
				</BouncyDiv>
			</div>
			<div className="column is-one-third-desktop"></div>
		</div>
	</section>
);


export default Header;
