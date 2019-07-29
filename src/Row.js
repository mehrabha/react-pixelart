import React from "react"
import Col from "./Col.js"

class Row extends React.Component {
    render() {
        return(
          <div className="canvas-row">
            {this.props.cols.map(color => (
                <Col color={color}/>
            ))}
          </div>
        );
    }
}

export default Row;