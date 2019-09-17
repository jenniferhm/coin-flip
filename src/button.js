import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.clicker}>FLIP MEEE</button>
      </div>
    )
  }  
}

export default Button;