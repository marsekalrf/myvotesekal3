import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import { loginVoter } from '../../_actions/voteAction'
import { connect } from 'react-redux'
import Vote from '../../Voter/Vote'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({[name] : value});
        console.log(name, value)
    }

    handleSubmit(e) {
        e.preventDefault();

        const { username, password } = this.state;
        const user = { user : { username, password}}
        this.props.loginVoter(user);
    }

    render() {
        const { username, password, submitted } = this.state;

        if(submitted){
          return (<Redirect to="/protected/vote" component={Vote}/>)
        }
        return (
        <section id="login" class="login">
        <div class="container">
            <div class="row">
              <div class="main_features fix roomy-150">
                  <div class="container roomy-50">
                  <br/>
                    <center><h1><b>Login</b></h1></center>
                    <br/>
                <h2 align="center"></h2>
                      <div class="form">
                        <form class="login-form" onSubmit={this.handleSubmit}>
                        <div className={(submitted && !username ? ' has-error' : '')}>
                         <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="username"/>
                        </div>
                        <div className={(submitted && !password ? ' has-error' : '')}>
                         <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} placeholder="password"/>
                        </div>
                         <button>Login</button>
                         <p class="message">Not Registered ? <a href="/register" >Register</a></p>
                         </form>
                      </div>
                      </div>
                    </div>
            </div>
        </div>
        </section>
        );
    }
}

const mapStateToProps = state => ({
  login: state.voter.session_logs
})

export default connect(mapStateToProps, { loginVoter })(LoginPage);
