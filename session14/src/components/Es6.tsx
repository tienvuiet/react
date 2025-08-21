import { Component } from "react";

type State = {
  sex: string;
};

export default class Es6 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      sex: "", 
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Giới tính:", this.state.sex);
    
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({
      sex: value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Chọn giới tính</h3>
          <label>Giới tính: {this.state.sex}</label>
          <br />

          <input
            type="radio"
            name="sex"
            value="Nam"
            onChange={this.handleChange}
          />
          Nam
          <br />

          <input
            type="radio"
            name="sex"
            value="Nữ"
            onChange={this.handleChange}
          />
          Nữ
          <br />

          <input
            type="radio"
            name="sex"
            value="Khác"
            onChange={this.handleChange}
          />
          Khác
          <br />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}
