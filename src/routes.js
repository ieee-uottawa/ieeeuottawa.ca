const loader = require('path');

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
                link: '/Execs/Execs-2019-2020'
            },
            {
                title: 'Execs 2018-2019',
                link: '/Execs/Execs-2018-2019'
            }
        ]
    },
    {
        title: 'Events',
        link: '/Events/Events'
    },
    {
        title: 'Elections',
        link: '/Elections/Elections'
    },
    {
        title: 'Election Platforms',
        link: '/Elections/ElectionPlatforms'
    },
    {
        title: 'Gallery',
        link: '/Gallery/Gallery'
    },
    {
        title: 'WIE',
        link: '/WIE/WIE'
    },
    {
        title: 'Office Hours',
        link: '/OfficeHours/OfficeHours'
    },
    {
        title: 'About Us',
        items: [
            {
                title: 'Budget',
                link: '/AboutUs/Budget'
            },
            {
                title: 'Volunteer',
                link: '/Volunteer/volunteer'
            },
            {
                title: 'Mailing List',
                link: '/AboutUs/MailingListSignUp'
            },
            {
                title: 'Constitution',
                link: '/AboutUs/Constitution'
            },
            {
                title: 'IEEE Code of Conduct',
                link: '/AboutUs/IEEECodeOfConduct'
            },
            {
                title: 'Meeting Minutes',
                link: '/AboutUs/MeetingMinutes'
            },
            {
                title: 'McNaughton Centre',
                link: '/AboutUs/McNaughtonCentre'
            }
        ]
    }
];

const getPath = title => {
    return `/${title.replace(/\s+/g, '-').toLowerCase()}`;
};

const getComponent = link => {
    return loader.resolve(`./src/pages/${link}.jsx`);
};

const getPage = route => {
    const { title, link } = route;
    return {
        path: getPath(title),
        component: getComponent(link)
    };
};

const getRoutes = () => {
    for (let i = 1; i < routes.length; i += 1) {
        const { items } = routes[i];
        if (items) {
            for (const item of items) {
                item.page = getPage(item);
                item.path = item.page.path;
            }
        } else {
            routes[i].page = getPage(routes[i]);
            routes[i].path = routes[i].page.path;
        }
    }
    return routes;
};

const getPages = () => {
    const results = [];
    for (const route of getRoutes()) {
        const { items } = route;
        if (items) results.push(...items);
        else results.push(route);
    }
    return results.slice(1);
};

module.exports = {
    routes: getRoutes(),
    getPages
};
