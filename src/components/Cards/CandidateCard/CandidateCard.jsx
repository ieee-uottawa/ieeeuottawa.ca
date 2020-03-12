import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import './candidate-card.scss';
import linkedin from './linkedin.png';

class CandidateCard extends Component {
    constructor(props) {
        super(props);
        this.languages = Object.keys(props.platform);
        this.state = { currentLanguage: 'en', otherLanguage: 'fr' };
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage() {
        const { currentLanguage } = this.state;
        const currentIndex = this.languages.indexOf(currentLanguage);
        this.setState({
            currentLanguage: this.languages[(currentIndex + 1) % 2],
            otherLanguage: this.languages[currentIndex]
        });
    }

    render() {
        const { name, platform, program, LinkedIn } = this.props;
        const { currentLanguage, otherLanguage } = this.state;
        return (
            <Card style={{ margin: '8px' }}>
                <CardContent>
                    <div style={{ display: 'flex' }}>
                        <Typography
                            variant="body1"
                            color="textPrimary"
                            gutterBottom
                            style={{
                                flexGrow: 1,
                                paddingTop: '8px',
                                fontWeight: 'bold',
                                verticalAlign: 'middle'
                            }}
                        >
                            {name}
                        </Typography>

                        {LinkedIn.length > 1 && (
                            <div
                                style={{
                                    paddingTop: '8px',
                                    fontWeight: 'bold'
                                }}
                            >
                                <a href={LinkedIn}>
                                    <img
                                        src={linkedin}
                                        alt="LinkedIn Icon"
                                        style={{
                                            marginRight: '100px',
                                            height: '30px',
                                            width: '30px'
                                        }}
                                    />
                                </a>
                            </div>
                        )}

                        <Typography
                            variant="body1"
                            color="textPrimary"
                            gutterBottom
                            style={{
                                paddingTop: '8px',
                                fontWeight: 'bold'
                            }}
                        >
                            {program}
                        </Typography>

                        {this.languages.length > 1 &&
                            platform[this.languages[1]] && (
                                <Button onClick={this.changeLanguage}>
                                    {otherLanguage}
                                </Button>
                            )}
                    </div>
                    <Typography
                        component="div"
                        gutterBottom
                        dangerouslySetInnerHTML={{
                            __html: platform[currentLanguage]
                        }}
                    />
                </CardContent>
            </Card>
        );
    }
}

CandidateCard.propTypes = {
    name: PropTypes.string.isRequired,
    platform: PropTypes.any.isRequired,
    program: PropTypes.string.isRequired,
    LinkedIn: PropTypes.string.isRequired
};

export default CandidateCard;
