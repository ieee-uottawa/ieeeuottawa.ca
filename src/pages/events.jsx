import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import { connect } from 'react-redux';

import Event from '../components/event';

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { store } = this.context;
    console.log(store.getState());
    this.state = store.getState();
    this.state.unsubscribe = store.subscribe(() => console.log(store.getState()));
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  render() {
    console.log(this.state);
    const { events } = this.state;

    return (
      <GridList id="event-grid" cols={2}>
        {events.map(({ imageURL, name, description, url }) => <Event imageURL={imageURL} name={name} description={description} url={url} />)}
      </GridList>
    );
  }
}

Events.contextTypes = {
  store: PropTypes.object,
};

export default connect()(Events);

