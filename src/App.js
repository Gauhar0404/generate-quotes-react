import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: null,
      randomQuote: null
    };
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ quotes: data.quotes });
      });
  }
  randomQuoteHandler = () => {
    const randomNum = Math.floor(Math.random() * this.state.quotes.length);
    const randomQuote = this.state.quotes[randomNum];
    this.setState({ randomQuote });
  };
  render() {
    return (
      <div className="container">
        <div className="quote">
          <h2>
            {this.state.randomQuote !== null && this.state.randomQuote.quote}
          </h2>
          <h5>
            {this.state.randomQuote !== null && this.state.randomQuote.author}
          </h5>
        </div>
        <button className="btn" onClick={this.randomQuoteHandler}>
          Next
        </button>
      </div>
    );
  }
}

export default App;
