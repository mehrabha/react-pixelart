import React from "react"

class Row extends React.Component {
    render() {
        return(
          <div className="canvas-row">
            {this.props.cols.map(col => (
                <div className="canvas-col" style={{backgroundColor: col}}></div>
            ))}
          </div>
        );
    }
}

export default Row;