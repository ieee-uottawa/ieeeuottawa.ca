import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Snackbar, CircularProgress, Typography } from '@material-ui/core';

import Form from '../components/form';
import Title from '../components/title';
import { isServerSideRendering } from '../util';

const FormStyle = {
  width: '200px',
};

class Volunteer extends Component {
  constructor(props) {
    super(props);

    this.messageQueue = [];
    this.state = {
      isLoading: false,
      showSnackbar: false,
      messageInfo: {
        key: '',
        message: '',
      },
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.sendSnackbarMsg = this.sendSnackbarMsg.bind(this);
    this.processQueue = this.processQueue.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    this.handleSnackbarExit = this.handleSnackbarExit.bind(this);
  }

  sendSnackbarMsg(key, message, processQueue = true) {
    this.messageQueue.push({ key, message, });
    if (processQueue) this.processQueue();
  }

  processQueue() {
    if (this.messageQueue.length > 0) {
      this.setState({
        messageInfo: this.messageQueue.shift(),
        showSnackbar: true,
      });
    }
  }

  handleSnackbarClose() {
    this.setState({ showSnackbar: false });
  }

  handleSnackbarExit() {
    this.processQueue();
  }

  async onSubmit(values) {
    values.studentNumber = values['student-number'];
    delete values['student-number'];

    this.sendSnackbarMsg('submitting', 'Submitting Volunteer Form...', false);

    if (this.state.showSnackbar) {
      this.setState({ showSnackbar: false });
    } else {
      this.processQueue();
    }

    this.setState({ isLoading: true });
    if (!isServerSideRendering()) {
      const request = require('superagent');
      try {
        console.log(process.env.GATSBY_API_URL);
        const res = await request.post(`${process.env.GATSBY_API_URL}/volunteer`)
          .send(values);
        if (res.ok) {
          this.sendSnackbarMsg('submitted', 'Submitted Volunteer Form!');
          setTimeout(() => this.sendSnackbarMsg('submitted', 'Don\'t forget to email chair@ieeeuottawa.ca with your 200-500 word platform in English and French!'), 1000);
        } else {
          this.sendSnackbarMsg('error', 'Failed to submit volunteer form, try again in a few minutes');
        }
      } catch (e) {
        console.error(e);
        this.sendSnackbarMsg('error', 'Failed to submit volunteer form, try again in a few minutes');
      }
    }
    this.setState({ isLoading: false });
  }

  render() {
    const { showSnackbar, messageInfo, isLoading } = this.state;
    const inputs = [
      {
        label: 'Name',
        isRequired: true,
      },
      {
        label: 'Program',
        isRequired: true,
      },
      {
        label: 'Email',
        isRequired: true,
      },
      {
        label: 'Year',
        items: ['1', '2', '3', '4', '5+'],
        type: 'radio',
        isRequired: true,
      },
      {
        label: 'How would you like to get involved?',
        items: [
          'General Volunteer',
          'SPAC (Student Professional Awareness Conference)',
          'Women in Engineering Wine and Cheese',
          'Raspberry Pi Jam',
          'Social Events (WII Nights, Trivia Nights, EngiBEERing, etc.)',
          'Academic Events (WIE Tech Panel, Workshops, Cookies n Cram)',
        ],
        type: 'radio',
        isRequired: true,
        key: 'involvement',
      },
    ];

    return (
      <div>
        <Title> Volunteer Sign-Up!</Title>
        <Typography className="center-horizontal" variant="body1" style={{ marginTop: '16px' }}>
          <strong>Looking to get more involved with the IEEE uOttawa Student Branch?</strong>
        </Typography>
        <Typography
          className="center-horizontal"
          variant="body1"
          style={{
            marginTop: '1x',
            marginBottom: '15px',
          }}
        >
          <strong>Sign-Up below to be a volunteer to one of the many events we hold throughout the school year!</strong>
        </Typography>
        {!isLoading && <Form inputs={inputs} style={FormStyle} onSubmit={values => this.onSubmit(values)} />}
        {isLoading && <CircularProgress />}
        <Snackbar
          key={messageInfo.key}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={showSnackbar}
          autoHideDuration={2000}
          onClose={this.handleSnackbarClose}
          onExited={this.handleSnackbarExit}
          ContentProps={{ 'aria-describedby': 'message-id' }}
          message={<span id="message-id">{messageInfo.message}</span>}
        />
      </div>
    );
  }
}

export default connect()(Volunteer);
