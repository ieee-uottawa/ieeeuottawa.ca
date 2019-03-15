import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import { Typography } from '@material-ui/core';

import './form.scss';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.inputs.reduce((obj, { label }) => {
            obj[label.toLowerCase().replace(/ /g, '-')] = null;
            return obj;
        });
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(label) {
        return function ({ target: { value } }) {
            this.setState({ [label]: value });
        }
            .bind(this);
    }

    submitForm() {
        for (let input of this.props.inputs) {
            if (!input.isRequired) continue;

            const key = input.label.toLowerCase().replace(/ /g, '-');
            if (!this.state[key] || this.state[key] === '') {
                this.setState({ error: 'You haven\'t entered some required information!' });
                return;
            }
        }
        console.log(this.state);
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <Card id="form-card">
                <CardContent>
                    <List>
                        {
                            this.props.inputs.map(({ label, items, isRequired, type = 'short' }) => {
                                const key = label.toLowerCase().replace(/ /g, '-');

                                switch (type) {
                                    case 'radio':
                                        return (
                                            <ListItem>
                                                <FormControl component="fieldset">
                                                    <FormLabel component="legend" required={isRequired}>{label}</FormLabel>
                                                    <RadioGroup
                                                        aria-label={label}
                                                        name={key}
                                                        value={this.state[key]}
                                                        onChange={this.handleChange(key)}
                                                    >
                                                        {items.map(item => <FormControlLabel value={item} label={item} control={<Radio />} />)}
                                                    </RadioGroup>
                                                </FormControl>
                                            </ListItem>
                                        )
                                        break;
                                    case 'short':
                                    case 'paragraph':
                                    default:
                                        return (
                                            <ListItem style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                                <FormLabel required={isRequired}>{label}</FormLabel>
                                                <TextField
                                                    id={key}
                                                    required={isRequired}
                                                    value={this.state[key]}
                                                    multiline={type === 'paragraph'}
                                                    onChange={this.handleChange(key)}
                                                />
                                            </ListItem>
                                        );
                                }
                            })
                        }
                    </List>
                    <Button onClick={this.submitForm}>Submit</Button>
                    {this.state.error && <Typography variant="subtitle2" style={{ marginTop: '16px', color: 'red' }}>{this.state.error}</Typography>}
                </CardContent>
            </Card>
        );
    }
}

Form.propTypes = {
    inputs: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Form;