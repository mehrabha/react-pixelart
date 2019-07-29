import React from "react"
import Nav from "./Nav.js"
import Canvas from "./Canvas.js"
import "./App.css"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            rows: [],
            defaultColor: "white",
            currentColor: "red"
        }

        this.addRow = this.addRow.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.addCol = this.addCol.bind(this);
        this.removeCol = this.removeCol.bind(this);
        this.fillAll = this.fillAll.bind(this);
        this.fill = this.fill.bind(this);
    }

    componentDidMount() {
        let newRows = [];
        for (let i = 0; i < 6; i++) {
            let newRow = []
            for (let j = 0; j < 6; j++) {
                newRow.push(this.state.defaultColor);
            }
            newRows.push(newRow);
        }
        this.setState({rows: newRows});
    }

    addRow() {
        let newRows = this.state.rows;
        let newRow = [];
        if (newRows.length === 0){
            for (let i = 0; i < 6; i++){
                newRow.push("grey");
            }
        } else{
            for (let i = 0; i < newRows[0].length; i++) {
                newRow.push("grey");
            }
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
            newRows[i].push(this.state.defaultColor);
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

    fill() {
        let oldRows = this.state.rows;
        let newRows = [];
        for (let i = 0; i < oldRows.length; i++) {
            let newRow = []
            for (let j = 0; j < oldRows[i].length; j++) {
                if (oldRows[i][j] == this.state.defaultColor) {
                    newRow.push(this.state.currentColor);
                } else {
                    newRow.push(oldRows[i][j]);
                }
            }
            newRows.push(newRow);
        }
        this.setState({rows: newRows});
    }

    fillAll() {
        let oldRows = this.state.rows;
        let newRows = [];
        for (let i = 0; i < oldRows.length; i++) {
            let newRow = []
            for (let j = 0; j < oldRows[i].length; j++) {
                newRow.push(this.state.currentColor);
            }
            newRows.push(newRow);
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
                fill={this.fill}
                fillAll={this.fillAll}
              />
              <Canvas rows={this.state.rows}/>
            </div>
        );
    }
}

export default App;
