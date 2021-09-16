import React from 'react'
import './Showcase.css'

function Showcase() {
    return (
        <div className="services-list">
              <h1>What we offer</h1>
              
              <div className="flex">
                  <div><img className="images" src="/electricity.jpg" alt="" />
                  </div>
                <div>
              <h4>Electricity fixes</h4>
              <p>We fix problems to do with electric outlets.Examples include sockets that are not working, bulbs that are not giving light,  </p>
              </div>
              </div>
              <hr/>
              <div className="flex">
                  <div>
              <img className="images" src="/plumbing.jpg" alt="" />
              </div>
              <div>
              <h4>Plumbing</h4>
              <p>Are the pipes leaking? is any water otlet clogged? Is there any problem with the gizers? report port for maintainace </p>
              </div>
              </div>
              <hr/>
              <div className="flex">
                  <div>
              <img className="images" src="/building.jpg" alt="" />
              </div>
              <div>              
                <h4>Building</h4>
              <p> All issues to do with the infrastructure are also taken care of by our department.these include any cracks on walls that are aking you uncomfotable, brocken walls </p>
              </div>
              </div>
              <hr/>
              <div className="flex">
              <div>
              <img className="images" src="/carpentry.jpg" alt="" />
              </div>
              <div>
              <h4>Carpentry</h4>
              <p>Maintanance issues that involve wood can also be adressed by this department. These include doors,capboards, drawers</p>
              </div>
              </div>
              {/* <hr/> */}
              {/* <div className="flex">
                <div>
              <img className="images" src="/cleaning.jpg" alt="" />
              </div>
              <div>
              <h4>Cleaning</h4>
              <p> Are some places not clean or tidy? contact us   </p>
              </div> 
              
              </div> */}
            </div>
          
            
        
    )
}

export default Showcase
