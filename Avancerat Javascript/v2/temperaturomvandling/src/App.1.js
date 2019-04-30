import React, { Component } from 'react';

class celcius extends Component {
  render() {
    return (
      <>
        <label>
          <input value={this.props.value} type="text" onChange={this.props.onChange} />
          inches
        </label>
      </>
    );
  }
}

export default celcius;