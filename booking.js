import React, { Component } from "react";
import axios from 'axios';
import './partials/footer'
import './partials/Header'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Styles/booking.css'

//img
import queencity from '../img/queencity.jpeg'
import paulbrownstadium from '../img/Paul-Brown-Stadium.jpg'
import wall from '../img/wall.jpg'
import signamerican from '../img/sign-american.png'
import downtown from '../img/downtownCinci.jpg'




class Booking extends Component {
    constructor (props){
        super(props)
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeBookingComment = this.onChangeBookingComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            firstname: " ",
            lastname: " ",
            email: " ",
            phonenumber: " ",
            date: new Date(),
            bookingcomment: " "
          }
        }
        onChangeFirstName(e){
            this.setState({
              firstname: e.target.value
            })
          }
          onChangeLastName(e){
            this.setState({
              lastname: e.target.value
            })
          }
          onChangeEmail(e){
            this.setState({
              email: e.target.value
            })
          }
          onChangePhoneNumber(e){
            this.setState({
              phonenumber: e.target.value
            })
          }
          onChangeDate(date){
            this.setState({
              date: date
            })
          }
          onChangeBookingComment(e){
            this.setState({
              bookingcomment: e.target.value
            })
          }
          onSubmit(e){
            e.preventDefault();
            const booking ={
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              email: this.state.email,
              phonenumber: this.state.phonenumber,
              date: this.state.date,
              bookingcomment: this.state.bookingcomment
            }
            console.log(booking)
            axios.post('http://localhost:5000/booking/add', booking)
            .then(res=>console.log(res.data))
            .catch(err => console.log(err));
   
         
            //this.setState({ showAlert: true }); // set showAlert to true after form submission
            // window.location="/"
            // this.props.history.push('/booking');
            
            this.setState({
                firstname: '',
                lastname: '',
                email: '',
                phonenumber: '',
                date: '',
                bookingcomment: ''
            })
            // window.alert("Your trip has has been booked! We'll contact you soon to confirm the details.")
            console.log(booking)
          
}
          
  render() {
    return (

      <div onScroll={ this.handleScroll } id="homePage">
    
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={queencity} class="d-block w-100 slideShow" id='homePage' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={paulbrownstadium} class="d-block w-100 slideShow" id='homePage'  alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={downtown} class="d-block w-100 slideShow" id='homePage' alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={wall} class="d-block w-100 slideShow" id='homePage' alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={signamerican} class="d-block w-100 slideShow" id='homePage' alt="..."/>
    </div>
  </div>
 </div>

   <div className='container'>
        <form onSubmit={this.onSubmit} style={{width: '100%'}}>
         <div className="form-group">
            <label className='text' style={{width: '100%'}}>First Name:
                <input type="text" value={this.state.firstname} onChange={this.onChangeFirstName} className="form-control" />
            </label>
            </div>
<div className="form-group">
            <label className='text' style={{width: '100%'}}>Last Name: 
                <input type="text" value={this.state.lastname} onChange={this.onChangeLastName} className="form-control" />
            </label></div>
            <div className="form-group">
            <label className='text' style={{width: '100%'}}>Email Address:
                <input type="text" value={this.state.emailaddress} onChange={this.onChangeEmail} className="form-control"  />
            </label></div>
            <div className="form-group">
            <label className='text' style={{width: '100%'}}>Phone Number:
                <input type="text" value={this.state.phonenumber} onChange={this.onChangePhoneNumber} className="form-control" />
            </label></div>
            {/* <label>Date:
                <input type="text" value={this.state.date} onChange={this.onChangeDate}/>
            </label> */}
           <div className="form-group" style={{width: '100%'}}>

            <DatePicker label="Date" selected={this.state.date} onChange={this.onChangeDate} className="form-control" /></div>
            <div className="form-group">
            <label className='text'  style={{width: '100%'}}>Comments:
                <input type="text" value={this.state.bookingcomment} onChange={this.onChangeBookingComment} className="form-control"/>
            </label></div>
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
export default Booking;