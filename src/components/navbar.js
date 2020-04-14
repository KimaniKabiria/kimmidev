import React from 'react';

import './style.scss';
import logo from '../images/logo.png';
import Resume from '../images/resume.pdf'

const Navbar = () => (
	<div className="has-shadow is-family-code">
		<nav className="navbar is-fixed-top">
			<div className="container">
				<div className="navbar-brand">
					<a
						className="navbar-item"
						href="/"
					>
						<img src={logo} alt="Logo" />
					</a>
				</div>
				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end">						
						<span className="navbar-item">
							<a href={Resume}>
								<button className="button sectionNavy">
									<p className="is-wht is-family-code">Resume</p>
								</button>
							</a>
						</span>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
