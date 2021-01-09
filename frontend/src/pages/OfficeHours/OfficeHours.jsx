import React, { Component } from 'react';
import { isServerSideRendering } from '../../utils/util';
import Title from '../../components/Titles/Title';
import officeHoursImg from '../../../static/images/office-hours/office-hours.png';
import { translate } from '../../helpers/translation';

import { DataGrid } from '@material-ui/data-grid';
import { Typography } from '@material-ui/core';

const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'discord', headerName: 'Discord Tag', width: 200 },
    { field: 'hours', headerName: 'Office Hours', width: 200 },
    { field: 'bilingual', headerName: 'Bilingual', width: 200 }
];

const rows = [
    {
        id: 1,
        name: 'Ryan',
        discord: '@RyanFleck',
        hours: '0700-1200 Mon-Fri',
        bilingual: false
    },
    {
        id: 2,
        name: 'Vlad',
        discord: '@VLAD',
        hours: '1200-1700 Mon-Fri',
        bilingual: false
    }
];

class OfficeHours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: 713
        };
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
            maxWidth: width > 712 ? '100%' : 'calc(100% - 32px)',
            margin: width > 712 ? '0 auto 16px' : '0 16px 16px',
            height: '70%',
            width: '70%'
        };

        return (
            <div
                style={{
                    maxWidth: '820px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}
            >
                <Title variant="h5" gutterBottom className="title">
                    {translate('Office Hours')}
                </Title>
                <div>
                    <span>
                        <Typography>
                            {"The Discord link is "}
                            <a href="https://discord.gg/jPHy6uUThH">
                                https://discord.gg/jPHy6uUThH
                            </a>
                        </Typography>
                    </span>
                </div>
                <div
                    style={{
                        width: '100%',
                        height: '500px',
                        paddingTop: '1rem'
                    }}
                >
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        autoHeight
                    />
                </div>
                {/*<img
                    src={officeHoursImg}
                    alt="IEEE Office Hours"
                    style={imgStyle}
                />*/}
            </div>
        );
    }
}

export default OfficeHours;
