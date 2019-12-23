import React from 'react';
import routes from '../routes';

const Switcher = () => {
    return (
        <>
            <div> Switcher</div>
            {routes.map(item => {
                const { component: Component, title } = item;
                if (Component) return <Component key={title} />;
                return null;
            })}
        </>
    );
};

export default Switcher;
