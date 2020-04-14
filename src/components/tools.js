import React from 'react';

import './style.scss';

import AndroidDev from '../images/android_dev.png';
import IoT from '../images/iot.png';
import Productivity from '../images/productivity.png';
import Ui from '../images/ui_ux.png';
import Frameworks from '../images/web_dev_frame.png';
import Languages from '../images/web_dev_lang.png';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
 
const AutoplaySlider = withAutoplay(AwesomeSlider);
 
const Slider = () => (
  <AutoplaySlider
    animation="foldOutAnimation"
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}
    buttons={false}
    bullets={false}
    organicArrows={false}
  >
    <div data-src={Languages} />
    <div data-src={Frameworks} />
    <div data-src={AndroidDev} />
    <div data-src={Ui} />
    <div data-src={IoT} />
    <div data-src={Productivity} />
  </AutoplaySlider>
);

const Tools = () => (
	<div>
		<section className="section is-family-code is-bold is-navy has-text-centered">
			<div className="container">
          <div className="columns center">
              <div className="column is-one-third-desktop">
                  <h1 className="is-navy is-size-3-desktop has-text-centered has-text-weight-bold">02. Tools I Use;</h1>
                  <p className="is-navy is-size-5-desktop has-text-centered">Here are some of the tech and tools I use to build my projects.</p>
              </div>
          </div>
          
          <Slider/>
			</div>
		</section>
	</div>
);

export default Tools;
