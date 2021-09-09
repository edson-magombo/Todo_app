import React from 'react'
import './App.css';
import { SliderData } from './component/SliderData';
import ImageSlider from "./component/ImageSlider"
import Header from './component/Header';
import Footer from "./component/Footer/Footer";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landingpage from './component/Landingpage';
import Inquiry from './component/Inquiry';

import { useStateValue } from './component/StateProvider';



function App(){
  const [{user}, setUser] = useStateValue('');
 

return (
    <div className="App">
      <Router>
         { !user ? (
           <Landingpage />
         ): (
           <> 
           
      <Header />
      <Switch>
      <Route exact path='/' render ={(props)=> <ImageSlider slides={SliderData} props = {props} />   } />
      {/* <Route exact path='/' render ={(props)=> <Footer props={props}  />   } /> */}
        <Route exact path ='/Inquiry' render={(props)=> <Inquiry props = {props}/> }/>
        {/* <Route exact path='/' render ={(props)=> <Footer props={props}  />   } /> */}
        
      </Switch>
      <Footer />
      </>
      )}
      </Router>
      

    </div>
  );
}

export default App;
