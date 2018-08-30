import React, { Component } from 'react';
// #6 Import connect
import { connect } from 'react-redux';

// #12 Import the action builders you want to use in this component
import { changeUsername, changeAge } from './ducks/reducer';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0
    }
    this.doAThing = this.doAThing.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  doAThing() {
    // #15 Axios requests with Redux
    // This is not a functional axios request!!!
    // Psudo code of how to use axios with a Redux action builder
    // axios.get('/api/thing').then(res => {
    //   this.props.changeUsername(res.data.name)
    // })
  }
  updateUser() {
    // #14 Invoke the action builders off of props to update Redux state
    this.props.changeUsername(this.state.name);
    this.props.changeAge(this.state.age);
  }
  render() {
    return (
      <div style={{border: '2px solid pink'}}>
        <h1 style={{color: 'pink'}}>I am the nav</h1>
        <br/>
        Regular Props: {this.props.regularProps}
        <br/>
        {/* #9 Here you can see the data that mapStateToProps added to the props object */}
        Redux Props: {this.props.reduxPropsName}, {this.props.reduxPropsAge}
        <br/>
        Name: <input onChange={e => this.setState({ name: e.target.value })} />
        Age: <input onChange={e => this.setState({ age: e.target.value })} />
        <button onClick={this.updateUser}>Update</button>
      </div>
    )
  }
}
// #7 Write the mapStateToProps function
// This function takes in the reduxState and returns an object
// The properties of that object are added to props
function mapStateToProps(reduxState) {
  return {
    reduxPropsName: reduxState.username,
    reduxPropsAge: reduxState.age
  }
}

// #8 mapStateToProps needs to be passed into connect in order to actually work
// #13 An object with the action builders needs to be passed into connect
// Otherwise the functions won't be put onto props and won't be connected to Redux 
export default connect(mapStateToProps, { changeUsername, changeAge })(Nav);