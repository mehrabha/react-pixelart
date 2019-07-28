import React from "react"
import Nav from "./Nav.js"
import Canvas from "./Canvas.js"
import "./App.css"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            rows: []
        }

        this.addRow = this.addRow.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.addCol = this.addCol.bind(this);
        this.removeCol = this.removeCol.bind(this);
    }

    componentDidMount() {
        let newRows = [];
        for (let i = 0; i < 6; i++) {
            let newRow = []
            for (let j = 0; j < 6; j++) {
                newRow.push(<div className="canvas-col" style={{backgroundColor: "white"}}></div>);
            }
            newRows.push(newRow);
        }
        this.setState({rows: newRows});
    }

    addRow() {
        let newRows = this.state.rows;

        let newRow = [];
        for (let i = 0; i < newRows[0].length; i++) {
            newRow.push(<div className="canvas-col" style={{backgroundColor: "grey"}}></div>);
        }
        newRows.push(newRow);
        this.setState({rows: newRows});
    }

    removeRow() {
        let newRows = this.state.rows;
        newRows.pop()

        this.setState({rows: newRows});
    }

    addCol() {
        let newRows = this.state.rows;

        for (let i = 0; i < newRows.length; i++) {
            newRows[i].push(<div className="canvas-col" style={{backgroundColor: "grey"}}></div>);
        }
        this.setState({rows: newRows});
    }

    removeCol() {
        let newRows = this.state.rows;

        for (let i = 0; i < newRows.length; i++) {
            newRows[i].pop();
        }
        this.setState({rows: newRows});
    }

    render() {
        return(
            <div className="app-container">
              <Nav 
                addRow={this.addRow}
                removeRow={this.removeRow}
                addCol={this.addCol}
                removeCol={this.removeCol}
              />
              <Canvas rows={this.state.rows}/>
            </div>
        );
    }
}

export default App;