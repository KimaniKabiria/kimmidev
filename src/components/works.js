import React from 'react';
import {
	FaSass,
	FaHtml5,
	FaReact,
	FaMobileAlt,
	FaRocket,
	FaOsi
} from 'react-icons/fa';

import './style.scss';
import Emoji from './emoji';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Works = () => (
	<div>
		<section className="section is-family-code">
			<div className="container">				
                <div className="columns center">
                        <div className="column is-one-third-desktop">
                            <h1 className="is-size-3-desktop has-text-centered has-text-weight-bold is-navy">03. What do I do??</h1>
                            <br/>
                        </div>
                    </div>
                </div>
                <div className="columns abtCol">
                    <div className="column is-one-quarter-desktop">
                    </div>
                    <div className="column is-half-desktop">
                        <Accordion 
                            allowMultipleExpanded={true}
                            allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Web Development
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="is-navy is-size-5-desktop">
                                    I build exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.
                                    </p>
                                    <p className="is-navy is-size-5-desktop">
                                    For websites I build from one pager websites to a more detailed complex corporate webstes, all with exquisite design and extremely fast.
                                    </p>
                                    <br/>                                
                                    <p className="is-navy is-size-5-desktop has-text-weight-bold">
                                    What type of websites to I build;
                                    </p>
                                    <ul>
                                        <li className="is-size-5 ">1. One Pager websites suitable for; App Landing Pages, Portfolio Websites.</li>
                                        <li className="is-size-5 ">2. Small business / corporate websites. This one may have 3-5 pages.</li>
                                        <li className="is-size-5 ">3. Full coporate website. It is suitable for companies who offer various kind of services and products.</li>
                                        <li className="is-size-5 ">4. Small scale Content Management Systems (C.M.S). A content management system is a dynamic website that allow 
                                                                        you to upload images, write articles or upload videos. A good example is a website that has blogging capabilities.
                                        </li>
                                        <li className="is-size-5 ">5. Large scale content management systems. Its like the small  scale C.M.S but with more powerful tools for content handling and has some
                                        form of user interaction (User registration or subscription).</li>
                                    </ul>
                                    <br/>                                
                                    <p className="is-navy is-size-5-desktop">
                                    For web applications, I build them in all types and complexity. I build from ground up, I can colaborate with other developers to add more features to an existing app.
                                    I build from font-end with exquisite designs and to back-end with fast, simple and clean code. I build using php, python, mysql and postgres db.
                                    </p>                                
                                    <p className="is-navy is-size-5-desktop">
                                    I can build web software to perform simple and quick tasks to more complex large scale apps that can handle multiple tasks at once.
                                    </p>                               
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Andorid Development
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="is-navy is-size-5-desktop">
                                    In this day and age everything is going mobile, from shopping to requesting services, bill payments even banking is now mobile. Why so? Almost everyone owns or has
                                    access to a smartphone hence mobile apps will guarantee these users will have access to your services easily.
                                    </p>
                                    <p className="is-navy is-size-5-desktop">
                                    I build simple yet powerful android apps. I develop android apps that will connect to the web application servers I build. I can build android app from start to finish
                                    or collaborate with other developers to build out an app.
                                    </p>
                                    <p className="is-navy is-size-5-desktop">
                                    I build using the latest tech and languages to ensure that my code is simple, clean and very efficient to make the apps as light as possible. I like building apps that
                                    will engage the users and get them glued to the app.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        UI & UX Design
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="is-navy is-size-5-desktop">
                                    With my vast experiece with building back-ends, I have the unique perspective while designing front-ends. I design exquisite, simple and minimal design that will enable
                                    users enjoy my apps. I follow the standard design practices for UI/UX development.
                                    </p>
                                    <br/>
                                    <p className="is-navy is-size-5-desktop">
                                    I design for:
                                    </p>
                                    <ul>
                                        <li className="is-size-5 ">01. Websites</li>
                                        <li className="is-size-5 ">02. WebApps</li>
                                        <li className="is-size-5 ">03. Mobile Apps</li>
                                    </ul>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Internet of Things Development
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="is-navy is-size-5-desktop">
                                    I love building things that live on the internet, thats why when the world got to connect basic things to the world wide web, I got very excited.
                                    I decided to venture into this field and connect more devices to the net. With a small training in electronics development, I can build electronics devices from 
                                    building out the motherboard to writing code for the microcontroller and finally writing software for the server the device connects to to fetch or store data.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    
                    <div className="column is-one-quarter-desktop">
                    </div>
                </div>
                <br/>
                <div className="columns center">
                    <div className="column is-one-third-desktop"></div>
                    <div className="column is-one-third-desktop center">
                        <button className="button is-rounded sectionGreyBg is-large">
                            <p className="is-white-custom">Get in Touch</p>
                        </button>
                    </div>
                    <div className="column is-one-third-desktop"></div>
                </div>
		</section>
	</div>
);

export default Works;
