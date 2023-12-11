// import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../Styles/attractions.css"


import westside from '../img/westSide.jpg'
import bridge from '../img/Bridge.jpg'
import boat from '../img/Boat.jpg'






const Attractions = props => (
  <div>
    <p>{props.attractions.title}</p>
    <p>{props.attractions.address}</p>
    <p>{props.attractions.description}</p>
    <p>{props.attractions.ratings}</p>
    {/* <td>
      <Link to={"/edit/"+props.attractions._id}>edit</Link> | <a href="/" onClick={() => { props.deleteAttractions(props.attractions._id) }}>delete</a>
    </td> */}
  </div>
)

 class AttractionsList extends Component {
  constructor(props) {
    super(props);

    // this.deleteAttractions = this.deleteAttractions.bind(this)

    this.state = {attractions: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/' + 'attractions/')
      .then(response => {
        this.setState({ attractions: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // deleteAttractions(id) {
  //   axios.delete('http://localhost:5000/' + 'attractions/'+id)
  //     .then(response => { console.log(response.data)});

  //   this.setState({
  //     attractions: this.state.attractions.filter(el => el._id !== id)
  //   })
  // }

  attractionsList() {
    return this.state.attractions.map(currentattractions => {
      return <Attractions attractions={currentattractions} key={currentattractions._id}/>;
    })
  }

  render() {
    return (
      <div>
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

        
        {/* <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Address</th>
              <th>Description</th>
              <th>ratings</th>
            </tr>
          </thead>
          <tbody>
            { this.attractionsList() }
          </tbody>
        </table> */}
        {/* <div className="attractionsContainer"> */}
        
       
                <div className='attractionsContainer'>
                <div class="card">
                <div class="container">
                <div className='attractionscard'>
                    <div className='attractionsInnerContainer'></div>
                 
                  
                    </div>
                </div>
                {this.attractionsList()}
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    
  
    );
    
  }
 }

export default AttractionsList