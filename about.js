import React, { Component } from 'react'
import westside from '../img/westSide.jpg'
import bridge from '../img/Bridge.jpg'
import boat from '../img/Boat.jpg'
import '../Styles/about.css'

class About extends Component {
  render() {
    return (
        <div onScroll={ this.handleScroll } id="homePage">
    
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={westside} className="d-block w-100 slideShow" id='homePage' alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={bridge} className="d-block w-100 slideShow" id='homePage'  alt="..."/>
      </div>
      <div className="carousel-item">
      <img src={boat} className="d-block w-100 slideShow" id='HomePage' alt="..."/>
      </div>
    </div>
   </div>
   <div>
    <h1 className='about-header'>History Of Cincinnati</h1>
    <div>
        <p className='history-text'>Cincinnati is a city in and the county seat of Hamilton County, Ohio, United States.[10] Settled in 1788, the city is located at the northern side of the confluence of the Licking and Ohio rivers, the latter of which marks the state line with Kentucky. The city is the economic and cultural hub of the Cincinnati metropolitan area. With an estimated population of 2,265,051 it is Ohio's largest metropolitan area and the nation's 30th-largest, and with a city proper population of 309,317 Cincinnati is the third-most populous city in Ohio after Columbus and Cleveland, and 65th in the United States.</p>
    </div>
    <div>
        <h1 className='about-header'>About Cincinnati World Tour</h1>
        <div>
            <p className='history-text'> Our company is about helping people look for there vacation at cincinnati, We founded the company in 2010 a charity based company to help back the community. Our mission at Cincinnati World Tour is to manage travels for people all over the world and fulfill vacation dreams through our commitment to personalized, vacation services. 
            </p>
        </div>
    </div>
   </div>
</div>
    );
  }
}
export default About