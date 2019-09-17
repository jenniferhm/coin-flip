import React from 'react';
import Coin from './coin'

class Container extends React.Component {
  static defaultProps = {
    coins: [
      {
        side: "heads",
        image: "https://catalog.usmint.gov/on/demandware.static/-/Sites-usm-master-catalog-us/default/dw461eb6c6/images/hi-res/coins/Gold-Coins/17xa_a.jpg"
      },
      {
        side: "tails",
        image: "https://cdn3.volusion.com/aujxd.ayqsr/v/vspfiles/photos/623932084735-2.jpg?1497431502"
      }
    ]
  }

  constructor(props) {
    super(props);
    this.state = { totalCount: 0, headsCount: 0, tailsCount: 0, image: "" };
    this.clicker = this.clicker.bind(this);
  }

  clicker(evt) {
    const randomCoin = this.props.coins[Math.floor(Math.random() * this.props.coins.length)];
    this.setState(st => {
      return {
        totalCount: st.totalCount += 1,
        headsCount: st.headsCount + (randomCoin.side === "heads" ? 1 : 0),
        tailsCount: st.tailsCount + (randomCoin.side === "tails" ? 1 : 0),
        image: randomCoin.image
      };
    });
  }

  render() {
    return (
      <div>
         <h1>Let's flip a coin!</h1>
        <Coin image={this.state.image} />
        <button onClick={this.clicker}>FLIP MEEE</button>
        <p>
          Out of {this.state.totalCount} flips, there have been {this.state.headsCount} heads and {this.state.tailsCount} tails.
        </p>
      </div>
    )
  }
}

export default Container;