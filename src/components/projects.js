import React from 'react';

import Folder from '../images/folder.png';
import Github from '../images/github.png';
import Bitbucket from '../images/bitbucket.png';
import Linked from '../images/link.png'

import './style.scss';


const Projects = () =>{

    return (
        <div>
            <section className="section is-family-code">
                <div className="container">
                    <div className="columns center">
                        <div className="column is-one-third-desktop">
                            <h1 className="is-size-3-desktop has-text-centered has-text-weight-bold is-navy">04. What have I built?</h1>
                            <p className="is-navy is-size-5-desktop has-text-centered">Here are some of the things that I have built or working on.</p>
                            <br/>
                        </div>
                    </div>
                    <div className="columns center">
                        <div className="column">
                            <div className="columns is-multiline center">

                                <div className="column is-one-third">
                                    <div class="card sectionNavy has-text-white cardRound">
                                        <div class="card-content">
                                            <div className="columns">
                                                <div className="column is-one-third">                                        
                                                    <img className="image is-64x64" src={Folder} alt="GeekDesk"/>
                                                </div>
                                                <div className="column is-one-fifth"> 
                                                        <a
                                                        href="#">                                        
                                                        <img className="image is-24x24" src={Linked} alt="GeekDesk"/>
                                                        </a>
                                                </div>
                                                <div className="column is-one-fifth">
                                                        <a
                                                        href="https://github.com/KimaniKabiria/laracraft">                                        
                                                        <img className="image is-24x24" src={Github} alt="GeekDesk"/>
                                                        </a>
                                                </div>
                                            </div>
                                            <p class="title is-wht is-4 has-text-weight-bold">
                                            Laracraft
                                            </p>
                                            <p class="subtitle is-6 is-wht">
                                            Laracraft is a laravel bases start up kit CMS. It can be used by
                                            developers who need to build a laravel based blog. I has all the CMS
                                            features like wordpress but better built to suite creativity not 
                                            as a web building tool.
                                            </p>
                                        </div>
                                        <footer class="card-footer">
                                            <p class="card-footer-item">
                                                Laravel PHP - VueJS - MySQL - Bulma
                                            </p>
                                        </footer>
                                    </div>
                                </div>

                                <div className="column is-one-third">
                                    <div class="card sectionNavy has-text-white cardRound">
                                        <div class="card-content">
                                            <div className="columns">
                                                <div className="column is-one-third">                                        
                                                    <img className="image is-64x64" src={Folder} alt="GeekDesk"/>
                                                </div>
                                                <div className="column is-one-fifth"> 
                                                        <a
                                                        href="http://kazipal.herokuapp.com/">                                        
                                                        <img className="image is-24x24" src={Linked} alt="GeekDesk"/>
                                                        </a>
                                                </div>
                                            </div>
                                            <p class="title is-wht is-4 has-text-weight-bold">
                                            Kazipal Demo
                                            </p>
                                            <p class="subtitle is-6 is-wht">
                                            This is a demo website for prove of concept for the kazipal platform. 
                                            I built with laravel php since its the fastest way I could come up 
                                            with a working demo in limited time. The main platform is being 
                                            built using django python, graphQl and VueJS.
                                            </p>
                                        </div>
                                        <footer class="card-footer">
                                            <p class="card-footer-item">
                                                Laravel PHP - VueJS - MySQL - Bulma
                                            </p>
                                        </footer>
                                    </div>
                                </div>

                                

                                <div className="column is-one-third">
                                    <div class="card sectionNavy has-text-white cardRound">
                                        <div class="card-content">
                                            <div className="columns">
                                                <div className="column is-one-third">                                        
                                                    <img className="image is-64x64" src={Folder} alt="GeekDesk"/>
                                                </div>
                                            </div>
                                            <p class="title is-wht is-4 has-text-weight-bold">
                                            Kazipal API
                                            </p>
                                            <p class="subtitle is-6 is-wht">
                                            This is a GraphQL API I built for Kazipal to enable their
                                            seameless data flow in all their paltforms (Android, iOS & Web App).
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            </p>
                                        </div>
                                        <footer class="card-footer">
                                            <p class="card-footer-item">
                                                Django - Postgre DB - GraphQL
                                            </p>
                                        </footer>
                                    </div>
                                </div>


                                <div className="column is-one-third">
                                    <div class="card sectionNavy has-text-white cardRound">
                                        <div class="card-content">
                                            <div className="columns">
                                                <div className="column is-one-third">                                        
                                                    <img className="image is-64x64" src={Folder} alt="GeekDesk"/>
                                                </div>
                                                <div className="column is-one-fifth"> 
                                                        <a
                                                        href="http://kimmidevs.com">                                        
                                                        <img className="image is-24x24" src={Linked} alt="GeekDesk"/>
                                                        </a>
                                                </div>
                                                <div className="column is-one-fifth">
                                                        <a
                                                        href="https://github.com/KimaniKabiria/kimmidev">                                        
                                                        <img className="image is-24x24" src={Github} alt="GeekDesk"/>
                                                        </a>
                                                </div>
                                            </div>
                                            <p class="title is-wht is-4 has-text-weight-bold">
                                            My Website Portfolio
                                            </p>
                                            <p class="subtitle is-6 is-wht">
                                            This is the website you are seeing right now.
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            </p>
                                        </div>
                                        <footer class="card-footer">
                                            <p class="card-footer-item">
                                                Gatsby Js - Bulma
                                            </p>
                                        </footer>
                                    </div>
                                </div>


                                <div className="column is-one-third">
                                    <div class="card sectionNavy has-text-white cardRound">
                                        <div class="card-content">
                                            <div className="columns">
                                                <div className="column is-one-third">                                        
                                                    <img className="image is-64x64" src={Folder} alt="GeekDesk"/>
                                                </div>
                                                <div className="column is-one-fifth"> 
                                                        <a
                                                        href="http://ifixphones.co.ke">                                        
                                                        <img className="image is-24x24" src={Linked} alt="GeekDesk"/>
                                                        </a>
                                                </div>
                                            </div>
                                            <p class="title is-wht is-4 has-text-weight-bold">
                                            IfixPhones
                                            </p>
                                            <p class="subtitle is-6 is-wht">
                                            A laravel based website for a phone repair company.
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            </p>
                                        </div>
                                        <footer class="card-footer">
                                            <p class="card-footer-item">
                                                Laravel PHP - VueJS - Bulma
                                            </p>
                                        </footer>
                                    </div>
                                </div>


                                <div className="column is-one-third">
                                    <div class="card sectionNavy has-text-white cardRound">
                                        <div class="card-content">
                                            <div className="columns">
                                                <div className="column is-one-third">                                        
                                                    <img className="image is-64x64" src={Folder} alt="GeekDesk"/>
                                                </div>
                                                <div className="column is-one-fifth"> 
                                                        <a
                                                        href="http://corazonenergy.co.ke">                                        
                                                        <img className="image is-24x24" src={Linked} alt="GeekDesk"/>
                                                        </a>
                                                </div>
                                            </div>
                                            <p class="title is-wht is-4 has-text-weight-bold">
                                            Corazon Energy
                                            </p>
                                            <p class="subtitle is-6 is-wht">
                                            A business company portfolio for a solar installation company.
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            </p>
                                        </div>
                                        <footer class="card-footer">
                                            <p class="card-footer-item">
                                                Wordpress
                                            </p>
                                        </footer>
                                    </div>
                                </div>


                                <div className="column is-one-third">
                                    <div class="card sectionNavy has-text-white cardRound">
                                        <div class="card-content">
                                            <div className="columns">
                                                <div className="column is-one-third">                                        
                                                    <img className="image is-64x64" src={Folder} alt="GeekDesk"/>
                                                </div>
                                                <div className="column is-one-fifth">
                                                        <a
                                                        href="https://github.com/KimaniKabiria/The-WiCH-V1">                                        
                                                        <img className="image is-24x24" src={Github} alt="GeekDesk"/>
                                                        </a>
                                                </div>
                                            </div>
                                            <p class="title is-wht is-4 has-text-weight-bold">
                                            The WiCH Software
                                            </p>
                                            <p class="subtitle is-6 is-wht">
                                            This is the souce code for building a wireless controlled
                                            electrical switch. This projects can be built out using an
                                            ESP8266 microcontroller.
                                            <br/>
                                            <br/>
                                            <br/>
                                            </p>
                                        </div>
                                        <footer class="card-footer">
                                            <p class="card-footer-item">
                                                C++
                                            </p>
                                        </footer>
                                    </div>
                                </div>


                                <div className="column is-one-third">
                                    <div class="card sectionNavy has-text-white cardRound">
                                        <div class="card-content">
                                            <div className="columns">
                                                <div className="column is-one-third">                                        
                                                    <img className="image is-64x64" src={Folder} alt="GeekDesk"/>
                                                </div>
                                                <div className="column is-one-fifth">
                                                        <a
                                                        href="https://github.com/KimaniKabiria/WiiMax-V4">                                        
                                                        <img className="image is-24x24" src={Github} alt="GeekDesk"/>
                                                        </a>
                                                </div>
                                            </div>
                                            <p class="title is-wht is-4 has-text-weight-bold">
                                            The WiiMax Source Code
                                            </p>
                                            <p class="subtitle is-6 is-wht">
                                            This is the souce code for building a wireless controlled
                                            LED Matrix scroll board. The project can be built using 
                                            ESP8266
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            </p>
                                        </div>
                                        <footer class="card-footer">
                                            <p class="card-footer-item">
                                                C++
                                            </p>
                                        </footer>
                                    </div>
                                </div>


                                <div className="column is-one-third">
                                    <div class="card sectionNavy has-text-white cardRound">
                                        <div class="card-content">
                                            <div className="columns">
                                                <div className="column is-one-third">                                        
                                                    <img className="image is-64x64" src={Folder} alt="GeekDesk"/>
                                                </div>
                                                <div className="column is-one-fifth">
                                                        <a
                                                        href="https://github.com/KimaniKabiria/WiiMax-APP">                                        
                                                        <img className="image is-24x24" src={Github} alt="GeekDesk"/>
                                                        </a>
                                                </div>
                                            </div>
                                            <p class="title is-wht is-4 has-text-weight-bold">
                                            The WiiMax Android App
                                            </p>
                                            <p class="subtitle is-6 is-wht">
                                            This is the souce code for an Android app to be used to send
                                            text data to the WiiMatx LED Scroll board. The app communucates
                                            with the LED board's web server to sent POST requests with the
                                            desired message.
                                            <br/>
                                            <br/>
                                            </p>
                                        </div>
                                        <footer class="card-footer">
                                            <p class="card-footer-item">
                                                C++
                                            </p>
                                        </footer>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <br/>
                    
                    <div className="columns center">
                        <div className="column is-one-third-desktop"></div>
                        <div className="column is-one-third-desktop center">
                            <a href="https://github.com/KimaniKabiria">
                                <button className="button is-rounded sectionGreyBg is-large">
                                    <p className="is-wht">More Projects</p>
                                </button>
                            </a>
                        </div>
                        <div className="column is-one-third-desktop"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;