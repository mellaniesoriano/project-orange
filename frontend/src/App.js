import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import FooterTab from './components/FooterTab';
import Main from './components/Main';
import Login from './components/Login';
import { checkUser } from './actions';
import '../node_modules/font-awesome/css/font-awesome.min.css';
const browserHistory = Router.browserHistory;

class App extends Component {
  componentWillMount() {
    //this.props.checkUser();
  }

  ifLoggedIn() {
    return (
      <Router history={browserHistory}>
        <div className="container">
          <Main />
          <FooterTab />
        </div>
      </Router>
    );
  }

  ifNotLoggedIn() {
    return <Login />;
  }

  render() {
    console.log(this.props);
    return this.props.authenticated ? this.ifLoggedIn() : this.ifNotLoggedIn();
  }
}

const mapStatetoProps = state => {
  return {
    auth: state.auth,
    checked: state.session.checked,
    authenticated: state.session.authenticated
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    checkUser: () => {
      dispatch(checkUser());
    }
  };
};

const ConnectedApp = connect(mapStatetoProps, mapDispatchtoProps)(App);

export default ConnectedApp;
