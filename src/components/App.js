  import React , {useContext} from 'react';
import Topnav from './tinycomponents/topnav';
import Footer from './tinycomponents/footer';
import TopHeader from './tinycomponents/topheader';

import Women from './views/women';
import Men from './views/men';
import Contact from './views/contact';
import About from './views/about';

import Login from './views/login';
import Register from './views/register';



import MainHome from './views/home'


//importing contexts

import { LoginProvider } from '../logincontext';
import {SidebarProvider} from '../sidebarcontext';
import {DetailbarProvider} from '../detailbarcontext';
import {FemaleProvider , MaleProvider , ModelCarrierProvider} from '../modelcontext';





//importing react-router for navigation
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

//importing styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



import { StickyContainer, Sticky } from 'react-sticky';
import SidebarBag from './tinycomponents/sidebar';
import {Detailbar} from './tinycomponents/sidebar'

function App() {
  



  return (
   
    <Router>
   
      <SidebarProvider>
        <DetailbarProvider>
        <FemaleProvider>
      <MaleProvider >
        <ModelCarrierProvider>
      <LoginProvider>

      <TopHeader />
     
      <Topnav />
      <div >
        <Detailbar />
      <SidebarBag />
      </div>
      <div className="App">
        
     
      <Switch> 

        <Route  path={"/"} exact component={MainHome} />
        <Route  path={"/women"} exact component={Women} />
        <Route  path={"/men"} exact component={Men} />
        <Route  path={"/about"} exact component={About} />
        <Route  path={"/contact"} exact component={Contact} />
        <Route  path={"/login"} exact component={Login} />
        <Route  path={"/register"} exact component={Register} />
      </Switch>
    
  
      <Footer />
    
     
      </div>




      </LoginProvider>
      </ModelCarrierProvider>
      </MaleProvider>
      </FemaleProvider>
      </DetailbarProvider>
      </SidebarProvider>
     
    </Router>
  );
}

export default App;
