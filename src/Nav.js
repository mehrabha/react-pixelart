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
            <button className="nav-element btn" onClick={this.props.fillAll}>Fill All</button>
                <select className="nav-element btn" defaultValue="red" onChange = {this.props.selectColor}>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="white">White</option>
                </select>
          </div>
        );
    }
}

export default Nav;
