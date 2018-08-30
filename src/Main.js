import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';

class Main extends Component {
  render () {
    return (
      <div style={{border: '2px solid green'}}>
        <h1 style={{color: 'green'}}>I am main</h1>
        <br/>
        Redux Props: {this.props.banana}
        <Post />
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    banana: reduxState.username
  }
}

export default connect(mapStateToProps)(Main);