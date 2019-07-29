import React from "react"
import Row from "./Row.js"

class Canvas extends React.Component {
    render() {
        return (
            <div className="canvas-container">
              {this.props.rows.map(row => (
                  <Row cols={row}/>
              ))}
            </div>
        );
    }
}

export default Canvas;