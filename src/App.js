import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch, Redirect } from 'react-router-dom';
import ResScale from './containers/ResScale/ResScale';
import AboutUs from './components/Aboutus/Aboutus'
import ResQuestionaire from './containers/ResQuestionaire/ResQuestionaire';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/aboutus' exact component={AboutUs} />
            <Route path='/questionaire' exact component={ResQuestionaire} />
            <Route path='/' component={ResScale} />
            {/* for any unknown routes */}
            <Redirect to='/' />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
