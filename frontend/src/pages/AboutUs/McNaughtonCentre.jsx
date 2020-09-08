import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@material-ui/core';
import { graphql, StaticQuery } from 'gatsby';

import { moneyFormatter } from '../../utils/util';
import Title from '../../components/Titles/Title';

const McNaughtonCentre = () => (
    <StaticQuery
        query={graphql`
            query {
                allServicesJson {
                    edges {
                        node {
                            name
                            cost
                            suffix
                        }
                    }
                }
            }
        `}
        render={({ allServicesJson: { edges } }) => (
            <div>
                <Title variant='h5' gutterBottom className='title'>
                    McNaughton Centre
                </Title>
                <Typography
                    variant='body1'
                    className='p-margins'
                    style={{ margin: '15px' }}
                >
                    Located in SITE 4026, the McNaughton Centre is intended to
                    enhance the learning experiences of IEEE student members at
                    Canadian Universities and Colleges, as well as encouraging
                    IEEE membership and activities, and interaction between the
                    Student Branch and the Ottawa Section. Ted Glass (in 1979)
                    created the first centre at the University of Manitoba in
                    memory of General Andrew G. L. McNaughton, one of Canada’s
                    most distinguished electrical engineers.
                </Typography>
                <Typography
                    variant='body1'
                    className='p-margins'
                    style={{ margin: '15px' }}
                >
                    The McNaughton Centre at uOttawa is proud to announce
                    services available to all IEEE student members and SITE
                    students.
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Service</TableCell>
                            <TableCell>Cost</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {edges.map(({ node: { name, cost, suffix } }) => {
                            let costStr;
                            if (!cost) costStr = 'FREE';
                            else if (typeof cost === 'number')
                                costStr = moneyFormatter.format(cost);
                            else if (typeof cost === 'string') costStr = cost;

                            if (suffix) costStr += suffix;

                            return (
                                <TableRow key={name}>
                                    <TableCell component='th' scope='row'>
                                        {name}
                                    </TableCell>
                                    <TableCell>{costStr}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        )}
    />
);

export default McNaughtonCentre;
