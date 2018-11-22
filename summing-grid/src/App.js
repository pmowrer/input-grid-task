import React, { Component } from 'react';
import './App.css';
import { toPrecision3 } from './utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      values: [0, 0, 0],
    };
  }

  get sum() {
    return this.state.values.reduce((sum, value) => {
      const number = Number(value);
      // If a value contains non-numeric input (NaN), treat it like 0
      // to prevent the sum from being NaN as well.
      sum += !isNaN(number) ? number : 0;
      return sum;
    }, 0);
  }

  updateValue(index, event) {
    const { value } = event.target;

    this.setState(state => {
      const { values } = state;

      return {
        values: [...values.slice(0, index), value, ...values.slice(index + 1)],
      };
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Grid">
          {this.state.values.map((value, index) => (
            <div className="GridItem">
              <input
                value={value}
                key={index}
                onChange={this.updateValue.bind(this, index)}
              />
            </div>
          ))}
          <div className="GridItem">
            <span>{toPrecision3(this.sum)}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
