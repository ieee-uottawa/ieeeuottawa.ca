import React from 'react';
import PropTypes from 'prop-types';
import { CalendarIcon } from 'react-calendar-icon';
import { ThemeProvider } from 'styled-components';
import { getCurrentLocale } from '../../helpers/translation';

const theme = {
    calendarIcon: {
        textColor: 'white',
        primaryColor: '#3498db',
        backgroundColor: '#ecf0f1'
    }
};

const styles = {
    color: '#3498db'
};

const Calendar = ({ id }) => {
    if (!id) return null;
    const date = new Date(id.substring(0, 10));
    const dateOptions = {
        header: { weekday: 'long' },
        footer: { month: 'short', year: 'numeric' },
        value: { day: '2-digit' },
        locale: getCurrentLocale()
    };
    return (
        <div styles={styles}>
            <ThemeProvider theme={theme}>
                <CalendarIcon
                    date={date}
                    options={dateOptions}
                    styles={styles}
                />
            </ThemeProvider>
        </div>
    );
};

Calendar.defaultProps = {
    id: null
};

Calendar.propTypes = {
    id: PropTypes.string
};

export default Calendar;
