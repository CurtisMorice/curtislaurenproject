import React, { Component } from 'react';


class SnackItem extends Component {

  render() {
    return (
        <li>{this.props.snack}</li>
    );
  }
}

export default SnackItem;