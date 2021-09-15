import React, {useState, useEffect } from 'react';
import "./About.css";
import Post from "./Post" 
import  db   from "../firebase";


function About() {
   

return (
      
        <div className="about">

            <div><br/>
              <strong><h1>About Us</h1></strong><hr/>
              
              <p className="para">
                Online Maintenance System is the best platform designed to assists students and staff members to 
                enquire some issues needed to be repaired.
                </p>
                 <p className="para">
                  This platform support both students and staff members to make queries whereby the Maintenance team responds with imediate effect
            
              </p><br/><br/>
                <h2>Our Main Goal</h2>
               <p className="para">
                 The platform aim at simplifying the whole process of report issues to the Maintenance department whereby staffs and students have to do it online.
               </p>
               <p className="para">
                 The Maintenance team keeps on checking whether the issues are reported so that they can respond with immediate help by assigning duties among themselves
               </p><br/><br/>
               <div className="details">
               <div>
                <h2>Contact details and Location</h2>
               <p className="para">Maintenance@gmail.com</p>
               <p className="para">+265 000 00000 00000</p><br/><br/>
               </div>
               <div className="design">
               <h2>Design Team</h2>
               <p className="para">Emma Limbe</p>
               <p className="para">Fred Likaka</p>
               <p className="para">Edson Magombo</p>
               <p className="para">Clement Thulawena</p>
               </div>
               </div>

            </div><br/><br/>

            











          </div>
    )
}

export default About;
   