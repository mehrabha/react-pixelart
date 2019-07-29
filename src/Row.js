import React from "react"
import Cell from "./Cell.js"

class Row extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            color: this.props.color
        }
    }
    render() {
        return(
          <div className="canvas-row">
            {this.props.cols.map( col => (
                <Cell color={"white"} newColor={this.props.color} /> ))}
          </div>
        );
    }
}

export default Row;
