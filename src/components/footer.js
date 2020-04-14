import React from 'react'
import { FaTwitter, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'
import Bulma from '../images/bulma.png';
import Gatsby from '../images/gatsby.png';
import './style.scss'
import Emoji from './emoji'


const Footer = () => (
  <div>
    <section className="section is-family-code sectionNavy">
      <div className="container">
        <div className="columns center">
          <div className="column is-half-desktop">
            <p className="is-wht is-size-6-desktop has-text-centered">
              This website was handcrafted with plenty cups of{' '}
              <Emoji emoji='☕' />
            </p>
            <br/>
            <p className="is-wht is-size-6-desktop has-text-centered">
              By Alvin Kimani using:
            </p>
            <br/>

            <div className="columns center">
              <div className="column is-one-third-desktop is-two-fifths-mobile">
                <div className="columns is-multiline">
                  <div className="column">
                    <a href="https://bulma.io">
                      <img src={Bulma} alt="Bulma"/>
                    </a>
                  </div>
                  <div className="column">
                    <a href="https://www.gatsbyjs.org/">
                      <img src={Gatsby} alt="Gatsby"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <article className='media center'>
              <span className='icon'>
                <a href="https://twitter.com/kimmi_dev">
                  <FaTwitter size='fa-7x' color='white' />
                </a>
              </span>
              &nbsp;
              &nbsp;
              <span className='icon'>
                <a href="https://github.com/KimaniKabiria">
                  <FaGithub size='fa-7x' color='white' />
                </a>
              </span>
              &nbsp;
              &nbsp;
              <span className='icon'>
                <a href="https://www.facebook.com/kimanikabiria/">
                  <FaFacebook size='fa-7x' color='white' />
                </a>
              </span>
              &nbsp;
              &nbsp;
              <span className='icon'>
                <a href="https://www.instagram.com/kimani.kabiria/">
                  <FaInstagram size='fa-7x' color='white' />
                </a>
              </span>
            </article>
            <br/>
            <p className="is-wht is-size-5-desktop has-text-centered">
              &copy; KimmiDevs {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Footer
