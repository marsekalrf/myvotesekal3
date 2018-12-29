import React from 'react';
import { Link } from 'react-router-dom';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
    }

    render() {
       const user = this.state.user
       return (
        <section id="features" class="features">
        <div class="container">
            <div class="row">
              <div class="main_features fix roomy-150">
                <h2 align="center"></h2>
                <div class="container roomy-50">
                <br/>
                  <center><h1><b>Register</b></h1></center>
                  <br/>
                        <div class="form">
                           <form class="register-form" onSubmit={this.handleSubmit}>
                                <div className={( !user.firstName ? ' has-error' : '')}>
                                        <input type="text" className="form-control" name="firstName" placeholder="firstName" value={user.firstName} onChange={this.handleChange} />
                                    </div>
                                    <div className={(!user.lastName ? ' has-error' : '')}>
                                        <input type="text" className="form-control" name="lastName" placeholder="lastName" value={user.lastName} onChange={this.handleChange} />
                                    </div>
                                    <div className={( !user.username ? ' has-error' : '')}>
                                        <input type="text" className="form-control" name="username" placeholder="username" value={user.username} onChange={this.handleChange} />
                                    </div>
                                    <div className={( !user.password ? ' has-error' : '')}>
                                        <input type="password" className="form-control" name="password" placeholder="password" value={user.password} onChange={this.handleChange} />
                                    </div>
                           <button>Create</button>
                           <p class="message">Alredy Registered?&nbsp <a href="/login" >Login</a></p>
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

export default RegisterPage;
