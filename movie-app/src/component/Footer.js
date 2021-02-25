import React from 'react';
import '../Footer.css'


const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <div>
            <div className="titlefoot">
              <h1 className="title4">Couch </h1>
              <h1 className="title5">Sloth</h1>
              <h1 className="title4"> Movie App</h1>
            </div>
            <br></br>
            <div className="social">            
              <a href="http://www.facebook.com/sharer.php?u=http://www.google.com">
              Share on <ion-icon name="logo-facebook"></ion-icon></a>
                
              <a href="http://twitter.com/share?text=An%20Awesome%20Link&url=http://www.google.com">
              Share on <ion-icon name="logo-twitter"></ion-icon></a>
              <div className="logoFoot">
              </div>    
            </div>
          </div>
       </footer>
    </div>
  )
}

export default Footer;