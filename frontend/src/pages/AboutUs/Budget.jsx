import React from 'react';
import { Title } from '../../helpers/components';
import { translate } from '../../helpers/translation';

const Budget = () => (
    <div>
        <Title
            variant='h5'
            gutterBottom
            className='title'
            style={{ marginBottom: '16px' }}
        >
            {translate('Budget')}
        </Title>
        <div style={{ textAlign: 'center' }}>
            <iframe
                width='90%'
                title='IEEE uOttawa Budget'
                src='https://docs.google.com/spreadsheets/d/1YQLuyiUYRCE4wHIv9Dh1Suz8e-ipuaIMUAvd8U_DRLk/edit#pubhtml?gid=1846312074&amp;single=true&amp;widget=true&amp;headers=false'
                style={{ height: '981px' }}
            />
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
