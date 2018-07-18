import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username : [
      {user:'Arjun'}
    ]
  }

  usernameChangeHandler = (newName) =>{
    this.setState({
      username : [
        {user:newName}
      ]
    });
  }

  InputHandler = (event) =>{
    this.setState({
      username : [
        {user: event.target.value}
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <UserOutput />
        <UserOutput
          username= {this.state.username[0].user}
          click={this.usernameChangeHandler.bind(this, 'Arjun Veadk')} />
        <UserInput username={this.state.username[0].user} changed={this.InputHandler}/>
      </div>
    );
  }
}

export default App;
