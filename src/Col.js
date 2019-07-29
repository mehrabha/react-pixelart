import React from "react"

class Col extends React.Component {
    render() {
        return(
            <div className="canvas-col" style={{background: this.props.color}}/>
        );
    }
}

export default Col;