import React from 'react';
import ReactDOM from 'react-dom';

class MyCanvas extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({machine_number: event.target.value});
    }
  
    handleSubmit() {
      this.setState({machine_number: event.target.value});
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <label>
          Please input machine number:
          <input type="number" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      );
    }
  }
  
  ReactDOM.render(
    <MyCanvas />,
    document.getElementById('testInputBox')
  );