import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import "./index.css"
import 'bootstrap/dist/css/bootstrap.css';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';




const footerProps = {
  website:'http://geappliances.co',
  company:'GEAppliances',
  year:2019
};

export class App extends Component {
  state = { books: [] } ;

  
  render(){
    return(
        <div className="container"> 
          <AppHeader  title="Book List App - v1.0" subheading="Created By AdvancedTech"/>
          <AppContent />
          <AppFooter  {...footerProps}/>
       </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));



