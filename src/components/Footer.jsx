import React from 'react'
import '../style/footer.css'
import btn_str from '../image/btn_str.png'
import logo from '../image/footerLogo.png'
import log1 from '../image/Twitter - Negative.png'
import log2 from '../image/Discord - Negative.png'


function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer_content">
          <h6>Have a project in mind?</h6>
          <h3>Let’s create something awesome.</h3>
          <button>Apply for grant <img src={btn_str} alt="" /></button>
        </div>
        <div className="footer_wrapper">
          <ul>
            <img src={logo} alt="" />
            <li>About</li>
            <li>FAQ</li>
            <li>Brand assets</li>
            <li>dYdX Foundation <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" stroke="#C8C7D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 2H14V6" stroke="#C8C7D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.66699 9.33333L14.0003 2" stroke="#C8C7D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></li>
            <li>dYdX trading<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" stroke="#C8C7D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 2H14V6" stroke="#C8C7D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.66699 9.33333L14.0003 2" stroke="#C8C7D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></li>
          </ul>
          <div className="footer_icon">
            <img src={log1} alt="" />
            <img src={log2} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
