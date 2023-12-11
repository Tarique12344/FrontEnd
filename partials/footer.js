import React, { Component } from 'react'
import '../../Styles/footer.css';

 class Footer extends Component {
  render() {
    return (
        <footer>
        <h2 className='footer'>Cincinnati World Tour</h2>
        <p className='footer'>Welcome to the Cincinnati World Tour! A wonderful place to explore our attractions in Cincinnati. View our page and see what vacations or attractions fit you!</p>
        <h2 className="footer">Tyrese West</h2>
        <div className="footer-buttons-container justify-content-center">
        <a className="btn btn-dark btn-social  footer-buttons" href="https://www.facebook.com/profile.php?id=100085323807515" aria-label="Parveen Anand Facebook Profile">facebook<i className="fab fa-facebook-f social-buttons"></i></a>
        <br />
        <a className="btn btn-dark btn-social mx-2 footer-buttons" href="https://www.linkedin.com/in/tyrese-west-5b22361ab/ " aria-label="Parveen Anand LinkedIn Profile">LinkedIn<i class="fab fa-linkedin-in"></i></a>
        <br />
        <a className="btn btn-dark btn-social mx-2 footer-buttons" href="https://github.com/dashboard" aria-label="Parveen Anand Github Profile">Github<i class="fab fa-linkedin-in"></i></a>
        </div>
        <br />
        <h2 className="footer">Tarique El-Shamy</h2>
        <div className="footer-buttons-container justify-content-center">
        <a className="btn btn-dark btn-social mx-2 footer-buttons" href="!#" aria-label="Parveen Anand Facebook Profile footer-buttons">facebook<i class="fab fa-facebook-f"></i></a>
        <br />
        <a className="btn btn-dark btn-social mx-2 footer-buttons" href="https://www.linkedin.com/in/tarique-el-shamy-5b2ba9285/ " aria-label="Parveen Anand LinkedIn Profile">LinkedIn<i class="fab fa-linkedin-in"></i></a>
        <br />
        <a className="btn btn-dark btn-social mx-2 footer-buttons" href="https://github.com/" aria-label="Parveen Anand Github Profile">Github<i class="fab fa-linkedin-in"></i></a>
        </div>
        <br />
        &copy;
        <p className="footer"> Cincinnati World Tour | Brought to you by Tyrese and Tarique</p>
       </footer>
    )
  }
}
export default Footer
