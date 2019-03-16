/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Box, Image, Text, TextInput, Button, Select, Layer } from 'grommet';
import Swiper from 'react-id-swiper';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { Radio } from 'pretty-checkbox-react';
import { FormPreviousLink } from 'grommet-icons';

import '../styles/carousel.css';
import '../../node_modules/pretty-checkbox/dist/pretty-checkbox.min.css';
import man from '../assets/images/man.svg';
import woman from '../assets/images/woman.svg';

import PlansCarousel from './PlansCarousel';

const env = 'production';
const currency = 'USD';

const client = {
  sandbox:
    'AW-K-5tXnLRoqC3zumljD-JNM5MhS5hVLtdBxGu6n2KpsyXFdtvmaiWYEfkApLJ16LmAeo-tIIu5Bt4V',
  production:
    'AX14sTa9Dxa7y5r2YuxfSyd3i2jtXL2JcKF-3ZpAU9v9faVdF_sl5hSMnQymVmVteW-8Vn-1jc6_y4PK'
};

const params = {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  }
};

const RadioButton = props => {
  const { name, label, onChange } = props;
  return (
    <Radio
      shape="curve"
      plain
      color="brand"
      animation="tada"
      icon={<i className="mdi mdi-check" />}
      name={name}
      value={label}
      onChange={() => onChange(name, label)}
    >
      {label}
    </Radio>
  );
};

class SubscriptionForm extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { plan } = match.params;
    let planValue = 'Basic - $10';
    let total = 10;
    if (plan === 'pro') {
      planValue = 'Pro - $25';
      total = 40;
    }

    if (plan === 'proplus') {
      planValue = 'Pro+ - $40';
      total = 60;
    }

    this.swiper = null;
    this.state = {
      gender: null,
      shape: null,
      plan: planValue,
      displayBackButton: false,
      displayPopup: false,
      total,
      goal: null
    };
  }

  goNext = () => {
    const { displayBackButton } = this.state;
    if (this.swiper) {
      this.swiper.slideNext();
      if (!displayBackButton) {
        this.displayBackButton(true);
      }
    }
  };

  goPrev = () => {
    if (this.swiper) {
      this.swiper.slidePrev();
      if (this.swiper.realIndex === 0) {
        this.displayBackButton(false);
      }
    }
  };

  displayBackButton = displayBackButton => {
    this.setState({ displayBackButton });
  };

  setFormValue = (key, value, next = true) => {
    this.setState({ [`${key}`]: value }, () => console.log(this.state));
    if (next) this.goNext();
  };

  onSuccess = payment => {
    const { history } = this.props;
    const data = this.state;
    data.paymentInfo = payment;
    axios
      .post('/api/subscription', data)
      .then(() => {
        // eslint-disable-next-line no-undef
        gtag_report_conversion();
        console.log('Payment successful');
      })
      .catch(error => {
        console.log(error);
      });
    setTimeout(() => {
      history.push('/success');
    }, 1500);
  };

  onError = err => {
    console.log('Error!', err);
  };

  render() {
    const { displayBackButton, displayPopup, total, plan } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Trainiac - Subscription Form</title>
          <link rel="canonical" href="https://trainiac.io/subscription" />
        </Helmet>
        <Swiper
          noSwiping
          {...params}
          ref={node => {
            if (node) this.swiper = node.swiper;
          }}
        >
          <Box style={{ padding: '20px 40px' }} align="center" pad="large">
            <Text
              margin="none"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              What&apos;s your gender ?
            </Text>
            <br />
            <Box direction="row" align="center" pad="large">
              <Image
                style={{ padding: '20px' }}
                fit="contain"
                width="100%"
                src={man}
                onClick={() => this.setFormValue('gender', 'man')}
              />
              <Image
                style={{ padding: '20px' }}
                fit="contain"
                width="100%"
                src={woman}
                onClick={() => this.setFormValue('gender', 'woman')}
              />
            </Box>
          </Box>
          <Box style={{ padding: '20px 40px' }} pad="large">
            <Text
              margin="none"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              What&apos;s your current shape ?
            </Text>
            <br />
            <Box pad="large" style={{ fontSize: '18px' }}>
              <RadioButton
                name="shape"
                label="Skinny"
                onChange={this.setFormValue}
              />
              <br />
              <RadioButton
                name="shape"
                label="Fit"
                onChange={this.setFormValue}
              />
              <br />
              <RadioButton
                name="shape"
                label="Average"
                onChange={this.setFormValue}
              />
              <br />
              <RadioButton
                name="shape"
                label="Over-weight"
                onChange={this.setFormValue}
              />
            </Box>
          </Box>
          <Box style={{ padding: '20px 40px' }} pad="large">
            <Text
              margin="none"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              What&apos;s your goal ?
            </Text>
            <br />
            <Box pad="large" style={{ fontSize: '18px' }}>
              <RadioButton
                name="goal"
                label="Lose weight"
                onChange={this.setFormValue}
              />
              <br />
              <RadioButton
                name="goal"
                label="Gain Muscle"
                onChange={this.setFormValue}
              />
              <br />
              <RadioButton
                name="goal"
                label="Complete transformation"
                onChange={this.setFormValue}
              />
            </Box>
          </Box>
          <Box style={{ padding: '20px 40px' }} pad="large">
            <Text
              margin="none"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              What&apos;s your age ?
            </Text>
            <br />
            <Box pad="large" style={{ fontSize: '18px' }}>
              <RadioButton
                name="age"
                label="Below 18"
                onChange={this.setFormValue}
              />
              <br />
              <RadioButton
                name="age"
                label="Between 18 and 40"
                onChange={this.setFormValue}
              />
              <br />
              <RadioButton
                name="age"
                label="Between 40 and 60"
                onChange={this.setFormValue}
              />
              <br />
              <RadioButton
                name="age"
                label="Over 60"
                onChange={this.setFormValue}
              />
            </Box>
          </Box>
          <Box style={{ padding: '20px 40px' }} pad="large">
            <Text
              margin="none"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              What&apos;s your email ?
            </Text>
            <br />
            <br />
            <TextInput
              type="email"
              onChange={event =>
                this.setFormValue('email', event.target.value, false)
              }
            />
            <Text size="xsmall">
              We need it to send you your workout plan and follow up with you!
            </Text>
            <br />
            <Button label="Go to payment" onClick={this.goNext} />
          </Box>
          <Box style={{ padding: '20px 40px' }} pad="large">
            <Text
              margin="none"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              Which plan would you like ?
            </Text>
            <br />
            <br />
            <Select
              style={{ width: '100%' }}
              options={['Basic - $25', 'Pro - $40', 'Pro+ - $60']}
              value={plan}
              onChange={({ option }) => {
                if (option === 'Basic - $10') {
                  this.setState({ plan: option, total: 10 });
                }
                if (option === 'Pro - $25') {
                  this.setState({ plan: option, total: 25 });
                }
                if (option === 'Pro+ - $40') {
                  this.setState({ plan: option, total: 40 });
                }
              }}
            />
            <br />
            <Box align="center" justify="center">
              <Button
                plain
                size="xsmall"
                label="See more details"
                onClick={() => {
                  this.setState({ displayPopup: true });
                }}
              />
            </Box>
            <br />
            {displayPopup && (
              <Layer
                position="center"
                modal
                responsive={false}
                style={{ paddingBottom: '18px' }}
                onClickOutside={() => {
                  this.setState({ displayPopup: false });
                }}
              >
                <PlansCarousel buttons={false} />
                <Box align="center" justify="center">
                  <Button
                    label="Got it!"
                    onClick={() => {
                      this.setState({ displayPopup: false });
                    }}
                  />
                </Box>
              </Layer>
            )}
            <br />
            <div style={{ width: '100%' }}>
              <PaypalExpressBtn
                env={env}
                client={client}
                currency={currency}
                total={total}
                onError={this.onError}
                onSuccess={this.onSuccess}
                onCancel={this.onCancel}
                style={{
                  size: 'responsive',
                  color: 'gold',
                  shape: 'pill',
                  label: 'checkout',
                  layout: 'vertical'
                }}
              />
            </div>
          </Box>
        </Swiper>
        {displayBackButton && (
          <Button
            style={{
              zIndex: 10,
              position: 'absolute',
              top: '60px',
              left: '-5px'
            }}
            color="accent-4"
            icon={<FormPreviousLink size="40px" />}
            onClick={this.goPrev}
          />
        )}
      </div>
    );
  }
}

export default withRouter(SubscriptionForm);
