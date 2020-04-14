import React from 'react';

import './style.scss';
import logo from '../images/logo.png';

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
							<p>01. About </p>
						</span>
						<span className="navbar-item">
							<p>02. Tech</p>
						</span>
						<span className="navbar-item">
							<p>03. Work</p>
						</span>
						<span className="navbar-item">
							<p>04. Showcase</p>
						</span>
						<span className="navbar-item">
							<p>05. Contact Us</p>
						</span>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
