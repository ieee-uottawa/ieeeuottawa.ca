import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { moneyFormatter } from '../util';

const services = [
  {
    name: 'Breadboard (Small)',
    cost: 8,
  },
  {
    name: 'Breadboard (Medium)',
    cost: 24,
  },
  {
    name: 'Breadboard (Large)',
    cost: 30,
  },
  {
    name: 'Wire Strippers (Small)',
    cost: 12,
  },
  {
    name: 'Wire Strippers (Large)',
    cost: 15,
  },
  {
    name: 'CD-Rs',
    cost: 1,
  },
  {
    name: 'Printing (Black ink only)',
    cost: '$0.05/page',
  },
  { name: 'Scanning' },
  { name: 'Internet Access' },
  { name: 'Microwave' },
  { name: 'Oscilloscope' },
  { name: 'HCS12 Dragon12 Plus Board (onsite use only)' },
  { name: 'Altera DE2 Board' },
];

const McNaughtonCentre = () => (
  <div>
    <p className="p-margins">
        Located in SITE 4026, the McNaughton Centre is intended to enhance the learning experiences of IEEE student members at Canadian Universities
        and Colleges, as well as encouraging IEEE membership and activities, and interaction between the Student Branch and the Ottawa Section. Ted
        Glass (in 1979) created the first centre at the University of Manitoba in memory of General Andrew G. L. McNaughton, one of Canada’s most
        distinguished electrical engineers.
    </p>
    <p className="p-margins">The McNaughton Centre at uOttawa is proud to announce services available to all IEEE student members and SITE students.</p>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Service</TableCell>
          <TableCell>Cost</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {services.map(({ name, cost }) => {
            let costStr;
            if (!cost) {
              costStr = 'FREE';
            } else if (typeof cost === 'number') {
              costStr = moneyFormatter.format(cost);
            } else if (typeof cost === 'string') {
              costStr = cost;
            }

            return (
              <TableRow>
                <TableCell component="th" scope="row">{name}</TableCell>
                <TableCell>{costStr}</TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  </div>
);

export default McNaughtonCentre;

