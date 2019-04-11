import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Avatar from './components/Avatar';
import Stats from './components/Stats';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faBug, faServer, faSitemap, faLaptopCode, faMobileAlt, faLaptop } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faDatabase, faBug, faServer, faSitemap, faLaptopCode, faMobileAlt, faLaptop);

class App extends Component {
  render() {
    return (
      <div className="App d-sm-flex d-lg-flex flex-sm-column flex-lg-row justify-content-lg-center align-items-sm-center mt-5">
      <Avatar/>
      <Stats /> 
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    stats: state.stats
  }
}

export default connect(mapStateToProps, null)(App);
