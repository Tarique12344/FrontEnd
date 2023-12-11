import React, { Component } from 'react';
import '../pages/partials/Header';
import '../pages/partials/footer';
import axios from 'axios';
import '../Styles/contact.css'



//imgs
import queencity from '../img/queencity.jpeg'
import paulbrownstadium from '../img/Paul-Brown-Stadium.jpg'
import downtowncinci from '../img/downtownCinci.jpg'
import garden from '../img/Garden.webp'
import market from '../img/Market.jpg'







class Contact extends Component {
    constructor (props){
      super(props)
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      // this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
      this.onChangeQuestion = this.onChangeQuestion.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
          name: " ",
          email: " ",
          // PhoneNumber: " ",
          question: " ",
        }
      }
    
      onChangeName(e){
        this.setState({
          name: e.target.value
        })
      }
      onChangeEmail(e){
        this.setState({
          email: e.target.value
        })
      }
      // onChangePhoneNumber(e){
      //   this.setState({
      //     phonenumber: e.target.value
      //   })
      // }
      onChangeQuestion(e){
        this.setState({
          question: e.target.value
        })
      }
      onSubmit(e){
        e.preventDefault();
        const contact ={
          name: this.state.name,
          email: this.state.email,
          // phonenumber: this.state.phonenumber,
          qustion: this.state.question,
        }
      console.log(contact)
  
      
      axios.post('http://localhost:5000/contact/add', contact)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

      }
      render(){
        return(
          <div onScroll={ this.handleScroll } id="homePage">
    
          <div id="carouselExample SlidesOnly" className="carousel" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={queencity} class="d-block w-100 slideShow" id='homePage' alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={paulbrownstadium} class="d-block w-100 slideShow" id='homePage'  alt="..."/>
        </div>
        <div className="carousel-item">
        <img src={downtowncinci} class="d-block w-100 slideShow" id='HomePage' alt="..."/>
        </div>
        <div className="carousel-item">
        <img src={garden} class="d-block w-100 slideShow" id='HomePage' alt="..."/>
        </div>
        <div className="carousel-item">
        <img src={market} class="d-block w-100 slideShow" id='HomePage' alt="..."/>
        </div>
      </div>
     </div>
        {/* button section */}
     <div className="container">
     {/* <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="css/styles.css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossorigin="anonymous"
    />
  </head> */}
        <form onSubmit={this.onSubmit}>
      
          <label  className='text '>Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your  first name.." value={this.state.name} onChange={this.onChangeName}/>
      
          {/* <label className='text'>Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/> */}
          
          <label  className='text'>Email</label>
          <input type="text" id="lname" name="lastname" placeholder="Your email here.." value={this.state.email} onChange={this.onChangeEmail}/>
          
        
      
          <label  className="text">Questions or comments</label>
          <textarea id="subject" name="subject" placeholder="Write something.." value={this.state.question} onChange={this.onChangeQuestion}></textarea>

          
          <div className="container">
      <input type="checkbox" id="start" />
      <label >
        <input type="submit" value="send" />
      </label>
    </div>

    </form>
  </div>
</div>

      
      
    );
  }
 
}
    

export default Contact;