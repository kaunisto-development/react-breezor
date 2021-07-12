import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Content from './Components/Content/Content';

function App() {
  return (

    <Router>
      <div className='container'>
        <Navbar />
        <div className='wrapper'>
          <Switch>
            <Route>
              <Content />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>



  );
}

export default App;
