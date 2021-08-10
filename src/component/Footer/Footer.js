import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
function Footer() {
    
    return (
        <section className="footer">
           <hr className="footer-separotor" />
           <section className ="facebook">
               
              <a href= "/" target="_blank" rel="noopener nonreferrer"><FacebookIcon /></a> 
               </section> 

               <section className= "footer-info"> 

                   <section className="footer-info-left">
                    <section className="footer-info_name">
                        WE REPAIR
                        <section className="footer-info_returns">
                            returns Policy
                            <br /> 
                            Delivery
                            </section> 
                    </section>
                   </section>

                   <section className="footer-info-center">
                   <section className="footer-info_email">
                
                        maintenance.cc.ac.mw
                        <section className="footer-info_returns">
                            returns Policy
                            <br /> 
                            Delivery
                            </section> 
                            </section>

                   </section>
                   
               
               <section className="footer-info-right">
                <section className= "footer-info_number">
                    Hotline +265 09999
                    <section className="footer-info_story">
                        My story
                        <br />
                        uhuh
                    </section>
                </section>
               </section>
               </section>
              
        </section>
    )
}

export default Footer