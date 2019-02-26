import React, { Component } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ReactGA from 'react-ga';
import 'typeface-roboto';
import mainImage from './assets/images/main_image.jpg';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(105, 188, 186)',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#f44336'
    }
  }
});

class App extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-135073250-1');
    ReactGA.pageview('home');
  }

  render() {
    const onSuccess = payment => {
      // 1, 2, and ... Poof! You made it, everything's fine and dandy!
      console.log('Payment successful!', payment);
      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onCancel = data => {
      // The user pressed "cancel" or closed the PayPal popup
      console.log('Payment cancelled!', data);
      // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onError = err => {
      // The main Paypal script could not be loaded or something blocked the script from loading
      console.log('Error!', err);
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };

    const env = 'production'; // you can set this string to 'production'
    const currency = 'EUR'; // you can set this string from your props or state
    const total = 19.99; // this is the total amount (based on currency) to charge
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    const client = {
      sandbox:
        'AW-K-5tXnLRoqC3zumljD-JNM5MhS5hVLtdBxGu6n2KpsyXFdtvmaiWYEfkApLJ16LmAeo-tIIu5Bt4V',
      production:
        'AX14sTa9Dxa7y5r2YuxfSyd3i2jtXL2JcKF-3ZpAU9v9faVdF_sl5hSMnQymVmVteW-8Vn-1jc6_y4PK'
    };

    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ flexGrow: 1 }}>
          <AppBar
            position="fixed"
            style={{
              background: 'rgba(1,1,1,0.3)',
              boxShadow: 'none',
              alignItems: 'center'
            }}
          >
            <Toolbar>
              <Typography
                style={{
                  padding: 10,
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 600
                }}
                component="h1"
                variant="h4"
                color="inherit"
              >
                Trainiac
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <img src={mainImage} alt="Main" style={{ width: '100%' }} />
          <div className="introductionTextContainer">
            <h2 className="subtitle">Making your fitness journey easier</h2>
            <h3 className="description">
              Get your next fitness plan made by one of our personal trainers
              <br />
              and watch your body transform! Now for only 19.99€
            </h3>
            <Button variant="outlined" color="primary" href="#typeform">
              Start now - in 2 steps
            </Button>
          </div>
        </div>
        <Typography
          id="typeform"
          style={{ marginTop: '20px', padding: 20, textAlign: 'center' }}
          variant="h6"
        >
          Step 1
          <br />
          Fill this simple dynamic form to help us create the best plan for you.
        </Typography>
        <div
          style={{
            position: 'relative',
            height: '400px',
            marginTop: '50px',
            marginBottom: '50px'
          }}
        >
          <ReactTypeformEmbed url="https://mohamehegazi.typeform.com/to/qxOc2K" />
        </div>
        <Typography
          style={{ marginBottom: '10px', padding: 20, textAlign: 'center' }}
          variant="h6"
        >
          Step 2
          <br />
          For 19.99€ you get a certified personal trainer&apos;s support and
          custom made plan
          <br />
          +
          <br />a discount on your next plan!
        </Typography>
        <div>
          <PaypalExpressBtn
            style={{ size: 'responsive' }}
            env={env}
            client={client}
            currency={currency}
            total={total}
            onError={onError}
            onSuccess={onSuccess}
            onCancel={onCancel}
          />
        </div>
        <div>
          <Typography
            style={{ marginTop: '20px', padding: 20, textAlign: 'center' }}
          >
            That&apos;s it, you&apos;re all done, easy right?
            <br />
            Once your payment is confirmed, one of our coaches will create a
            full workout plan for you!
            <br />
            Keep an eye on your email!
          </Typography>
          <Typography style={{ padding: 20, textAlign: 'center' }}>
            If you got any questions or something is not right,
            <br />
            or if you just want to say hello{' '}
            <a href="mailto: fitnessmotown@gmail.com">contact us</a> right now,
            we&apos;re friendly.
          </Typography>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
