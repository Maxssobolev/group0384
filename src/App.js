import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

/*my modules*/
import Navigation from './components/Navigation';
import PageRenderer from './page-renderer';
import Banner from './components/Banner';
import { handleLogin } from './actions/UserActions';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  componentDidMount() {
    document.title = ' #0384';
  }
  render() {
    const { handleLoginAction } = this.props;

    return (
      <Router>
        <div>
          <Container>
            <Banner />
            <Navigation
              handleLogin={handleLoginAction}
              isFetching={this.props.user.isFetching}
              userData={this.props.user.userData}
            />

            <Switch>
              <Route path="/:page" component={PageRenderer} />
              <Route path="/" render={() => <Redirect to="/home" />} />
              <Route component={() => 404} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // "приклеили" в this.props.handleLoginAction функцию, которая умеет диспатчить handleLogin
    handleLoginAction: () => dispatch(handleLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
