import React from "react";
import { createRoot } from "react-dom/client";

function CounterDisplay({ count }) {
  if (count === 0) {
    return <p>{count}</p>;
  }
  if (count % 5 === 0) {
    return <p>{count}: Fizz</p>;
  }
  if (count % 7 === 0) {
    return <p>{count}: Buzz</p>;
  }
  return <p>{count}</p>;
}

function IncreaseButton({ increase }) {
  return (
    <div>
      <button onClick={increase}>+ Increase</button>
    </div>
  );
}

function ResetButton({ reset }) {
  return (
    <div>
      <button onClick={reset}>reset</button>
    </div>
  );
}

class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi nilai count di dalam state
    this.state = {
      count: 0,
    };

    //   binding event handler
    this.onCreaseEventHandler = this.onCreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  onCreaseEventHandler() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  onResetEventHandler() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <IncreaseButton increase={this.onCreaseEventHandler} />
        <CounterDisplay count={this.state.count} />
        <ResetButton reset={this.onResetEventHandler} />
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<CounterApp />);
