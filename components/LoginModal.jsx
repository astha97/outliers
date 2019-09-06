import React ,{Component} from 'react';
import Modal from 'react-awesome-modal';
import '../styles/loginmodal.css';

class LoginModal extends Component{

    state={
        email:'',
        password:'',
    };
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }


  render() {
    const {  email, password } = this.state;
    return (
      <div className="container">
          <form class="form-signin">
              <h1>Login</h1>
            Email:<br />
              <input class="form-control" type="email"  className ="input" onChange={this.onChange} name="email" value={email} placeholder="Email Address" required/>
            <br/>
            Password:<br/>
            <input class="form-control" type="password"  className ="input" onChange={this.onChange} name="password" value={password} placeholder="Password" required/>
           <br/>
           <br/>
           <a href="google.co.in">forgot your password?</a>
           <br/>
           <div className="login_btn">
                <button className="btn" type="submit">LOGIN</button>
              </div>
           </form>
      </div>
    );
  }
}

export default LoginModal;
    




 