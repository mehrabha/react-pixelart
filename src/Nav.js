import React from "react"

class Nav extends React.Component {
    render() {
        return (
          <div className="navbar">
            <h className="nav-element title">pixel art</h>
            <button className="nav-element btn" onClick={this.props.addRow}>Row +</button>
            <button className="nav-element btn" onClick={this.props.removeRow}>Row -</button>
            <button className="nav-element btn" onClick={this.props.addCol}>Col +</button>
            <button className="nav-element btn" onClick={this.props.removeCol}>Col -</button>
          </div>
        );
    }
}

export default Nav;