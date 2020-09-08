/* eslint-disable func-names */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
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
        const { inputs } = this.props;
        this.state = inputs.reduce((obj, { label }) => {
            const current = obj;
            current[label.toLowerCase().replace(/ /g, '-')] = null;
            return current;
        });
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(label) {
        return function ({ target: { value } }) {
            this.setState({ [label]: value });
        }.bind(this);
    }

    submitForm() {
        const { inputs, onSubmit } = this.props;
        for (const input of inputs) {
            if (!input.isRequired) continue;
            const key =
                input.key || input.label.toLowerCase().replace(/ /g, '-');
            const { [key]: value } = this.state;
            if (!value || value === '') {
                this.setState({
                    error: "You haven't entered some required information!",
                });
                return;
            }
        }
        onSubmit(this.state);
    }

    render() {
        const { inputs } = this.props;
        const { error } = this.state;
        return (
            <Card id='form-card'>
                <CardContent>
                    <List>
                        {inputs.map(
                            ({
                                label,
                                items,
                                key: labelKey,
                                isRequired,
                                type = 'short',
                            }) => {
                                const key =
                                    labelKey ||
                                    label.toLowerCase().replace(/ /g, '-');
                                const { [key]: value } = this.state;
                                switch (type) {
                                    case 'radio':
                                        return (
                                            <ListItem>
                                                <FormControl component='fieldset'>
                                                    <FormLabel
                                                        component='legend'
                                                        required={isRequired}
                                                    >
                                                        {label}
                                                    </FormLabel>
                                                    <RadioGroup
                                                        aria-label={label}
                                                        name={key}
                                                        value={value}
                                                        onChange={this.handleChange(
                                                            key
                                                        )}
                                                    >
                                                        {items.map((item) => (
                                                            <FormControlLabel
                                                                value={item}
                                                                key={item}
                                                                label={item}
                                                                control={
                                                                    <Radio />
                                                                }
                                                            />
                                                        ))}
                                                    </RadioGroup>
                                                </FormControl>
                                            </ListItem>
                                        );
                                    case 'short':
                                    case 'paragraph':
                                    default:
                                        return (
                                            <ListItem
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                }}
                                            >
                                                <FormLabel
                                                    required={isRequired}
                                                >
                                                    {label}
                                                </FormLabel>
                                                <TextField
                                                    id={key}
                                                    required={isRequired}
                                                    value={value}
                                                    multiline={
                                                        type === 'paragraph'
                                                    }
                                                    onChange={this.handleChange(
                                                        key
                                                    )}
                                                />
                                            </ListItem>
                                        );
                                }
                            }
                        )}
                    </List>
                    <Button onClick={this.submitForm}>Submit</Button>
                    {error && (
                        <Typography
                            variant='subtitle2'
                            style={{ marginTop: '16px', color: 'red' }}
                        >
                            {error}
                        </Typography>
                    )}
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
