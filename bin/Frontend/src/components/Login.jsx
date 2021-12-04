import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    changeUsernameHandler = (event) => {
        this.setState({ username: event.target.value })
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value })
    }
    registerUser() {
        this.props.history.push('/register');
    }
    render() {
        return (
            <div>
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center text-success"> Login</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input placeholder="Username" name="username" className="form-control"
                                            value={this.state.username} onChange={this.changeUsernameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" placeholder="Password" name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.loginUser} style={{ marginLeft: "2%", borderRadius: "7px", width: "46%" }} ><h6>Login</h6></button>
                                    <button className="btn btn-danger" onClick={this.registerUser} style={{ marginLeft: "6%", width: "46%" }}><h6>Register</h6></button>

                                </form>
                                <br />
                                <hr width="90%" style={{ borderTop: "1px solid grey" }}></hr>
                                <br />
                                <button className="btn fa fa-facebook" onClick={this.facebookLogin} style={{ marginLeft: "2%", borderRadius: "7px", width: "92%" }}>&nbsp;Login with Facebook</button>
                                <br />
                                <br />
                                <button className="btn fa fa-google" onClick={this.googleLogin} style={{ marginLeft: "2%", borderRadius: "7px", width: "92%" }}>&nbsp;Login with Google</button>
                                <br />
                            </div>
                            <br /><br />
                        </div>
                    </div>
                    <br /><br />
                </div>
                <br /><br /><br /><br /><br />
            </div>
        );
    }
}

export default Login;