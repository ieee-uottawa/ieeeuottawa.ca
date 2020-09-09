import React from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableRow
} from '../../helpers/material-ui';
import { Title } from '../../helpers/components';
import { pdfs, pdfMap } from '../../helpers/meeting-minutes';
import { translate } from '../../helpers/translation';

const MeetingMinutes = () => {
    return (
        <div className="center-horizontal" style={{ padding: '20px' }}>
            <Title variant="h5" gutterBottom className="title">
                {translate('Meeting Minutes')}
            </Title>
            <Paper
                style={{
                    padding: '10px',
                    width: '40%',
                    marginLeft: '30%',
                    marginRight: '30%'
                }}
            >
                <Table aria-label="simple table">
                    <TableBody>
                        {pdfs.map(item => (
                            <TableRow key={item}>
                                <TableCell component="th" scope="row">
                                    <a
                                        href={pdfMap[item]}
                                        style={{ color: '#3498db' }}
                                    >
                                        {item}
                                    </a>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
};

export default MeetingMinutes;
