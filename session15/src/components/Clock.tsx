import  { Component } from "react";

type State = {
  now: Date;
};

export default class Clock extends Component<object, State> {
  private timerId?: number;

  constructor(props: object) {
    super(props);
    this.state = { now: new Date() };
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ now: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  private format(date: Date): string {
    const hh = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");
    return `${hh} : ${mm} : ${ss}`;
  }

  render() {
    return (
      <div>
        <h3>Thời gian hiện tại: {this.format(this.state.now)}</h3>
      </div>
    );
  }
}
