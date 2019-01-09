import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Resolutions from '../../containers/Resolutions/Resolutions'
import Resources from '../../containers/Resources/Resources';

class Layout extends Component {


  render() {
    return <>
      <Toolbar />
      < main className={classes.Content}>
        <Resolutions />
        <Resources />
      </main >
    </>
  }

}

export default Layout