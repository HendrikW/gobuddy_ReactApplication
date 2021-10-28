import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Homepage from "./components/index/Homepage"
import SignupBuddy from "./components/auth/SignupBuddy"
import SignupTiger from "./components/auth/SignupTiger"
import Login from "./components/auth/Login"
import BuddyView from './components/auth/views/Buddy/BuddyView';
import TigerView from './components/auth/views/Tiger/TigerView';
import TigerDetails from './components/auth/views/Buddy/TigerDetails';
import Footer from './components/index/Footer'
import AboutUs from './components/index/AboutUs'


class App extends React.Component {

  state = {
    currentUser: this.props.user
  }

  updateTheUser = (userObj) => {
    this.setState({
      currentUser: userObj
    })
  }

  render() {

    return (
      <div className="App">

        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route exact path='/signup/buddy' render={() => <SignupBuddy updateTheUser={this.updateTheUser} />} />
          <Route exact path='/signup/tiger' render={() => <SignupTiger updateTheUser={this.updateTheUser} />} />
          <Route exact path='/login' render={() => {
            if (this.state.currentUser) {
              if (this.state.currentUser.usertype === 'buddy') {
                return <Redirect to='/buddyView'></Redirect>
              } else {
                return <Redirect to='/tigerView'></Redirect>
              }
            } else {
              return (
                <Login logInTheUser={this.updateTheUser}></Login>
              )
            }
          }}></Route>
          <Route exact path='/buddyView' component={BuddyView}></Route>
          <Route exact path='/tigerView' render={() => <TigerView userInSession={this.props.user}></TigerView>}></Route>

          <Route exact path='/tigerslist' component={BuddyView}></Route>
          <Route exact path='/tigerslist/:id' component={TigerDetails}></Route>
          <Route exact path='/about' component={AboutUs}></Route>
          {/* <Route exact path='/contact/:id/message' component={Message}></Route> */}

        </Switch>
        <Footer logInTheUser={this.updateTheUser}></Footer>
      </div>
    );
  }
}

export default App;
