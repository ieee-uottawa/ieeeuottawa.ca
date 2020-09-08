/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Toggle.css';

function pointerCoord(event) {
    const { changedTouches, pageX } = event;
    if (event) {
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (pageX !== undefined) return { x: pageX, y: event.pageY };
    }
    return { x: 0, y: 0 };
}

class Toggle extends PureComponent {
    constructor(props) {
        super(props);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleTouchCancel = this.handleTouchCancel.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        const { checked, defaultChecked } = props;
        this.previouslyChecked = !!(checked || defaultChecked);
        this.state = {
            checked: !!(checked || defaultChecked),
            hasFocus: false,
        };
    }

    componentDidUpdate(nextProps) {
        this.checkState(nextProps);
    }

    getIcon(type) {
        const { icons } = this.props;
        if (!icons) return null;

        return icons[type] === undefined
            ? Toggle.defaultProps.icons[type]
            : icons[type];
    }

    checkState(nextProps) {
        if ('checked' in nextProps) {
            this.setState({ checked: !!nextProps.checked });
            this.previouslyChecked = !!nextProps.checked;
        }
    }

    handleClick(event) {
        const checkbox = this.input;
        this.previouslyChecked = checkbox.checked;
        if (event.target !== checkbox && !this.moved) {
            event.preventDefault();
            checkbox.focus();
            checkbox.click();
            return;
        }
        this.setState({ checked: checkbox.checked });
    }

    handleTouchStart(event) {
        this.startX = pointerCoord(event).x;
        this.touchStarted = true;
        const { hasFocus } = this.state;
        this.hadFocusAtTouchStart = hasFocus;
        this.setState({ hasFocus: true });
    }

    handleTouchMove(event) {
        if (!this.touchStarted) return;
        this.touchMoved = true;

        if (this.startX != null) {
            const currentX = pointerCoord(event).x;
            const { checked } = this.state;
            if (checked && currentX + 15 < this.startX) {
                this.setState({ checked: false });
                this.startX = currentX;
            } else if (!checked && currentX - 15 > this.startX) {
                this.setState({ checked: true });
                this.startX = currentX;
            }
        }
    }

    handleTouchEnd(event) {
        if (!this.touchMoved) return;
        const checkbox = this.input;
        event.preventDefault();

        if (this.startX != null) {
            const { checked } = this.state;
            if (this.previouslyChecked !== checked) {
                checkbox.click();
            }
            this.touchStarted = false;
            this.startX = null;
            this.touchMoved = false;
        }
        if (!this.hadFocusAtTouchStart) {
            this.setState({ hasFocus: false });
        }
    }

    handleTouchCancel() {
        if (this.startX != null) {
            this.touchStarted = false;
            this.startX = null;
            this.touchMoved = false;
        }
        if (!this.hadFocusAtTouchStart) this.setState({ hasFocus: false });
    }

    handleFocus(event) {
        const { onFocus } = this.props;
        if (onFocus) onFocus(event);
        this.hadFocusAtTouchStart = true;
        this.setState({ hasFocus: true });
    }

    handleBlur(event) {
        const { onBlur } = this.props;
        if (onBlur) onBlur(event);
        this.hadFocusAtTouchStart = false;
        this.setState({ hasFocus: false });
    }

    render() {
        const {
            className,
            icons: _icons,
            disabled,
            ...inputprops
        } = this.props;

        const { checked, hasFocus } = this.state;

        const classes = `react-toggle${
            checked ? ' react-toggle--checked' : ''
        }${hasFocus ? ' react-toggle--focus' : ''}${
            disabled ? ' react-toggle--disabled' : ''
        }${className ? ` ${className}` : ''}`;

        return (
            <div
                className={classes}
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
                onTouchCancel={this.handleTouchCancel}
            >
                <div className='react-toggle-track'>
                    <div className='react-toggle-track-check'>
                        {this.getIcon('checked')}
                    </div>
                    <div className='react-toggle-track-x'>
                        {this.getIcon('unchecked')}
                    </div>
                </div>
                <div className='react-toggle-thumb' />

                <input
                    {...inputprops}
                    ref={(ref) => {
                        this.input = ref;
                    }}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    readOnly
                    className='react-toggle-screenreader-only'
                    type='checkbox'
                    aria-label='Switch between Dark and Light mode'
                />
            </div>
        );
    }
}

Toggle.defaultProps = {
    checked: null,
    className: null,
    disabled: null,
    icons: null,
    inputprops: null,
    onBlur: null,
    onFocus: null,
};

Toggle.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    icons: PropTypes.object,
    inputprops: PropTypes.any,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
};

export default Toggle;
