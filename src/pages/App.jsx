import React, { Component } from 'react'
import MyNavbar from '../components/Navbar'
import MyFooter from '../components/Footer'
import PrivateRoute from '../components/PrivateRoute';
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from '../store'
import Home from './LandingPage/LandingPage'
import Login from './LoginPage'
import Vote from '../Voter/Vote'
import AddCandidate from './AddCandidatePage'
import Transaction from './TransactionPage'
import NewNavbar from '../components/NewNavbar'
import RegisterPage from './RegisterPage/RegisterPage';
import { connect } from 'react-redux'
import { getVoter } from '../_actions/voteAction'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect : true
    }
  }

  componentDidMount(){
    const temp = this.props.session;
  }

  render() {
    return (
    <Provider store={store}>
          <MyNavbar/>
              <Switch>
                <Route exact={true} path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={RegisterPage}/>
                <PrivateRoute path="/protected/vote" component={Vote}/>
                <Route path="/addcandidate" component={AddCandidate}/>
                <Route path="/transaction" component={Transaction}/>
              </Switch>
          <MyFooter/>
    </Provider>
    )
  }
}

const mapStateToProps = state => ({
  session : state.session
})

export default connect(mapStateToProps, {getVoter})(App);
