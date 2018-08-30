import React, { Component } from 'react';
// #4 Import the provider and the store
import { Provider } from 'react-redux';
import myStore from './ducks/store';

import Nav from './Nav';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'mary',
      age: 9
    }
  }
  render() {
    return (
      // #5 Wrap your application (including your HashRouter) in the provider, and pass it the store
      <Provider store={myStore}>
        <div className="App">
          <h1>Welcome to Redux! The steps for set up are numbered in the code. Search for 'START HERE' and go from there</h1>
          <Nav
            regularProps={this.state.name} />
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
