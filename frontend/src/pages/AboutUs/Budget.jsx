import { Typography } from '@material-ui/core';
import React from 'react';
import { Title } from '../../helpers/components';
import { translate } from '../../helpers/translation';

const budgetRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', 'Forecasted Budget', 'Forecasted Revenue', 'Net Gain', 'Semester'],
    ['Women in Engineering (WIE)', '', '', '', ''],
    [
        'Women in Tech Panel (marketing)',
        ' $150.00 ',
        ' $-   ',
        ' $(150.00)',
        'F'
    ],
    ['Mentorship Program', ' $50.00 ', ' $-   ', ' $(50.00)', 'W/F'],
    [
        'Women in Tech Panel speaker gifts',
        ' $200.00 ',
        ' $-   ',
        ' $(200.00)',
        ''
    ],
    ['WIE Designing', ' $50.00 ', ' $-   ', ' $(50.00)', 'W/F'],
    ['TOTAL', ' $450.00 ', ' $-   ', ' $(450.00)', ''],
    ['', '', '', '', ''],
    ['External', '', '', '', ''],
    ['', ' $-   ', ' $-   ', '', ''],
    ['TOTAL', ' $-   ', ' $-   ', ' $-   ', ''],
    ['', '', '', '', ''],
    ['Comms', '', '', '', ''],
    ['Antidote', ' $130.00 ', ' $-   ', ' $130.00 ', ''],
    ['Online Marketing (FB/Insta)', ' $200.00 ', ' $-   ', ' $(200.00)', 'W/F'],
    ['TOTAL', ' $330.00 ', ' $-   ', ' $(330.00)', ''],
    ['', '', '', '', ''],
    ['Academic', '', '', '', ''],
    ['Cookies and Cram', ' $20.00 ', '', ' $(20.00)', ''],
    ['TOTAL', ' $20.00 ', ' $-   ', ' $(20.00)', ''],
    ['', '', '', '', ''],
    ['Internal', '', '', '', ''],
    ['', ' $-   ', ' $-   ', '', ''],
    ['TOTAL', ' $-   ', ' $-   ', ' $-   ', ''],
    ['', '', '', '', ''],
    ['General', '', '', '', ''],
    ['IEEE uOttawa Website 2019-2020', ' $19.20 ', ' $-   ', ' $(19.20)', ''],
    ['Bank Fees', ' $-   ', ' $-   ', ' $-   ', ''],
    ['Online Design', ' $200.00 ', ' $-   ', ' $(200.00)', 'W/F'],
    ['Fixing Lights IEEE', ' $50.00 ', ' $-   ', ' $(50.00)', 'F'],
    ['Patches', ' $300.00 ', ' $-   ', ' $(300.00)', ''],
    ['Competitions', ' $200.00 ', ' $-   ', ' $(200.00)', ''],
    ['Scholarships', ' $500.00 ', ' $-   ', ' $500.00 ', ''],
    ['Website Fees', ' $65.51 ', ' $-   ', ' $65.51 ', ''],
    [
        'Senior Software Engineering Panel',
        ' $100.00 ',
        ' $-   ',
        ' $(100.00)',
        'W'
    ],
    ['TOTAL', ' $1,434.71 ', ' $-   ', ' $(1,434.71)', ''],
    ['', '', '', '', ''],
    ['Webmaster', '', '', '', ''],
    [
        'IEEE uOttawa Voting Service (February-March)',
        ' $40.00 ',
        ' $-   ',
        ' $(40.00)',
        ''
    ],
    [
        'IEEE uOttawa Voting Service (Rest of Year)',
        ' $200.00 ',
        ' $-   ',
        ' $(200.00)',
        'W/F/S'
    ],
    ['TOTAL', ' $240.00 ', ' $-   ', ' $(240.00)', ''],
    ['', '', '', '', ''],
    ['Misc. ', '', '', '', ''],
    ['ESS Levy', ' $-   ', ' $5,400.00 ', ' $5,400.00 ', 'W/F'],
    ['Camera', ' $700.00 ', ' $-   ', ' $(700.00)', 'F'],
    ['MicroSD Card', ' $41.00 ', ' $-   ', ' $(41.00)', 'F'],
    ['Camera Tripod', ' $100.00 ', ' $-   ', ' $(100.00)', 'F'],
    ['TOTAL', ' $841.00 ', ' $5,400.00 ', ' $4,559.00 ', ''],
    ['', '', '', '', ''],
    ['Mcnaughton Centre\n\n\n\n', '', '', '', ''],
    [
        'IEEE Canada Office Improvement Fund',
        ' $700.00 ',
        ' $550.00 ',
        ' $(150.00)',
        ''
    ],
    ['TOTAL', ' $700.00 ', ' $550.00 ', ' $(150.00)', ''],
    ['', '', '', '', ''],
    [
        '',
        'TOTAL FORECASTED BUDGET',
        'Total Forecasted Revenue',
        'Total Net Gain',
        ''
    ],
    ['', ' $4,015.71 ', ' $5,950.00 ', ' $1,934.29 ', '']
];

const Budget = () => (
    <div>
        <Title
            variant="h5"
            gutterBottom
            className="title"
            style={{ marginBottom: '16px' }}
        >
            {translate('Budget')}
        </Title>
        <div
            style={{
                maxWidth: '1000px',
                overflowX: 'auto',
                margin: '0px auto'
            }}
        >
            <Typography>
                <table id="budget-table">
                    {budgetRows.map(row => (
                        <tr>
                            {row.map(cell => (
                                <td>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </table>
            </Typography>
        </div>
        {/* <iframe
            width="100%"
            title="IEEE uOttawa Budget"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSIRkCKPieqdaSemGMWyKDl1zysL1pBABUD9-3Zi-UpdSCX2LSNiA0g4LlXw9YwUt0Aqx5yve16zbM7/pubhtml?gid=1685439230&amp;single=true&amp;widget=true&amp;headers=false"
            style={{ height: '981px' }}
        /> */}
    </div>
);

export default Budget;
