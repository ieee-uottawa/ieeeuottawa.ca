import React from 'react';
import Typography from '@material-ui/core/Typography';

const Budget = () => (
  <div>
    <Typography variant="h5" gutterBottom className="title" style={{ marginBottom: '16px' }}>Budget</Typography>
    <iframe
      width="100%"
      title="IEEE uOttawa Budget"
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT2PIGHy-IYbrOnad9BOQh-eGRwY5ogl3vKgtysYeJ7BZnzUDjI7wzJ_WvHHz7UysT0EEFbHDaZ6xR6/pubhtml?widget=true&amp;headers=false"
      style={{ height: '981px' }}
    />
  </div>
);

export default Budget;

