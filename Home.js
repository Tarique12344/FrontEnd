import React, {Component} from 'react';
import '../pages/partials/Header';
import '../Styles/HomePage.css'
import '../pages/partials/footer';
import Weather from './weather';




//images section
import queencity from '../img/queencity.jpeg'
import paulbrownstadium from '../img/Paul-Brown-Stadium.jpg'

import findlaymarket from '../img/findlayMarket.jpg'
import americansign from '../img/americanSign.jpg'
import zooanimal from '../img/zooAnimal.jpg'
import reds from '../img/Reds.png'
import downtowncinci from '../img/downtownCinci.jpg'
import kingsisland from '../img/kingsisland.jpg'
import bangels from '../img/Bangels.png'
import fcc from '../img/FCC.png'
import cyclone from '../img/Cyclone.png'
import wall from '../img/wall.jpg'
import signamerican from '../img/sign-american.png'


class Home extends Component{
  
render(){
  
    return(
   
      <div onScroll={ this.handleScroll } id="homePage">
    
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active pciutr">
      <img src={queencity} class="d-block w-100 slideShow" id='homePage' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={paulbrownstadium} class="d-block w-100 slideShow" id='homePage'  alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={downtowncinci} class="d-block w-100 slideShow" id='homePage' alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={wall} class="d-block w-100 slideShow" id='homePage' alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={signamerican} class="d-block w-100 slideShow " id='homePage' alt="..."/>
    </div>
  </div>
 </div>
 <br />
 <br />
 
 
 {/* <h1 id="h1"> Activites in Cincinnati</h1>
 <div className="containter">
 <div className="row">
 <div className="cards-home col-md-3">
 <div className="card" >
  <img src={findlaymarket} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-Text">Findlay Market</h5>
    <p className="card-Text">Longtime hub of vendors selling meat, produce & other local foods, plus a seasonal farmers' market.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> 
  </div>
  </div>
  </div>
<div className="col-md-3">
 <div className="card ">
  <img src={americansign} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-Text">American Sign Museum</h5>
    <p className="card-Text">The American Sign Museum in Cincinnati, Ohio, preserves, archives, and displays a collection of signs.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> 
  </div>
  </div>
  </div>
  <div className="col-md-3">
 <div className="card ">
  <img src={zooanimal} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-Text"> the Cincinnati Zoo & Botanical Garden</h5>
    <p className="card-Text">Home to over 500 friendly creatures of all shapes and sizes, not to mention more than 3000 different varieties of local and imported plants.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  </div>
  <div className="col-md-3">
 <div className="card " >
  <img src={zooanimal} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-Text"> the Cincinnati Zoo & Botanical Garden</h5>
    <p className="card-Text">Home to over 500 friendly creatures of all shapes and sizes, not to mention more than 3000 different varieties of local and imported plants.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> 
  </div>
  </div>
  </div>
  </div>
</div>

  <h1 id="sports">Cincinnati sport teams</h1>
  <div className='cards-home'>
  <div className="card " style={{width: '18rem'}}>
  <img src={reds} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className="card-Text"> Cincinnati Reds</h3>
    <p className="card-Text">The Cincinnati Reds are an American professional baseball team based in Cincinnati. They compete in Major League Baseball as a member club of the National League Central division.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> 
  </div>
  </div>
  <div className="card " style={{width: '18rem'}}>
  <img src={reds} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className="card-Text"> Cincinnati Reds</h3>
    <p className="card-Text">The Cincinnati Reds are an American professional baseball team based in Cincinnati. They compete in Major League Baseball as a member club of the National League Central division.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  <div className="card " style={{width: '18rem'}}>
  <img src={reds} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className="card-Text"> Cincinnati Reds</h3>
    <p className="card-Text">The Cincinnati Reds are an American professional baseball team based in Cincinnati. They compete in Major League Baseball as a member club of the National League Central division.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> 
  </div>
  </div>
  </div> */}
      <h1 id='sports'>Activites in the city of Cincinnati</h1>
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="">
              <img src={findlaymarket} className=" pictures browns picture" alt="..." />
              <div className="card-body">
                <h5 className="card-Text" id='sports-text'>Findlay Market</h5>
                <p className="card-Text" id='sports-text'>
                Longtime hub of vendors selling meat, produce & other local foods, plus a seasonal farmers' market
                </p>
                {/* <a href="#" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <img src={americansign} className=" pictures browns picture" alt="..." />
              <div className="card-body">
               <h5 className="card-Text" id='sports-text'>American Sign Museum</h5>
                <p className="card-Text" id='sports-text'>
                The American Sign Museum in Cincinnati, Ohio, preserves, archives, and displays a collection of signs
                </p>
                
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <img src={zooanimal} className="pictures browns picture" alt="..." />
              <div className="card-body">
                <h5 className="card-Text" id="sports-text"> the Cincinnati Zoo & Botanical Garden</h5>
                <p className="card-Text" id='sports-text'>
                Home to over 500 friendly creatures of all shapes and sizes, not to mention more than 3000 different varieties of local and imported plants.
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="sports-cards">
              <img src={kingsisland} className=" pictures browns picture" alt="..."/>
              <div className="card-body">
                <h5 className="card-Text" id='sports-text'>Kings Island</h5>
                <p className="card-Text" id='sports-text'>
                Kings Island is a 364-acre amusement park located 24 miles northeast of Cincinnati in Mason, Ohio, United States. Owned and operated by Cedar Fair, the park was built by Taft Broadcasting and opened in 1972. 
                </p>
                
              </div>
            </div>
          </div>
        </div>
        </div>
        <br />
        <br />
        <br /> 
        <h1 id='sports'>Cincinnati Sports teams</h1>
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className=" sports-cards">
              <img src={reds} className=' reds picture'  id='sports-text' alt="..." />
              <div className="card-body">
                <h5 className="card-Text" id='sports-text'>Cincinnati Reds</h5>
                <p className="card-Text" id='sports-text'>
                The Cincinnati Reds are an American professional baseball team based in Cincinnati. They compete in Major League Baseball as a member club of the National League Central division
                </p>
                {/* <a href="#" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="sports-cards">
              <img src={bangels} className="picture browns " alt="..." />
              <div className="card-body">
                <h5 className="card-Text" id='sports-text'>The Bangels</h5>
                <p className="card-Text" id='sports-text'>
                The Cincinnati Bengals are a professional American football team based in Cincinnati. The Bengals compete in the National Football League as a member club of the league's American Football Conference North division.
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className=" sports-cards">
              <img src={fcc} className=" picture browns"  alt="..." />
              <div className="card-body">
                <h5 className="card-Text" id='sports-text'>FC Cincinnati</h5>
                <p className="card-Text" id='sports-text'>
                The Cincinnati Bengals are a professional American football team based in Cincinnati. The Bengals compete in the National Football League as a member club of the league's American Football Conference North division.
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className=" sports-cards">
              <img src={cyclone} className="picture browns" alt="..." />
              <div className="card-body">
                <h5 className="card-Text" id='sports-text'>Cincinnati Cyclone's</h5>
                <p className="card-Text" id='sports-text'>
                The Cincinnati Cyclones are a professional ice hockey team based in Cincinnati, Ohio. The team is a member of the ECHL. Originally established in 1990, the team first played their games in the Cincinnati Gardens and now play at Heritage Bank Center. 
                </p>
              
              </div>
            

   
    </div>
    <script src="./api.js"></script>
    
            </div>
          </div>
        </div>
    <Weather />
      </div>

  
 





  );
 } 
}
  
  export default Home;