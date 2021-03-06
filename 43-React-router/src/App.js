import React from 'react';
// import Nav from './NavBar'
import 'semantic-ui-css/semantic.min.css';

import NavBar from './NavBar'
import {PaintingsDisplay} from './PaintingsDisplay'
import PaintingForm from './PaintingForm';
import paintings from './paintings'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import PaintingInfo from './PaintingInfo'


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      testNew: "testnew",
      test: "test",
      form: false,
      paintings: paintings //value is imported paintings
    }
  }

  // state = {
  //   test: "test"
  // }

  //create a function
  changeState = () => {
    this.setState({
      testNew: "changing value"
    }, () => console.log(this.state.testNew) )
    console.log(this.state.testNew) //previous value
  }

  toggleForm = () => {
    this.setState({
      form: !this.state.form
    })
  }

  addPainting = (e) => {
    // debugger
    e.preventDefault()

    let newPainting = {
      title: e.target[0].value,
      image: e.target[1].value,
      artist: {
        name: e.target[2].value
      }
    }

    this.setState({
      paintings: [...this.state.paintings, newPainting],
      form: !this.state.form
    })

  }


  render(){
    // console.log(this.state.test)
    // console.log(this.state.testNew)

    // NEVER DO THIS
    // this.setState({
    //   test: "something!!"
    // }) 

  return (
    <BrowserRouter>
     <div>
      {/* App component */}
      {/* <h3>{this.state.testNew}</h3>
      <button onClick={() => this.changeState()}>change</button> */}
      <NavBar/>
      {/* <button onClick={this.toggleForm}>Display/Hide form</button>
      {
        this.state.form
        ? <PaintingForm addPainting={this.addPainting}/> //true
        : <PaintingsDisplay paintings={this.state.paintings} /> //false
      } */}

      {/* <Route path="/paintings" component={PaintingsDisplay}/> {//passing no props} */}
      
      <Switch>

        <Route exact path="/paintings" render={(routerProps) => <PaintingsDisplay {...routerProps} paintings={this.state.paintings} /> }/>
        {/* <Route path="/paintings/new" component={PaintingForm} /> */}
        <Route path="/paintings/new" render={(routerProps) => <PaintingForm {...routerProps} addPainting={this.addPainting}/>} />

        <Route path="/paintings/:id" component={PaintingInfo}/> 
      
      </Switch>
 
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
