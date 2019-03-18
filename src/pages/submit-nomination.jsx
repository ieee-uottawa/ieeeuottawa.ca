import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import Form from '../components/form';
import { isServerSideRendering } from '../util';

class SubmitNomination extends Component {
    constructor(props) {
        super(props);

        this.messageQueue = [];
        this.state = { isLoading: false, showSnackbar: false, messageInfo: { key: '', message: '' } };

        this.onSubmit = this.onSubmit.bind(this);
        this.sendSnackbarMsg = this.sendSnackbarMsg.bind(this);
        this.processQueue = this.processQueue.bind(this);
        this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
        this.handleSnackbarExit = this.handleSnackbarExit.bind(this);
    }

    sendSnackbarMsg(key, message, processQueue = true) {
        this.messageQueue.push({
            key,
            message,
        });
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
        values.platform = values['platform-(200-word-min---500-word-max)'];
        delete values['platform-(200-word-min---500-word-max)'];

        this.sendSnackbarMsg('submitting', 'Submitting nomination...', false);

        if (this.state.showSnackbar) {
            this.setState({ showSnackbar: false });
        } else {
            this.processQueue();
        }

        this.setState({ isLoading: true });
        if (!isServerSideRendering()) {
            const request = require('superagent');
            try {
                const res = await request.post(`${process.env.GATSBY_API_URL}/nomination`)
                    .send(values);
                if (res.ok) {
                    this.sendSnackbarMsg('submitted', 'Submitted nomination!');
                } else {
                    this.sendSnackbarMsg('error', 'Failed to submit nomination, try again in a few minutes');
                }
            } catch (e) {
                console.error(e);
                this.sendSnackbarMsg('error', 'Failed to submit nomination, try again in a few minutes');
            }
        }
        this.setState({ isLoading: false });
    }

    render() {
        const { showSnackbar, messageInfo, isLoading } = this.state;
        const inputs = [
            { label: 'Name', isRequired: true },
            { label: 'Email', isRequired: true },
            { label: 'Student Number', isRequired: true },
            { label: 'Program', isRequired: true },
            { label: 'Year', items: ['1', '2', '3', '4', '5+'], type: 'radio', isRequired: true },
            {
                label: 'Position',
                items: ['Chair', 'Vice Chair', 'Treasurer', 'Secretary', 'VP Academic', 'VP Communications', 'VP External', 'VP Internal', 'VP Social', 'Webmaster', 'McNaughton Centre Director', 'WIE Chair', 'WIE Vice Chair', 'Photonics Chair', 'Photonics Vice Chair'],
                type: 'radio',
                isRequired: true,
            },
            { label: 'Platform (200 word min - 500 word max)', type: 'paragraph', isRequired: true }
        ];

        return (
            <div>
                <Typography variant="h5" gutterBottom className="title">IEEE Executive Nomination Form</Typography>
                <p className="center-horizontal" style={{ marginTop: '16px' }}><strong>IMPORTANT! PLEASE READ</strong></p>
                <p className="p-margins">
                    IEEE Elections: <br />
                    March 13th: First day to apply for positions/nomination period begins <br />
                    March 25th, 23:59: Nomination period ends <br />
                    March 26th @ 7PM: Mandatory candidates meeting <br />
                    March 27th - April 2nd: Campaigning period <br />
                    April 3rd: Election Day!
                </p>
                <p className="p-margins">
                    Positions: <br />
                    -Chair(One year experience as an exec on the IEEE student association required) <br />
                    -Vice Chair (One year experience as an exec on the IEEE student association required) <br />
                    -Treasurer <br />
                    -Secretary <br />
                    -VP Academic <br />
                    -VP Communications <br />
                    -VP External <br />
                    -VP Internal <br />
                    -VP Social <br />
                    -Webmaster <br />
                    -McNaughton Center Director <br />
                    ----- <br />
                    -WIE Chair <br />
                    -WIE Vice-Chair <br />
                    ----- <br />
                    -Photonics Chair (Grad Students Only) <br />
                    -Photonics Vice-Chair (Grad Students Only) <br />
                </p>
                {!isLoading && <Form inputs={inputs} onSubmit={values => this.onSubmit(values)} />}
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

export default SubmitNomination;
