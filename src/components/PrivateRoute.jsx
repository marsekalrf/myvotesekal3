import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router'

class PrivateRoute extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      isAuth : true
    }
  }

  componentDidMount(){
    const isAuth = this.props.isAuth;
    if (isAuth != undefined){
      this.setState({isAuth : true})
    }
  }


  render() {
    console.log(this.props);
    return(
      <div>
        <p> HI </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuth: state.session.session_log
})

export default connect(mapStateToProps, {})(PrivateRoute)