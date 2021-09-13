import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import MessageIcon from '@material-ui/icons/Message';
import CallIcon from '@material-ui/icons/Call';
import CopyrightIcon from '@material-ui/icons/Copyright';
function Footer() {
    
    return (
        <section className="footer">
           <hr className="footer-separotor" />
        

               <section className= "footer-info"> 

                   <section className="footer-info-left">
                    <section className="footer-info_name">
                        <h5>University Of Malawi</h5>
                        <section className="footer-info_returns">
                        <h6> P.O Box 280</h6>
                            <h6>Zomba</h6>
                            <h6> Malawi, Central Africa.</h6>
                            <div className=" phoneicon">
                             <CallIcon /> <h6> 0152422 </h6>
                             </div>
                             <div className=" phoneicon">
                             <MessageIcon /> <h6> maintenance@cc.ac.mw </h6>
                             </div>
                            </section> 

                    </section>
                   </section>

                   <section className="footer-info-center">
                   <section className="footer-info_email">
                
                        Facility Maintenance
                        <section className="footer-info_returns">
                        Policy
                            <br /> 
                        
                            </section> 
                            </section>

                   </section>
                   
               
               <section className="footer-info-rigt">
                <section className= "footer-info_number">

                <div className= "header_support">
        
                 <Link className ="link" to ="/"> Support</Link>
                    </div>

                
                    <section className="footer-info_story">
                 
                      
                        
                    </section>
                </section>
               </section>
               </section>
              <div className = "downfooter"> 
              <h6>Copyright
                  <CopyrightIcon />2021 -All Rights Reserved - Unima
              </h6>
              <h6>Developed by Group 8 </h6>
              </div>
        </section>
    )
}

export default Footer