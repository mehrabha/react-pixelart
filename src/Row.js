import React from "react"

class Row extends React.Component {
    render() {
        return(
          <div className="canvas-row">
            {this.props.cols}
          </div>
        );
    }
}

export default Row;