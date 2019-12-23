import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => {
    return <>Loading...</>;
};

// Execs
const Execs_2019_2020 = Loadable({
    loader: () => import('./pages/Execs/Execs-2019-2020'),
    loading: Loading
});

const Execs_2018_2019 = Loadable({
    loader: () => import('./pages/Execs/Execs-2018-2019'),
    loading: Loading
});

// Events
const Events = Loadable({
    loader: () => import('./pages/Events/Events'),
    loading: Loading
});

// Gallery
const Gallery = Loadable({
    loader: () => import('./pages/Gallery/Gallery'),
    loading: Loading
});

// WIE
const WIE = Loadable({
    loader: () => import('./pages/WIE/WIE'),
    loading: Loading
});

// Volunteer
const Volunteer = Loadable({
    loader: () => import('./pages/Volunteer/volunteer'),
    loading: Loading
});

// Contact Us
const OfficeHours = Loadable({
    loader: () => import('./pages/ContactUs/office-hours'),
    loading: Loading
});

const MailingList = Loadable({
    loader: () => import('./pages/ContactUs/mailing-list-sign-up'),
    loading: Loading
});

// About Us
const Budget = Loadable({
    loader: () => import('./pages/AboutUs/Budget'),
    loading: Loading
});

const Constitution = Loadable({
    loader: () => import('./pages/AboutUs/Constitution'),
    loading: Loading
});

const MeetingMinutes = Loadable({
    loader: () => import('./pages/AboutUs/MeetingMinutes'),
    loading: Loading
});

const IEEECodeOfConduct = Loadable({
    loader: () => import('./pages/AboutUs/ieee-code-of-conduct'),
    loading: Loading
});

const routes = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Execs',
        items: [
            {
                title: 'Execs 2019-2020',
                path: '/Execs/Execs-2019-2020',
                component: Execs_2019_2020
            },
            {
                title: 'Execs 2018-2019',
                path: '/Execs/Execs-2018-2019',
                component: Execs_2018_2019
            }
        ]
    },
    {
        title: 'Events',
        path: '/Events/Events',
        component: Events
    },
    {
        title: 'Gallery',
        path: '/Gallery/Gallery',
        component: Gallery
    },
    {
        title: 'WIE',
        path: '/WIE/WIE',
        component: WIE
    },
    {
        title: 'Volunteer',
        path: '/Volunteer/volunteer',
        component: Volunteer
    },
    {
        title: 'Contact Us',
        items: [
            {
                title: 'Office Hours',
                path: '/ContactUs/office-hours',
                component: OfficeHours
            },
            {
                title: 'Mailing List',
                path: '/ContactUs/mailing-list-sign-up',
                component: MailingList
            }
        ]
    },
    {
        title: 'About Us',
        items: [
            {
                title: 'Budget',
                path: '/AboutUs/Budget',
                component: Budget
            },
            {
                title: 'Constitution',
                path: '/AboutUs/Constitution',
                component: Constitution
            },
            {
                title: 'IEEE Code of Conduct',
                path: '/AboutUs/ieee-code-of-conduct',
                component: IEEECodeOfConduct
            },
            {
                title: 'Meeting Minutes',
                path: '/AboutUs/MeetingMinutes',
                component: MeetingMinutes
            }
        ]
    }
];

export default routes;
