import React, { Component } from 'react';
import {connect} from 'react-redux';
import SnackItem from './SnackItem';

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  })

class SnackList extends Component {

  render() {
    return (
      <div>
        {this.props.reduxState.ourReducer.map((snack, i) => {
          return <SnackItem snack={snack} key={i} />
        })}
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(SnackList);
