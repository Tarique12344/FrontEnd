import React, { Component } from 'react'
import axios from 'axios';
import '../Styles/addattractions.css'

 class Addattractions extends Component {
  constructor (props){
    super (props)
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeAttraction = this.onChangeAttraction.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      address: " ",
      attraction: " "
    }
  }
  onChangeAddress(e){
    this.setState({
      address: e.target.value
    })
  }
  onChangeAttraction(e){
    this.setState({
      attraction: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const addattractions ={
      address: this.state.address,
      attraction: this.state.attraction
    }
  console.log(addattractions)

  
  axios.post('http://localhost:5000/addattraction/add', addattractions)
  .then(res => console.log(res.data))
  .catch(err => console.log(err));

  }
  render() {
    return (
      <div className='form3'>
      <div className="container">
      <h1 className='form1'>AddAttractions</h1>
          <br />
         <form onSubmit={this.onSubmit} className='form2'>
       
           <label  className='text '>Address:</label>
           <input type="text" placeholder="Enter Address" value={this.state.address} onChange={this.onChangeAddress}/>
           <br />
           <br />
           <label  className='text'>Attraction:</label>
           <input type="text" placeholder="Enter Attraction" value={this.state.attraction} onChange={this.onChangeAttraction}/>
          <br />
          <br />
           <div className="container">
       <input type="checkbox" id="start" />
       <label >
         <input type="submit" value="send" />
       </label>
     </div>
 
     </form>
   </div>
   </div>
    )
  }
}
export default Addattractions;