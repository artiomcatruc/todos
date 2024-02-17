import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { login } from './api';

export default class Login extends Component {
  constructor() {
    super();
    this.handleEmailBlur = this.handleEmailBlur.bind(this);
    this.handlePasswordBlur = this.handlePasswordBlur.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.clearFormData();
  }

  clearFormData() {
    this.formData = {
      email: '',
      password: ''
    };
  }

  handleEmailBlur(evt) {
    this.formData.email = evt.target.value;
  }

  handlePasswordBlur(evt) {
    this.formData.password = evt.target.value;
  }

  async handleFormSubmit(evt) {
    evt.preventDefault();
    await login(this.formData.email,
                this.formData.password);
  }

  render() {
    if (this.props.currentUser)
      return <Navigate to="/" replace />;
    else
      return (
        <section>
          <h1>Log In</h1>
          <form onSubmit={this.handleFormSubmit}>
            <div className="field">
              <label className="label">Email Address</label>
              <div className="control">
                <input type="email" className="input"
                       onBlur={this.handleEmailBlur} />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input type="password" className="input"
                       onBlur={this.handlePasswordBlur} />
              </div>
            </div>
            <div className="field is-grouped is-grouped-right">
              <div className="control">
                <input type="reset"
                       className="button is-link is-light"
                       value="Reset" />
              </div>
              <div className="control">
                <input type="submit" className="button is-primary"
                       value="Log In" />
              </div>
            </div>
          </form>
        </section>
      );
  }
}