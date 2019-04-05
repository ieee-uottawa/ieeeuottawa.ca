import React from 'react';
import Typography from '@material-ui/core/Typography';

const Budget = () => (
  <div>
    <Typography variant="h5" gutterBottom className="title" style={{ marginBottom: '16px' }}>Budget</Typography>
    <iframe
      width="100%"
      title="IEEE uOttawa Budget"
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSIRkCKPieqdaSemGMWyKDl1zysL1pBABUD9-3Zi-UpdSCX2LSNiA0g4LlXw9YwUt0Aqx5yve16zbM7/pubhtml?gid=1685439230&amp;single=true&amp;widget=true&amp;headers=false"
      style={{ height: '981px' }}
    />
  </div>
);

export default Budget;

