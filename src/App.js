import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Avatar from './components/Avatar';
import Stats from './components/Stats';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faBug, faServer, faSitemap } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faDatabase, faBug, faServer, faSitemap);

class App extends Component {
  render() {
    return (
      <div className="App d-flex justify-content-around mt-5">
        <Stats />
        <Avatar/>
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
