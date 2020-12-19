import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/*my modules*/
import Navigation from './components/Navigation';
import PageRenderer from './page-renderer';
import Banner from './components/Banner';

class App extends React.Component {
  componentDidMount() {
    document.title = ' #0384';
  }
  render() {
    return (
      <Router>
        <div>
          <Container>
            <Banner />
            <Navigation />
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

export default App;
