
import Column from '../src/Components/Column'
import React, { Component } from "react";
import "./App.css";

const DIRECTION_LEFT = -1;
const DIRECTION_RIGHT = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          name: "A.D.",
          cards: [{ name: "Eggs" }, {name: 'bread'}]
        },
        {
          name: "Dina",
          cards: [{ name: "Coffee"}, {name:'tea'} ]
        },
        {
          name: "Josiah",
          cards: [{ name: "hot chocolate" }, {name: 'smores'}]
        },
        {
          name: "Zoe",
          cards: [{ name: "milk" }, {name:'cereal'}]
        }
      ]
    };
  }

  handleAdd = columnIndex => {
    //  accept column name from users
    const name = window.prompt('Name?')
    //  if no name provided, return
    if(!name) return
    // deconstruct the object and save the name on card
    const card = { name }
    this.setState(prevState => {
      const { columns } = this.state
      columns[columnIndex].cards.push(card)
      return { columns }
    })
  }

  handleMove = (columnIndex, cardIndex, direction) => {
    this.setState(prevState => {
      const { columns } = prevState
      const [card] = columns[columnIndex].cards.splice(cardIndex, 1)
      columns[columnIndex + direction].cards.push(card)
      return { columns }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.columns.map((column, columnIndex) => (
          // <div>
          //   {column.name}
          //   {column.cards.map((card) =>(
          //     <div>
          //       {card.name}
          //     </div>
          //   )
          //     )}
          // </div>
          <Column
            column={column}
            columnIndex={columnIndex}
            key={columnIndex}
            onMoveLeft={cardIndex => this.handleMove(columnIndex, cardIndex, DIRECTION_LEFT)}
            onMoveRight={cardIndex => this.handleMove(columnIndex, cardIndex, DIRECTION_RIGHT)}
            onAddCard={() => this.handleAdd(columnIndex)}
          />
        ))}
      </div>
    );
  }
}

export default App;

