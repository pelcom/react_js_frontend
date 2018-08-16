import React, { Component } from 'react';
import Main from './components/Main';

/**
 * Component is exported for conditional usage in Root.js
 */
class Root extends Component {
  render() {
    return (
        <div>
          <Main />
        </div>
    );
  }
};


export default Root