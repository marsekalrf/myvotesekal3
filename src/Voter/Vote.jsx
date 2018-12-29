import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginPage from '../pages/LoginPage';
import { verifyVoter } from "../_actions/voteAction";
import { Redirect } from 'react-router-dom'

class Vote extends Component {
  constructor(props){
    super(props);

    this.state = {
      isAuth : false,
      voterIdentity : [],
      error: true
    }
  }

  componentWillMount(){
    /*const { session } = this.props.session;
    const { id } = this.props.id;
    if ( id != null && session != false){
      this.setState({error: !this.state.error, isAuth: !this.state.isAuth, voterIdentity: [...this.state.voterIdentity, this.props.stamp]})
    }*/
  }

  render() {
    const { isAuth } = this.state
    const { error } = this.state
    if(!isAuth){
      return(
        <Redirect to="/login" component={LoginPage}/>
      )
    }
    return (        
        <div class="container roomy-150">
          <h2 align="center">Candidate</h2>
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div class="fh5co-blog animate-box">
                <a href="#"><img class="img-responsive" src="assets/images/project-4.jpg" alt=""/></a>
                <div class="blog-text">
                  <span class="posted_on">Nov. 15th</span>
                  <span class="comment"><a href="">21<i class="icon-speech-bubble"></i></a></span>
                  <h3><a href="#">Candidate 1</a></h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <a href="#" class="btn btn-primary">Vote</a>
                </div> 
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="fh5co-blog animate-box">
                <a href="#"><img class="img-responsive" src="assets/images/project-2.jpg" alt=""/></a>
                <div class="blog-text">
                  <span class="posted_on">Nov. 15th</span>
                  <span class="comment"><a href="">21<i class="icon-speech-bubble"></i></a></span>
                  <h3><a href="#">Candidate 2</a></h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <a href="#" class="btn btn-primary">Vote</a>
                </div> 
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="fh5co-blog animate-box">
                <a href="#"><img class="img-responsive" src="assets/images/project-3.jpg" alt=""/></a>
                <div class="blog-text">
                  <span class="posted_on">Nov. 15th</span>
                  <span class="comment"><a href="">21<i class="icon-speech-bubble"></i></a></span>
                  <h3><a href="#">Candidate 3</a></h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <a href="#" class="btn btn-primary">Vote</a>
                </div> 
              </div>
            </div>
          </div>
        </div> 
    )
  }
}

const mapStateToProps = state => ({
  session : state
})

export default connect(mapStateToProps, { verifyVoter })(Vote);