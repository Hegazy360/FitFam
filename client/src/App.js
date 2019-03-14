import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext
} from 'grommet';
import { Close } from 'grommet-icons';
import { Link } from 'react-router-dom';

import SubscriptionForm from './pages/SubscriptionForm';
import SubscriptionFormSuccess from './pages/SubscriptionFormSuccess';

import Home from './pages/Home';

const theme = {
  global: {
    colors: {
      brand: 'rgb(105, 188, 186)',
      white: '#FFFFFF'
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px'
    }
  }
};

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="white"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '10', height: '60px', position: 'fixed', width: '100%' }}
    {...props}
  />
);

class App extends Component {
  state = {
    showSidebar: false
  };

  render() {
    const { showSidebar } = this.state;

    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Link
                  to="/"
                  style={{ textDecoration: 'none', color: 'rgb(68, 68, 68)' }}
                >
                  <Heading level="3" margin="none">
                    Trainiac
                  </Heading>
                </Link>
                {/* <Button
                  icon={<Menu color="white" />}
                  onClick={() =>
                    this.setState(prevState => ({
                      showSidebar: !prevState.showSidebar
                    }))
                  }
                /> */}
              </AppBar>
              <Box style={{ marginTop: '60px' }}>
                <Switch>
                  <Route exact path="/" component={Home} size={size} />
                  <Route
                    path="/subscription/:plan?"
                    component={SubscriptionForm}
                  />
                  <Route path="/success" component={SubscriptionFormSuccess} />
                </Switch>
              </Box>
              {!showSidebar || size !== 'small' ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width="medium"
                    background="light-2"
                    elevation="small"
                    align="center"
                    justify="center"
                  >
                    sidebar
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background="light-2"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button
                      icon={<Close />}
                      onClick={() => this.setState({ showSidebar: false })}
                    />
                  </Box>
                  <Box
                    fill
                    background="light-2"
                    align="center"
                    justify="center"
                  >
                    Add plans
                    <br />
                    Add trainiac beasts counter
                    <br />
                    Add team pictures
                    <br />
                    Add result pictures
                  </Box>
                </Layer>
              )}
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
