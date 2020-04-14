import React from 'react';

import './style.scss';

const Contact =() =>(
    <div>
        <section className="section is-family-code">
            <div className="container">			
                <div className="columns center">
                    <div className="column is-one-third-desktop">
                        <h1 className="is-size-3-desktop has-text-centered has-text-weight-bold is-navy">05. What's next?</h1>
                        <br/>
                    </div>
                </div>

                <div className="columns abtCol center">
                    <div className="column is-one-fifth-desktop"></div>
                    <div className="column">
                        <div className="columns">
                            <div className="column">
                                <h1 className="is-size-1 has-text-centered has-text-weight-bold is-navy">Get In Touch:</h1>
                                <p className="is-size-5 has-text-centered is-navy">
                                    Hello there, are you interested in my services, My inbox
                                    always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!
                                </p>
                            </div>
                        </div>
                        <div className="columns center">
                            <div className="column is-one-third-desktop"></div>
                            <div className="column is-one-third-desktop center">
                                <a href={`mailto:kabiriakimani@gmail.com`}>
                                    <button className="button is-large">
                                        <p className="is-navy">Say Hello</p>
                                    </button>
                                </a>
                            </div>
                            <div className="column is-one-third-desktop"></div>
                        </div>
                    </div>
                    <div className="column is-one-fifth-desktop"></div>
                </div>
            </div>
        </section>
    </div>
);

export default Contact;