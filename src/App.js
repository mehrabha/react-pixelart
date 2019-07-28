import React from "react"
import Nav from "./Nav.js"
import Canvas from "./Canvas.js"
import "./App.css"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            rows: [],
            currentColor: "red"
        }

        this.addRow = this.addRow.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.addCol = this.addCol.bind(this);
        this.removeCol = this.removeCol.bind(this);
        this.fillAll = this.fillAll.bind(this);
    }

    componentDidMount() {
        let newRows = [];
        for (let i = 0; i < 6; i++) {
            let newRow = []
            for (let j = 0; j < 6; j++) {
                newRow.push(j);
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
                newRow.push(i);
            }
        }
        else{
            for (let i = 0; i < newRows[0].length; i++) {
                newRow.push(i);
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
            newRows[i].push(i);
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
    
    fillAll(){
        let oldRows = this.state.rows;
        let newRows = [];
        for (let i = 0; i < oldRows.length; i++) {
            let newRow = []
            for (let j = 0; j < oldRows[i].length; j++) {
                newRow.push(<div className="canvas-col" style={{backgroundColor: this.state.currentColor}}></div>);
            }
            newRows.push(newRow);
        }
        this.setState({
                      rows: newRows
        })
    }

    render() {
        return(
            <div className="app-container">
              <Nav 
                addRow={this.addRow}
                removeRow={this.removeRow}
                addCol={this.addCol}
                removeCol={this.removeCol}
                fillAll={this.fillAll}
              />
               <Canvas rows={this.state.rows} color={this.state.currentColor} />
            </div>
        );
    }
}

export default App;
