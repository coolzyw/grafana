//import React from 'react';
//import ReactDOM from 'react-dom';
  
  
  class NameForm extends React.Component {
    constructor(props) {
      super(props);
      console.log("inside constructor");
      this.state = {value: ''};  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    updateCanvas() {
      console.log("update canvas ", this.state.value);
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        console.log("here here!!");
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log("to modify ", this.state.value);
        for (var i = 0; i < this.state.value; i++) {
          ctx.fillStyle = 'rgb(200, 0, 0)';
          ctx.fillRect(10, 10 + 80 * i, 80, 50);
          ctx.fillStyle = 'rgb(100, 10, 50)';
          ctx.fillRect(600, 10 + 80 * i, 80, 50);
        }
      }
      }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      this.updateCanvas();
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Name:
            <input type="number" value={this.state.value} onChange={this.handleChange.bind(this)} />
          </label>
          <button type="button">Click Me!</button>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('hello')
  );


var RandomMessage = React.createClass({
    getInitialState: function() {
      return { message: 'Hello, Universe' };
    },
    onClick: function() {
      var messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe'];
      var randomMessage = messages[Math.floor((Math.random() * 3))];
  
      this.setState({ message: randomMessage });
    },
    render: function() {
      return (
        <div>
          <MessageView message={ this.state.message }/>
          <p><input type="button" onClick={ this.onClick } value="Change Message"/></p>
        </div>
      );
    }
  });
  
  var MessageView = React.createClass({
    render: function() {
      return (
        <p>{ this.props.message }</p>
      );
    }
  });
  
  ReactDOM.render(
    <RandomMessage />,
    document.getElementById('greeting-div')
  );
  

  class Square extends React.Component {
    render() {
      return (
        <button className="square" onClick={() => this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
      };
    }
  
    handleClick(i) {
      const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({squares: squares});
    }
  
    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );


class MyCanvas extends React.Component {
  constructor(props) {
    super(props);
    console.log("inside constructor");
    this.state = {value: ''};  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  updateCanvas() {
    console.log("update canvas ", this.state.value);
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      console.log("here here!!");
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      console.log("to modify ", this.state.value);
      for (var i = 0; i < this.state.value; i++) {
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10 + 80 * i, 80, 50);
        ctx.fillStyle = 'rgb(100, 10, 50)';
        ctx.fillRect(600, 10 + 80 * i, 80, 50);
      }
    }
    }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    this.updateCanvas();
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Please input machine number:
          <input type="number" value={this.state.value} onChange={this.handleChange.bind(this)} />
        </label>
        <button type="button">Click Me!</button>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  }
  
  ReactDOM.render(
    <MyCanvas />,
    document.getElementById('testInputBox')
  );

