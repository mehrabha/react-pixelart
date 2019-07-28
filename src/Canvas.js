import React from "react"
import Row from "./Row.js"

class Canvas extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            color: this.props.color
        }
    }
    render() {
        return (
            <div className="canvas-container">
              {this.props.rows.map(row => (
                    <Row cols={row} color={this.props.color} />
              ))}
            </div>
        );
    }
}

export default Canvas;
