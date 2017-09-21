import React, {Component, PropTypes} from 'react';
import styles from './App.css';

import Header from 'Header';
import Home from 'Home';
import Footer from 'Footer';

import {Route} from 'react-router-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class App extends Component {
  render() {
    const {children} = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className={styles.container}>
          <Header/>
          <Route exact path='/' component={Home}/>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}
