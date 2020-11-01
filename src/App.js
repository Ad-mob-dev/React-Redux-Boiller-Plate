import React  from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {changeName} from '../src/store/actions/actions'



class App extends React.Component{
  constructor(props){
    super(props);
  }


render(){
  
  return(
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        { `${this.props.state.name} ${this.props.state.fatherName}`}
      </p>      
      <button onClick={()=> {this.props.change()}}>Change</button> 
      </header>
      {console.log(this.props)}
  </div>

  )
  }

}

function mapStateToProp(state){
  return ({
    state,
  });
}

function mapDispatchToProp(dispatch) {
  return ({
      change: () => { dispatch(changeName()) },
  })
}

export default connect(mapStateToProp,mapDispatchToProp)(App);
