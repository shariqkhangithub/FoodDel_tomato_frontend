import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
function Footer() {
  return (
    <div id='footer' className='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat adipisci accusamus blanditiis accusantium tempora eaque quasi. Laudantium provident velit reiciendis ipsum rerum, laboriosam exercitationem sed, voluptatibus impedit perspiciatis blanditiis quis!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    
                    <img src={assets.twitter_icon} alt="" />
                    
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+92-23-456-789</li>
                    <li>dummy@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">CopyRight 2024 @ Tomato.com All Rights Reserved</p>
    </div>
  )
}

export default Footer