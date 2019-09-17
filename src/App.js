import React from 'react';
import './App.css';
import Coin from './coin';
import Button from './button';

const heads = "https://catalog.usmint.gov/on/demandware.static/-/Sites-usm-master-catalog-us/default/dw461eb6c6/images/hi-res/coins/Gold-Coins/17xa_a.jpg";
const tails = "https://cdn3.volusion.com/aujxd.ayqsr/v/vspfiles/photos/623932084735-2.jpg?1497431502";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { totalCount: 0, headsCount: 0, tailsCount: 0, image: "hidden" };
    this.clicker = this.clicker.bind(this);
  }

  clicker(evt) {
    this.setState(st => ({totalCount: st.totalCount += 1}));
    if (Math.random() > 0.5) {
      this.setState(st => ({
        headsCount: st.headsCount += 1, image: heads
      }))
    } else {
      this.setState(st => ({
        tailsCount: st.tailsCount += 1, image: tails
      }))
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Let's flip a coin!</h1>
        <Coin image={this.state.image} />
        <Button clicker={this.clicker}/>
        <p>Out of {this.state.totalCount} flips, there have been {this.state.headsCount} heads and {this.state.tailsCount} tails.</p>
      </div>
    );
  }
}

export default App;
