import React, { Component } from 'react';
import { isServerSideRendering } from '../../utils/util';
import Title from '../../components/Titles/Title';
// import officeHoursImg from '../../../static/images/office-hours/office-hours.png';
import { translate } from '../../helpers/translation';

class OfficeHours extends Component {
    constructor() {
        super();
        this.state = { screenWidth: 713 };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        this.updateDimensions();
        if (!isServerSideRendering())
            window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        if (!isServerSideRendering())
            window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions() {
        const screenWidth = isServerSideRendering() ? 0 : window.innerWidth;
        this.setState({ screenWidth });
    }

    render() {
        const { screenWidth: width } = this.state;
        const imgStyle = {
            display: 'block',
            borderRadius: '12px',
            maxWidth: width > 712 ? '100%' : 'calc(100% - 32px)'
            // margin: width > 712 ? '0 auto 16px' : '0 16px 16px'
        };

        return (
            <>
                <Title variant="h5" gutterBottom className="title">
                    {translate('Office Hours')}
                </Title>
            </>
        );
    }
}

export default OfficeHours;
