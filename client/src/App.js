import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
  Image,
  Paragraph,
  Carousel,
  Text
} from 'grommet';
import Lottie from 'react-lottie';
import { Close, Menu, Info } from 'grommet-icons';

// import Home from './pages/Home';
// import List from './pages/List';
import homepage from './assets/images/homepage.jpg';

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
    style={{ zIndex: '1' }}
    {...props}
  />
);

class App extends Component {
  state = {
    showSidebar: false
  };

  render() {
    const { showSidebar } = this.state;

    // const App = () => (
    //   <div>
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route path="/list" component={List} />
    //     </Switch>
    //   </div>
    // );

    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Heading level="3" margin="none">
                  Trainiac
                </Heading>
                <Button
                  icon={<Menu />}
                  onClick={() =>
                    this.setState(prevState => ({
                      showSidebar: !prevState.showSidebar
                    }))
                  }
                />
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align="center" justify="center">
                  <Image
                    fit="cover"
                    style={{
                      width: '100%',
                      minHeight: '445px'
                    }}
                    src={homepage}
                  />
                  <br />
                  <br />
                  <Heading
                    margin="none"
                    level="2"
                    textAlign="center"
                    style={{ fontWeight: 500 }}
                  >
                    Get fit faster
                  </Heading>
                  <Heading
                    margin="medium"
                    level="3"
                    textAlign="center"
                    style={{ fontWeight: 500 }}
                    size="small"
                  >
                    Get a coach to help you get to the next level
                  </Heading>

                  <Box
                    flex="grow"
                    direction="row"
                    align="center"
                    gap="small"
                    pad="xsmall"
                  >
                    <Button label="Start now" onClick={() => {}} />
                    <Button
                      color="accent-4"
                      icon={<Info color="accent-4" />}
                      label="Know more"
                      onClick={() => {}}
                    />
                  </Box>
                  <br />
                  <br />

                  <Box fill="horizontal" id="first_section">
                    <Box flex="grow" background="brand" align="center">
                      <Heading
                        level="4"
                        color="white"
                        textAlign="center"
                        size="small"
                        margin="large"
                        style={{ fontWeight: 500 }}
                      >
                        90% of People Quit After 3 Months of Hitting the Gym
                      </Heading>
                      <Lottie
                        options={{
                          loop: true,
                          autoplay: true,
                          animationData: require('./assets/animations/stopwatch.json')
                        }}
                        height={270}
                      />
                      <Paragraph
                        margin="small"
                        textAlign="center"
                        color="white"
                      >
                        We help people all around the world not to quit, by
                        following, motivating and helping them improve and learn
                        everything about their body and working out.
                        <br />
                        <br />
                      </Paragraph>
                    </Box>
                    <Box flex="grow" background="#8BC34A" align="center">
                      <Heading
                        level="4"
                        color="white"
                        textAlign="center"
                        size="small"
                        margin="large"
                        style={{ fontWeight: 500 }}
                      >
                        We get it, it's not easy.
                      </Heading>
                      <Lottie
                        options={{
                          loop: true,
                          autoplay: true,
                          animationData: require('./assets/animations/biking.json')
                        }}
                        height={270}
                      />
                      <Paragraph
                        margin="small"
                        textAlign="center"
                        color="white"
                      >
                        We were all once in the same position.
                        <br />
                        Confused by all the one-size-fits-all diet tips and
                        workout plans.
                        <br />
                        We wish we had an affordable direct way to become fit
                        faster.
                        <br />
                        <br />
                      </Paragraph>
                    </Box>
                    <Box flex="grow" background="accent-4" align="center">
                      <Heading
                        level="4"
                        color="white"
                        textAlign="center"
                        size="small"
                        margin="large"
                        style={{ fontWeight: 500 }}
                      >
                        We're flexible
                      </Heading>
                      <Lottie
                        options={{
                          loop: true,
                          autoplay: true,
                          animationData: require('./assets/animations/dance.json')
                        }}
                        height={270}
                      />
                      <Paragraph
                        margin="small"
                        textAlign="center"
                        color="white"
                      >
                        Most of Trainiac's team are young athletes who have been
                        training most of their lives.
                        <br />
                        We don't believe in complicating what should be
                        enjoyable.
                        <br />
                        Multiple plans, easy cancelation and refunds.
                        <br />
                        <br />
                      </Paragraph>
                    </Box>
                    <Box flex="grow" background="#4CAF50" align="center">
                      <Heading
                        level="4"
                        color="white"
                        textAlign="center"
                        size="small"
                        margin="large"
                        style={{ fontWeight: 500 }}
                      >
                        We're affordable
                      </Heading>
                      <Lottie
                        options={{
                          loop: true,
                          autoplay: true,
                          animationData: require('./assets/animations/atm.json')
                        }}
                        height={270}
                      />
                      <Paragraph
                        margin="small"
                        textAlign="center"
                        color="white"
                      >
                        We're changing the game.
                        <br />
                        <br />
                        Multiple plans, starting at $20.
                        <br />
                        Customize everything based on your schedule, goals and
                        motivation.
                        <br />
                        <br />
                      </Paragraph>
                    </Box>
                    <Box flex="grow" background="#4CAF50" align="center">
                      <Carousel fill>
                        <Box
                          style={{ padding: '20px 30px 40px' }}
                          align="center"
                          height="350px"
                          background="accent-1"
                          justify="between"
                        >
                          <Text
                            margin="none"
                            color="white"
                            textAlign="center"
                            size="xxlarge"
                            style={{ fontWeight: 600 }}
                          >
                            Basic - $25
                          </Text>
                          <br />
                          <Text
                            margin="none"
                            color="white"
                            textAlign="center"
                            size="medium"
                            style={{ fontWeight: 500 }}
                          >
                            Custom workout plan
                          </Text>
                          <Text
                            margin="none"
                            color="white"
                            textAlign="center"
                            size="medium"
                            style={{ fontWeight: 500 }}
                          >
                            1 Monthly follow-up by one of the coaches
                          </Text>
                          {/* <Attraction size="large" /> */}
                          <br />
                          <br />
                          <Button
                            primary
                            color="white"
                            label="Start now"
                            onClick={() => {}}
                          />
                        </Box>
                        <Box
                          style={{ padding: '20px 20px 40px' }}
                          align="center"
                          height="350px"
                          background="accent-2"
                          justify="between"
                        >
                          <Text
                            margin="none"
                            color="white"
                            textAlign="center"
                            size="xxlarge"
                            style={{ fontWeight: 600 }}
                          >
                            Pro - $40
                          </Text>
                          <br />
                          <Text
                            margin="none"
                            color="white"
                            textAlign="center"
                            size="medium"
                            style={{ fontWeight: 500 }}
                          >
                            Custom workout plan
                          </Text>
                          <Text
                            margin="none"
                            color="white"
                            textAlign="center"
                            size="medium"
                            style={{ fontWeight: 500 }}
                          >
                            2 Monthly follow-ups by one of the coaches
                          </Text>
                          <Text
                            margin="none"
                            color="white"
                            textAlign="center"
                            size="medium"
                            style={{ fontWeight: 500 }}
                          >
                            Personal communication line with one of the coaches
                            for any questions
                          </Text>
                          {/* <Attraction size="large" /> */}
                          <br />
                          <br />
                          <Button
                            primary
                            color="white"
                            label="Start now"
                            onClick={() => {}}
                          />
                        </Box>
                        <Box
                          style={{ padding: '20px 20px 40px' }}
                          align="center"
                          height="350px"
                          background="accent-3"
                          justify="between"
                        >
                          <Text
                            margin="none"
                            color="white"
                            textAlign="center"
                            size="xxlarge"
                            style={{ fontWeight: 600 }}
                          >
                            Pro+ - $60
                          </Text>
                          <br />
                          <Text
                            margin="none"
                            color="white"
                            textAlign="center"
                            size="medium"
                            style={{ fontWeight: 500 }}
                          >
                            Custom workout plan
                          </Text>
                          <Text
                            margin="none"
                            color="white"
                            textAlign="center"
                            size="medium"
                            style={{ fontWeight: 500 }}
                          >
                            Weekly follow-up by one of the coaches
                          </Text>
                          <Text
                            margin="none"
                            color="white"
                            textAlign="center"
                            size="medium"
                            style={{ fontWeight: 500 }}
                          >
                            Personal communication line with one of the coaches
                            for any questions
                          </Text>
                          <Text
                            margin="none"
                            color="white"
                            textAlign="center"
                            size="medium"
                            style={{ fontWeight: 500 }}
                          >
                            Diet planning and nutrition following
                          </Text>
                          {/* <Attraction size="large" /> */}
                          <br />
                          <br />
                          <Button
                            primary
                            color="white"
                            label="Start now"
                            onClick={() => {}}
                          />
                        </Box>
                      </Carousel>
                    </Box>
                  </Box>
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
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
