import React, { Component } from 'react'


const Square = (props) => {
  return (
    <div onClick={() => props.onClick(props.id)} className="square" style={{ margin: "10px", background: props.color, width: '100px', height: "100px" }}>

    </div>
  );
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
      squares: [
        {
          id: 1,
          color: "red"
        },
        {
          id: 2,
          color: "blue",
        },
      ]
    };

    this.onClick = this.onClick.bind(this);

  }
  onClick(id) {
    const squares = [...this.state.squares];

    let index = -1;

    for (let i = 0; i < squares.length; i += 1) {
      if (squares[i].id === id) {
        index = i;
        break;
      }
    }

    squares[index].color = 'green';

    this.setState({ squares });
  }

  render() {
    return <div className="App">
      {this.state.squares.map(x => (
        <Square id={x.id} onClick={this.onClick} color={x.color} key={x.id} />
      ))}
    </div>
  }
}

export default App;
