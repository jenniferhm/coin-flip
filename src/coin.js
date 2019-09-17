import React from 'react';

class Coin extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt=""/>
      </div>
    )
  }
}

export default Coin;